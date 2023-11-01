from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.orm import validates
from datetime import date, datetime

from config import db, bcrypt


# Models go here!
class Client(db.Model, SerializerMixin):
    __tablename__ = "clients"

    id = db.Column(db.Integer, primary_key=True)
    given_name = db.Column(db.String, nullable=False)
    family_name = db.Column(db.String, nullable=False)
    full_name = db.Column(db.String, nullable=False)
    dob = db.Column(db.Date, nullable=False)
    notes = db.Column(db.String)
    waiver = db.Column(db.Boolean, default=False)
    username = db.Column(db.String, unique=True, nullable=False)
    _password_hash = db.Column(db.String, nullable=False)

    # Add relationships
    client_trips = db.relationship("ClientTrip", back_populates="client")
    trips = association_proxy("client_trips", "trip")

    reviews = db.relationship("Review", back_populates="client")

    # Add serialization rules
    serialize_rules = ("-_password_hash", "-client_trips", "-trips", "-reviews")

    # Password
    @hybrid_property
    def password_hash(self):
        raise AttributeError("Password hashes may not be viewed.")

    @password_hash.setter
    def password_hash(self, password):
        if len(password) < 10:
            raise ValueError("Password must be at least 10 characters")
        password_hash = bcrypt.generate_password_hash(password.encode("utf-8"))
        self._password_hash = password_hash.decode("utf-8")

    def authenticate(self, password):
        if not password:
            return False
        return bcrypt.check_password_hash(self._password_hash, password.encode("utf-8"))

    # Add validations
    @validates("given_name")
    def validate_given_name(self, key, given_name):
        if not given_name:
            raise ValueError("Given name is required")
        if not isinstance(given_name, str):
            raise ValueError("Given name must be a string")
        if len(given_name) > 35:
            raise ValueError("Given name must be 35 characters or fewer")
        return given_name

    @validates("family_name")
    def validate_family_name(self, key, family_name):
        if not family_name:
            raise ValueError("Family name is required")
        if not isinstance(family_name, str):
            raise ValueError("Family name must be a string")
        if len(family_name) > 35:
            raise ValueError("Family name must be 35 characters or fewer")
        return family_name

    @validates("full_name")
    def validate_full_name(self, key, full_name):
        if not full_name:
            raise ValueError("Full name is required")
        if not isinstance(full_name, str):
            raise ValueError("Full name must be a string")
        if len(full_name) > 70:
            raise ValueError("Full name must be 70 characters or fewer")
        return full_name

    @validates("dob")
    def validate_dob(self, key, dob):
        if not dob:
            raise ValueError("Date of birth is required")
        if not isinstance(dob, date):
            raise ValueError("Date of birth must be a date object")
        if dob >= date.today():
            raise ValueError("Date of birth must be before today")
        return dob

    @validates("notes")
    def validate_notes(self, key, notes):
        if not isinstance(notes, str):
            raise ValueError("Notes must be a string")
        if len(notes) > 500:
            raise ValueError("Notes must be 500 characters or fewer")
        return notes

    @validates("waiver")
    def validate_waiver(self, key, waiver):
        if not waiver:
            raise ValueError("Waiver value required")
        if not isinstance(waiver, bool):
            raise ValueError("Waiver must be a boolean value - False or True")
        return waiver

    @validates("username")
    def validate_username(self, key, username):
        if not username:
            raise ValueError("Username is required")
        if 5 > len(username) > 75:
            raise ValueError("Username must be between 5 and 75 characters inclusive")
        existing_username = Client.query.filter(Client.username == username).first()
        if existing_username and existing_username != self:
            raise ValueError(
                "Username is already taken - please choose a unique username"
            )
        return username

    def __repr__(self):
        return f"<Client {self.first_name} {self.last_name} | DOB {self.dob} | {self.sex} | Username {self.username}>"


class Trip(db.Model, SerializerMixin):
    __tablename__ = "trips"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True, nullable=False)
    length = db.Column(db.Float, nullable=False)

    # Add relationships
    client_trips = db.relationship("ClientTrip", back_populates="trip")
    clients = association_proxy("client_trips", "client")

    # Add serialization rules
    serialize_rules = ("-client_trips", "-clients")

    # Add validations

    def __repr__(self):
        return f"<Trip: {self.name} | Length: {self.length}>"


class ClientTrip(db.Model, SerializerMixin):
    __tablename__ = "client_trips"

    id = db.Column(db.Integer, primary_key=True)
    start_date = db.Column(db.Date, nullable=False)
    paid = db.Column(db.Boolean, default=False)

    client_id = db.Column(db.Integer, db.ForeignKey("clients.id"), nullable=False)
    trip_id = db.Column(db.Integer, db.ForeignKey("trips.id"), nullable=False)

    # Add relationships
    client = db.relationship("Client", back_populates="client_trips")
    trip = db.relationship("Trip", back_populates="client_trips")

    # Add serialization rules
    serialize_rules = ("-client.client_trips", "-trip.client_trips")

    # Add validations

    def __repr__(self):
        return f"<Client Trip {self.id} Starts: {self.start_date} Ends: {self.end_date} Client ID {self.client_id} Trip ID {self.trip_id}>"


class Review(db.Model, SerializerMixin):
    __tablename__ = "reviews"

    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date, default=datetime.today, nullable=False)
    comment = db.Column(db.String, nullable=False)

    client_id = db.Column(db.Integer, db.ForeignKey("clients.id"), nullable=False)

    # Add relationships
    client = db.relationship("Client", back_populates="reviews")

    # Add serialization rules
    serialize_rules = ("-client",)

    # Add validations

    def __repr__(self):
        return f"<By Client {self.client_id} | {self.comment} | Left on: {self.date}>"

from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.hybrid import hybrid_property

from config import db, bcrypt


# Models go here!
class Client(db.Model, SerializerMixin):
    __tablename__ = "clients"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    dob = db.Column(db.Date)
    sex = db.Column(db.String)
    username = db.Column(db.String, unique=True, nullable=False)
    _password_hash = db.Column(db.String, nullable=False)

    # Add relationship
    client_trips = db.relationship("ClientTrip", back_populates="client")
    trips = association_proxy("client_trips", "trip")

    # Add serialization rules
    serialize_rules = ("-_password_hash", "-client_trips", "-trips")

    # Password
    @hybrid_property
    def password_hash(self):
        raise AttributeError("Password hashes may not be viewed.")

    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(password.encode("utf-8"))
        self._password_hash = password_hash.decode("utf-8")

    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash, password.encode("utf-8"))

    # Add validation

    def __repr__(self):
        return f"<Client {self.first_name} {self.last_name} | DOB {self.dob} | {self.sex} | Username {self.username}>"


class Trip(db.Model, SerializerMixin):
    __tablename__ = "trips"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    length = db.Column(db.Float, nullable=False)

    # Add relationship
    client_trips = db.relationship("ClientTrip", back_populates="trip")
    clients = association_proxy("client_trips", "client")

    # Add serialization rules
    serialize_rules = ("-client_trips", "-clients")

    # Add validation

    def __repr__(self):
        return f"<Trip: {self.name} | Length: {self.length}>"


class ClientTrip(db.Model, SerializerMixin):
    __tablename__ = "client_trips"

    id = db.Column(db.Integer, primary_key=True)
    start_date = db.Column(db.Date, nullable=False)

    client_id = db.Column(db.Integer, db.ForeignKey("clients.id"), nullable=False)
    trip_id = db.Column(db.Integer, db.ForeignKey("trips.id"), nullable=False)

    # Add relationship
    client = db.relationship("Client", back_populates="client_trips")
    trip = db.relationship("Trip", back_populates="client_trips")

    # Add serialization rules
    serialize_rules = ("-client.client_trips", "-trip.client_trips")

    # Add validation

    def __repr__(self):
        return f"<Client Trip {self.id} Starts: {self.start_date} Ends: {self.end_date} Client ID {self.client_id} Trip ID {self.trip_id}>"

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

    # Add serialization rules
    serialize_rules = ("-_password_hash",)

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
        return f"<Client {self.first_name} {self.last_name} | DOB {self.dob} | {self.sex} | Username {self.username}"


class Trip(db.Model, SerializerMixin):
    __tableName__ = "trips"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    length = db.Column(db.Float, nullable=False)

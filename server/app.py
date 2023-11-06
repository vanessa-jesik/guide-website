#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, session
from flask_restful import Resource
from sqlalchemy import desc

# Local imports
from config import app, db, api


# Add your model imports
from models import Admin, Client, Trip, ClientTrip, Review


# Views go here!
@app.before_request
def check_if_signed_in():
    open_access = ["create_account", "check_session", "sign_in", "reviews", "trips"]
    if (request.endpoint) not in open_access:
        if session.get("admin_id"):
            return None
        elif not session.get("client_id"):
            return {"error": "401 Unauthorized"}, 401


class CreateAccount(Resource):
    # Just to test before_request is working properly
    def get(self):
        return {}, 200

    def post(self):
        client_json = request.get_json()
        username = client_json.get("username")
        existing_admin = Admin.query.filter(Admin.username == username).first()
        existing_client = Client.query.filter(Client.username == username).first()
        if existing_admin or existing_client:
            return {
                "error": "Username already exists - please choose unique username"
            }, 409
        client = Client()
        try:
            for key in client_json:
                if hasattr(client, key):
                    setattr(client, key, client_json[key])
            client.password = client_json.get("password")
            db.session.add(client)
            db.session.commit()
            session["client_id"] = client.id
            return client.to_dict(), 201
        except ValueError as err:
            return {"error": err.__str__()}, 422


class CheckSession(Resource):
    def get(self):
        client_id = session.get("client_id")
        if client_id:
            client = db.session.get(Client, client_id)
            return client.to_dict(), 200
        admin_id = session.get("admin_id")
        if admin_id:
            admin = db.session.get(Admin, admin_id)
            return admin.to_dict(), 200
        return {}, 401


class SignIn(Resource):
    def post(self):
        sign_in_json = request.get_json()
        username = sign_in_json.get("username")
        password = sign_in_json.get("password")
        if not username or not password:
            return {"error": "Username and Password required to sign in"}, 400
        client = Client.query.filter(Client.username == username).first()
        if client:
            if client.authenticate(password):
                session["client_id"] = client.id
                return client.to_dict(), 200
        admin = Admin.query.filter(Admin.username == username).first()
        if admin:
            if admin.authenticate(password):
                session["admin_id"] = admin.id
                return admin.to_dict(), 200
        return {"error": "Username or Password incorrect"}, 401


class SignOut(Resource):
    def delete(self):
        session["client_id"] = None
        session["admin_id"] = None
        return {}, 200


class Trips(Resource):
    def get(self):
        return [trip.to_dict() for trip in Trip.query.all()], 200

    def post(self):
        trip_json = request.get_json()
        trip = Trip()
        try:
            for key in trip_json:
                if hasattr(trip, key):
                    setattr(trip, key, trip_json[key])
            db.session.add(trip)
            db.session.commit()
            return trip.to_dict(), 201
        except ValueError as e:
            return {"error": e.__str__()}, 422


class TripById(Resource):
    def patch(self, id):
        trip_json = request.get_json()
        trip = db.session.get(Trip, id)
        if trip:
            try:
                for key in trip_json:
                    if hasattr(trip, key):
                        setattr(trip, key, trip_json[key])
                db.session.commit()
                return trip.to_dict(), 200
            except ValueError as e:
                return {"error": e.__str__()}, 422
        return {"error": "Trip not found"}, 404

    def delete(self, id):
        trip = db.session.get(Trip, id)
        if trip:
            db.session.delete(trip)
            db.session.commit()
            return {}, 204
        return {"error": "Trip not found"}, 404


class Reviews(Resource):
    def get(self):
        return [
            review.to_dict()
            for review in Review.query.order_by(desc(Review.date)).all()
        ], 200


class ReviewById(Resource):
    def delete(self, id):
        review = db.session.get(Review, id)
        if review:
            db.session.delete(review)
            db.session.commit()
            return {}, 204
        return {"error": "Review not found"}, 404


# A view for testing/viewing data format
class ClientById(Resource):
    def get(self, id):
        client = db.session.get(Client, id)
        return client.to_dict(), 200


api.add_resource(CreateAccount, "/create_account", endpoint="create_account")
api.add_resource(CheckSession, "/check_session", endpoint="check_session")
api.add_resource(SignIn, "/sign_in", endpoint="sign_in")
api.add_resource(SignOut, "/sign_out", endpoint="sign_out")
api.add_resource(Trips, "/trips", endpoint="trips")
api.add_resource(TripById, "/trips/<int:id>", endpoint="tripbyid")
api.add_resource(Reviews, "/reviews", endpoint="reviews")
api.add_resource(ReviewById, "/reviews/<int:id>", endpoint="reviewbyid")
api.add_resource(ClientById, "/clientbyid/<int:id>")


if __name__ == "__main__":
    app.run(port=5555, debug=True)

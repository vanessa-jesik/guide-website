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
    open_access = ["create_account", "check_session", "sign_in", "trips", "reviews"]
    admin_only = ["clients", "trips_admin", "tripbyid", "client_trips_admin"]
    endpoint = request.endpoint
    if endpoint in open_access:
        return None
    elif session.get("admin_id"):
        return None
    elif session.get("client_id"):
        if endpoint in admin_only:
            return {"error": "403 Forbidden"}, 403
    else:
        return {"error": "401 Unauthorized"}, 401


class CreateAccount(Resource):
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


class Clients(Resource):
    def get(self):
        return [
            client.to_dict()
            for client in Client.query.order_by(Client.family_name).all()
        ], 200


class Trips(Resource):
    def get(self):
        return [trip.to_dict() for trip in Trip.query.all()], 200


class TripsAdmin(Resource):
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


class ClientTripsAdmin(Resource):
    def get(self):
        return [
            client_trip.to_dict()
            for client_trip in ClientTrip.query.order_by(
                desc(ClientTrip.start_date)
            ).all()
        ], 200


class ClientTrips(Resource):
    def post(self):
        client_trip_json = request.get_json()
        trip_id = int(client_trip_json.get("trip_id"))
        client_trip_json["trip_id"] = trip_id
        client_trip = ClientTrip()
        try:
            for key in client_trip_json:
                if hasattr(client_trip, key):
                    setattr(client_trip, key, client_trip_json[key])
            db.session.add(client_trip)
            db.session.commit()
            return (
                client_trip.to_dict(rules=("-client",)),
                201,
            )
        except ValueError as e:
            return {"error": e.__str__()}, 422


class ClientTripById(Resource):
    def delete(self, id):
        client_trip = db.session.get(ClientTrip, id)
        if client_trip:
            db.session.delete(client_trip)
            db.session.commit()
            return {}, 204
        return {"error": "Client trip not found"}, 404


class Reviews(Resource):
    def get(self):
        return [
            review.to_dict()
            for review in Review.query.order_by(desc(Review.date)).all()
        ], 200


class ReviewsClient(Resource):
    def post(self):
        review_json = request.get_json()
        review = Review()
        try:
            for key in review_json:
                if hasattr(review, key):
                    setattr(review, key, review_json[key])
            db.session.add(review)
            db.session.commit()
            return review.to_dict(rules=("-client",)), 201
        except ValueError as e:
            return {"error": e.__str__()}, 422


class ReviewById(Resource):
    def delete(self, id):
        review = db.session.get(Review, id)
        if review:
            db.session.delete(review)
            db.session.commit()
            return {}, 204
        return {"error": "Review not found"}, 404


api.add_resource(CreateAccount, "/create_account", endpoint="create_account")
api.add_resource(CheckSession, "/check_session", endpoint="check_session")
api.add_resource(SignIn, "/sign_in", endpoint="sign_in")
api.add_resource(SignOut, "/sign_out", endpoint="sign_out")
api.add_resource(Clients, "/clients", endpoint="clients")
api.add_resource(Trips, "/trips", endpoint="trips")
api.add_resource(TripsAdmin, "/trips_admin", endpoint="trips_admin")
api.add_resource(TripById, "/trips/<int:id>", endpoint="tripbyid")
api.add_resource(ClientTripsAdmin, "/client_trips_admin", endpoint="client_trips_admin")
api.add_resource(ClientTrips, "/client_trips", endpoint="client_trips")
api.add_resource(ClientTripById, "/client_trips/<int:id>", endpoint="clienttripbyid")
api.add_resource(Reviews, "/reviews", endpoint="reviews")
api.add_resource(ReviewsClient, "/reviews_client", endpoint="reviews_client")
api.add_resource(ReviewById, "/reviews/<int:id>", endpoint="reviewbyid")


if __name__ == "__main__":
    app.run(port=5555, debug=True)

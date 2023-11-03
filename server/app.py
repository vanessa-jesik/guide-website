#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, session
from flask_restful import Resource

# Local imports
from config import app, db, api


# Add your model imports
from models import Client, Trip, ClientTrip, Review


# Views go here!
@app.before_request
def check_if_signed_in():
    open_access = ["create_account", "check_session", "sign_in"]
    if (request.endpoint) not in open_access and (not session.get("client_id")):
        return {"error": "401 Unauthorized"}, 401


@app.route("/")
def index():
    return "<h1>Project Server</h1>"


class CreateAccount(Resource):
    def get(self):
        return {}, 200

    # Consider changing bracket notation to .get() to avoid keyError
    def post(self):
        client_json = request.get_json()
        username = client_json["username"]
        existing_username = Client.query.filter(Client.username == username).first()
        if existing_username:
            return {
                "error": "Username already exists - please choose unique username"
            }, 409
        client = Client()
        try:
            for key in client_json:
                if hasattr(client, key):
                    setattr(client, key, client_json[key])
            client.password = client_json["password"]
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
        return {"error": "Username or Password incorrect"}, 401


class SignOut(Resource):
    def delete(self):
        session["client_id"] = None
        return {}, 200


# A view for testing/viewing data format
class ClientById(Resource):
    def get(self, id):
        client = db.session.get(Client, id)
        return client.to_dict(), 200


api.add_resource(CreateAccount, "/create_account", endpoint="create_account")
api.add_resource(CheckSession, "/check_session", endpoint="check_session")
api.add_resource(SignIn, "/sign_in", endpoint="sign_in")
api.add_resource(SignOut, "/sign_out", endpoint="sign_out")
api.add_resource(ClientById, "/clientbyid/<int:id>")


if __name__ == "__main__":
    app.run(port=5555, debug=True)

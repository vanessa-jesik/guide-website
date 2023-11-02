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


@app.route("/")
def index():
    return "<h1>Project Server</h1>"


class CreateAccount(Resource):
    def post(self):
        client_json = request.get_json()
        username = client_json["username"]
        existing_username = Client.query.filter(Client.username == username).first()
        if existing_username:
            return {
                "message": "Username already exists - please choose unique username"
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
        except ValueError as e:
            return {"error": e.__str__()}, 422


class ClientById(Resource):
    def get(self, id):
        client = db.session.get(Client, id)
        return client.to_dict(), 200


api.add_resource(CreateAccount, "/create_account")
api.add_resource(ClientById, "/clientbyid/<int:id>")


if __name__ == "__main__":
    app.run(port=5555, debug=True)

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


api.add_resource(CreateAccount, "/create_account")


if __name__ == "__main__":
    app.run(port=5555, debug=True)

#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from datetime import date

# Local imports
from app import app
from models import db, Client, Trip, ClientTrip


def create_clients():
    clients = []

    client1 = Client(
        first_name="Wade",
        last_name="Blankenship",
        dob=date(1985, 10, 30),
        sex="male",
        username="wadeblankenship",
    )
    client1.password_hash = "wadeblankenshippassword"
    clients.append(client1)

    client2 = Client(
        first_name="Cleo",
        last_name="Mahoney",
        dob=date(1992, 1, 29),
        sex="female",
        username="cleomahoney",
    )
    client2.password_hash = "cleomahoneypassword"
    clients.append(client2)

    client3 = Client(
        first_name="Todd",
        last_name="Roberts",
        dob=date(1973, 3, 12),
        sex="male",
        username="toddroberts",
    )
    client3.password_hash = "toddrobertspassword"
    clients.append(client3)

    client4 = Client(
        first_name="Delores",
        last_name="Velez",
        dob=date(1968, 11, 4),
        sex="female",
        username="deloresvelez",
    )
    client4.password_hash = "deloresvelezpassword"
    clients.append(client4)

    client5 = Client(
        first_name="Newton",
        last_name="Beasley",
        dob=date(2001, 7, 26),
        sex="male",
        username="newtonbeasley",
    )
    client5.password_hash = "newtonbeasleypassword"
    clients.append(client5)

    client6 = Client(
        first_name="Erica",
        last_name="Myers",
        dob=date(1984, 8, 17),
        sex="female",
        username="ericamyers",
    )
    client6.password_hash = "ericamyerspassword"
    clients.append(client6)

    return clients


if __name__ == "__main__":
    with app.app_context():
        print("Clearing db...")
        Client.query.delete()
        Trip.query.delete()
        ClientTrip.query.delete()

        print("Seeding clients...")
        clients = create_clients()
        db.session.add_all(clients)
        db.session.commit()

        print("Done seeding!")

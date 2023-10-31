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


def create_trips():
    trips = []

    trip1 = Trip(name="Fun at Performance Park", length=0.5)
    trips.append(trip1)

    trip2 = Trip(name="Craggin' at Mary's Lake", length=0.5)
    trips.append(trip2)

    trip3 = Trip(name="Thumb and Needle", length=1.0)
    trips.append(trip3)

    trip4 = Trip(name="Lumpy Ridge Classic", length=1.0)
    trips.append(trip4)

    trip5 = Trip(name="North Face of Longs Peak", length=1.0)
    trips.append(trip5)

    trip6 = Trip(name="Spearhead", length=1.0)
    trips.append(trip6)

    trip7 = Trip(name="Spearhead with Bivy in Glacier Gorge", length=2.0)
    trips.append(trip7)

    trip8 = Trip(name="Diamond - East Face of Longs Peak", length=1.0)
    trips.append(trip8)

    trip9 = Trip(name="Diamond with Bivy in Chasm Cirque", length=2.0)
    trips.append(trip9)

    return trips


def create_client_trips():
    client_trips = []

    client_trip1 = ClientTrip(start_date=date(2023, 7, 14), client_id=3, trip_id=2)
    client_trips.append(client_trip1)

    client_trip2 = ClientTrip(start_date=date(2023, 7, 14), client_id=4, trip_id=2)
    client_trips.append(client_trip2)

    client_trip3 = ClientTrip(start_date=date(2023, 7, 22), client_id=5, trip_id=4)
    client_trips.append(client_trip3)

    client_trip4 = ClientTrip(start_date=date(2023, 7, 27), client_id=2, trip_id=7)
    client_trips.append(client_trip4)

    client_trip5 = ClientTrip(start_date=date(2023, 8, 3), client_id=1, trip_id=5)
    client_trips.append(client_trip5)

    client_trip6 = ClientTrip(start_date=date(2023, 8, 3), client_id=2, trip_id=5)
    client_trips.append(client_trip6)

    client_trip6 = ClientTrip(start_date=date(2023, 8, 19), client_id=6, trip_id=4)
    client_trips.append(client_trip6)

    client_trip6 = ClientTrip(start_date=date(2023, 8, 31), client_id=4, trip_id=9)
    client_trips.append(client_trip6)

    client_trip6 = ClientTrip(start_date=date(2023, 9, 6), client_id=5, trip_id=8)
    client_trips.append(client_trip6)

    return client_trips


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

        print("Seeding trips...")
        trips = create_trips()
        db.session.add_all(trips)
        db.session.commit()

        print("Seeding client_trips...")
        client_trips = create_client_trips()
        db.session.add_all(client_trips)
        db.session.commit()

        print("Done seeding!")

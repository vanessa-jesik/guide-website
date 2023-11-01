#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from datetime import date

# Local imports
from app import app
from models import db, Client, Trip, ClientTrip, Review


def create_clients():
    clients = []

    client1 = Client(
        given_name="Wade",
        family_name="Blankenship",
        full_name="Wade Blankenship",
        dob=date(1985, 10, 30),
        username="wadeblankenship",
    )
    client1.password = "wadeblankenshippassword"
    clients.append(client1)

    client2 = Client(
        given_name="Cleo",
        family_name="Mahoney",
        full_name="Cleo Mahoney",
        dob=date(1992, 1, 29),
        username="cleomahoney",
    )
    client2.password = "cleomahoneypassword"
    clients.append(client2)

    client3 = Client(
        given_name="Todd",
        family_name="Roberts",
        full_name="Todd Roberts",
        dob=date(1973, 3, 12),
        username="toddroberts",
    )
    client3.password = "toddrobertspassword"
    clients.append(client3)

    client4 = Client(
        given_name="Delores",
        family_name="Velez",
        full_name="Delores Velez",
        dob=date(1968, 11, 4),
        username="deloresvelez",
    )
    client4.password = "deloresvelezpassword"
    clients.append(client4)

    client5 = Client(
        given_name="Newton",
        family_name="Beasley",
        full_name="Newton Beasley",
        dob=date(2001, 7, 26),
        username="newtonbeasley",
    )
    client5.password = "newtonbeasleypassword"
    clients.append(client5)

    client6 = Client(
        given_name="Xiu",
        family_name="Wang",
        full_name="Wang Xiu",
        dob=date(1984, 8, 17),
        username="wangxiu",
    )
    client6.password = "wangxiupassword"
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

    client_trip2 = ClientTrip(
        start_date=date(2023, 7, 14),
        notes="Knee replacement in 2020 - well healed but must move intentionally",
        client_id=4,
        trip_id=2,
    )
    client_trips.append(client_trip2)

    client_trip3 = ClientTrip(start_date=date(2023, 7, 22), client_id=5, trip_id=4)
    client_trips.append(client_trip3)

    client_trip4 = ClientTrip(start_date=date(2023, 7, 27), client_id=2, trip_id=7)
    client_trips.append(client_trip4)

    client_trip5 = ClientTrip(
        start_date=date(2023, 8, 3),
        notes="Wade has asthma - will carry inhaler",
        client_id=1,
        trip_id=5,
    )
    client_trips.append(client_trip5)

    client_trip6 = ClientTrip(start_date=date(2023, 8, 3), client_id=2, trip_id=5)
    client_trips.append(client_trip6)

    client_trip6 = ClientTrip(start_date=date(2023, 8, 19), client_id=6, trip_id=4)
    client_trips.append(client_trip6)

    client_trip6 = ClientTrip(
        start_date=date(2023, 8, 31),
        notes="Knee replacement in 2020 - this is a longer walk than what we did in July together, but hopefully my knee will behave",
        client_id=4,
        trip_id=9,
    )
    client_trips.append(client_trip6)

    client_trip6 = ClientTrip(start_date=date(2023, 9, 6), client_id=5, trip_id=8)
    client_trips.append(client_trip6)

    return client_trips


def create_reviews():
    reviews = []

    review1 = Review(
        date=date(2023, 7, 24),
        comment="Wow! Lumpy did not disappoint!  It was everything I imagined and more!  Flaring cracks and stunning views!",
        client_id=5,
    )
    reviews.append(review1)

    review2 = Review(
        date=date(2023, 7, 30),
        comment="I am rendered speechless by the serenity of climbing in Glacier Gorge. The stars overnight were unmatchable. After an incredible climb, we dipped into an alpine lake. The trip was rounded out by a bull elk lounging in the marsh above Mills Lake.",
        client_id=2,
    )
    reviews.append(review2)

    review3 = Review(
        date=date(2023, 8, 4),
        comment="I had such an incredible time with my guide in Glacier Gorge, I came back for another trip. This time I brought my partner and we climbed the North Face of Longs Peak. Without the overnight, my legs turned to jello after a long day, but it was completely worth it.",
        client_id=2,
    )
    reviews.append(review3)

    review4 = Review(
        date=date(2023, 8, 4),
        comment="My partner and I ventured up the North Face of Longs Peak with a skilled mountain guide. We felt safe and secure the entire way. What an accomplishment to summit the only 14er in Rocky Mountain National Park!",
        client_id=1,
    )
    reviews.append(review4)

    review5 = Review(
        date=date(2023, 9, 3),
        comment="Climbing the Diamond on Longs Peak has been a lifetime dream of mine. At my age, I wasn't sure it would happen. After a warm-up with the same guide earlier this summer, I knew we could give this a go. My guide was incredibly patient and adept in the terrain. I felt safe, accomplished, and exhausted at the end of two long days.  Thank you!!!",
        client_id=4,
    )
    reviews.append(review5)

    return reviews


if __name__ == "__main__":
    with app.app_context():
        print("Clearing db...")
        Client.query.delete()
        Trip.query.delete()
        ClientTrip.query.delete()
        Review.query.delete()

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

        print("Seeding reviews...")
        reviews = create_reviews()
        db.session.add_all(reviews)
        db.session.commit()

        print("Done seeding!")

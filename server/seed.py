#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from datetime import date

# Local imports
from app import app
from os import environ
from models import db, Admin, Client, Trip, ClientTrip, Review


def create_admins():
    admins = []

    admin1 = Admin(
        full_name="Vanessa Jesik",
        username=environ.get("admin1username"),
    )
    admin1.password = environ.get("admin1password")
    admins.append(admin1)

    admin2 = Admin(
        full_name="Buster Jesik",
        username=environ.get("admin2username"),
    )
    admin2.password = environ.get("admin2password")
    admins.append(admin2)

    return admins


def create_clients():
    clients = []

    client1 = Client(
        given_name="Wade",
        family_name="Blankenship",
        full_name="Wade Blankenship",
        dob=date(1985, 10, 30),
        waiver=True,
        username="wadeblankenship",
    )
    client1.password = "wadeblankenshippassword"
    clients.append(client1)

    client2 = Client(
        given_name="Cleo",
        family_name="Mahoney",
        full_name="Cleo Mahoney",
        dob=date(1992, 1, 29),
        waiver=True,
        username="cleomahoney",
    )
    client2.password = "cleomahoneypassword"
    clients.append(client2)

    client3 = Client(
        given_name="Todd",
        family_name="Roberts",
        full_name="Todd Roberts",
        dob=date(1973, 3, 12),
        waiver=True,
        username="toddroberts",
    )
    client3.password = "toddrobertspassword"
    clients.append(client3)

    client4 = Client(
        given_name="Delores",
        family_name="Velez",
        full_name="Delores Velez",
        dob=date(1968, 11, 4),
        waiver=True,
        username="deloresvelez",
    )
    client4.password = "deloresvelezpassword"
    clients.append(client4)

    client5 = Client(
        given_name="Newton",
        family_name="Beasley",
        full_name="Newton Beasley",
        dob=date(2001, 7, 26),
        waiver=True,
        username="newtonbeasley",
    )
    client5.password = "newtonbeasleypassword"
    clients.append(client5)

    client6 = Client(
        given_name="Xiu",
        family_name="Wang",
        full_name="Wang Xiu",
        dob=date(1984, 8, 17),
        waiver=True,
        username="wangxiu",
    )
    client6.password = "wangxiupassword"
    clients.append(client6)

    client7 = Client(
        given_name="Madhu",
        family_name="Ermelinde",
        full_name="Madhu Ermelinde",
        dob=date(1978, 12, 2),
        username="madhuermelinde",
    )
    client7.password = "madhuermelindepassword"
    clients.append(client7)

    client8 = Client(
        given_name="Amanda",
        family_name="Vincenza",
        full_name="Amanda Vincenza",
        dob=date(1989, 3, 30),
        username="amandavincenza",
    )
    client8.password = "amandavincenzapassword"
    clients.append(client8)

    return clients


def create_trips():
    trips = []

    trip1 = Trip(
        name="Beginner Rock Climbing",
        description="This outing is perfect for individuals looking to get their start in climbing or for the whole family to get outside together! Half day and full days available.",
    )
    trips.append(trip1)

    trip2 = Trip(
        name="Climb on Iconic Lumpy Ridge",
        description="Lumpy Ridge has a rich history in the Estes Park climbing community and is full of fun classics! Be a part of that story and enjoy a day looking down on town!",
    )
    trips.append(trip2)

    trip3 = Trip(
        name="Petit Grepon",
        description="Climb a spire rising above Sky Pond in Rocky Mountain National Park.  The summit, a pedestal in the sky, will surely be unforgettable.",
    )
    trips.append(trip3)

    trip4 = Trip(
        name="Cables Route - North Face of Longs Peak",
        description="Summit Longs Peak via the Cables Route - a moderate climb overlooking the Boulder Field.",
    )
    trips.append(trip4)

    trip5 = Trip(
        name="The Diamond - East Face of Longs Peak",
        description="The penultimate climbing object in the Estes Park area. Splitter cracks at 13,000 feet looking out over the Chasm Cirque.",
    )
    trips.append(trip5)

    trip6 = Trip(
        name="Back Country Skiing",
        description="Explore the back country with a certified guide! Skip the lift lines and enjoy fields of untracked powder!",
    )
    trips.append(trip6)

    trip7 = Trip(
        name="Winter Ice Climbing",
        description="Experience the reverie of climbing a frozen waterfall. All abilities welcome!",
    )
    trips.append(trip7)

    trip8 = Trip(
        name="Spring Mountaineering",
        description="April, May, and June are the best months of the year to experience snow climbing in the Colorado Rockies! Outings for beginners and classic mountaineering objects for experienced climbers.",
    )
    trips.append(trip8)

    return trips


def create_client_trips():
    client_trips = []

    client_trip1 = ClientTrip(
        start_date=date(2023, 7, 14), paid=True, client_id=3, trip_id=2
    )
    client_trips.append(client_trip1)

    client_trip2 = ClientTrip(
        start_date=date(2023, 7, 14),
        notes="Knee replacement in 2020 - well healed but must move intentionally",
        paid=True,
        client_id=4,
        trip_id=2,
    )
    client_trips.append(client_trip2)

    client_trip3 = ClientTrip(
        start_date=date(2023, 7, 22), paid=True, client_id=5, trip_id=4
    )
    client_trips.append(client_trip3)

    client_trip4 = ClientTrip(
        start_date=date(2023, 7, 27), paid=True, client_id=2, trip_id=3
    )
    client_trips.append(client_trip4)

    client_trip5 = ClientTrip(
        start_date=date(2023, 8, 3),
        notes="Wade has asthma - will carry inhaler",
        paid=True,
        client_id=1,
        trip_id=4,
    )
    client_trips.append(client_trip5)

    client_trip6 = ClientTrip(
        start_date=date(2023, 8, 3), paid=True, client_id=2, trip_id=4
    )
    client_trips.append(client_trip6)

    client_trip7 = ClientTrip(
        start_date=date(2023, 8, 19), paid=True, client_id=6, trip_id=5
    )
    client_trips.append(client_trip7)

    client_trip8 = ClientTrip(
        start_date=date(2023, 8, 31),
        notes="Knee replacement in 2020 - this is a longer walk than what we did in July together, but hopefully my knee will behave",
        paid=True,
        client_id=4,
        trip_id=4,
    )
    client_trips.append(client_trip8)

    client_trip9 = ClientTrip(
        start_date=date(2023, 10, 5), paid=True, client_id=1, trip_id=2
    )
    client_trips.append(client_trip9)

    client_trip10 = ClientTrip(
        start_date=date(2023, 11, 11), paid=True, client_id=4, trip_id=2
    )
    client_trips.append(client_trip10)

    client_trip11 = ClientTrip(
        start_date=date(2023, 12, 31),
        notes="Really looking forward to ringing in the New Year by doing something brand new!",
        client_id=8,
        trip_id=7,
    )
    client_trips.append(client_trip11)

    client_trip12 = ClientTrip(start_date=date(2023, 12, 28), client_id=7, trip_id=6)
    client_trips.append(client_trip12)

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
        Admin.query.delete()
        Client.query.delete()
        Trip.query.delete()
        ClientTrip.query.delete()
        Review.query.delete()

        print("Seeding admins...")
        admins = create_admins()
        db.session.add_all(admins)
        db.session.commit()

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

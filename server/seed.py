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
        description="Have you every wanted to try real rock climbing? Once considered an obscure and “extreme” activity rock climbing has become more main stream and accessible then ever! All ability, ages and fitness levels can be accommodated for an introductory day of fun and learning!",
    )
    trips.append(trip1)

    trip2 = Trip(
        name="Climb on Iconic Lumpy Ridge",
        description="Lumpy ridge is an iconic climbing area clearly visible from Estes Park. The granite domes of Lumpy have been a destination for many generations of traditional climbers looking to improve their technique on the classic slab and crack routes. Lumpy has something for everyone from beginner friendly top rope areas to classic multi pitch routes and sustained crack climbs.",
    )
    trips.append(trip2)

    trip3 = Trip(
        name="Petit Grepon",
        description="The Petite Grepon is listed in Allen Steck and Steve Roper’s book “Fifty Classic Climbs of North America for good reason. This 800 foot high rock spire towers above Sky Pond and culminates with a dramatic summit in the heart of Rocky Mountain National Park. This is an intermediate level multi pitch rock climb for those looking for the classic alpine rock climbing experience!",
    )
    trips.append(trip3)

    trip4 = Trip(
        name="Cables Route - North Face of Longs Peak",
        description="Longs Peak sits above Estes at a height of 14,259 (4347m) and is the northern most fourteener in the entire Rocky Mountain chain. It is widely considered one of the most challenging and technical peaks to summit in Colorado. With its vertical faces, permanent snow fields and ever changing conditions Longs Peak has attracted mountaineers and rock climbers from around the world.\n\nClimbing Longs peak is easiest during the late spring and summer seasons. Autumn and winter ascents are possible but less likely due to short days and cold, windy weather. May / June offer the best snow conditions for mountaineering while July - September are the driest months for rock scrambling and technical rock climbing. Expect and early start and a 10-14 hour long day. Some prefer to climb Longs peak as a 2 or even 3 day outing.",
    )
    trips.append(trip4)

    trip5 = Trip(
        name="The Diamond - East Face of Longs Peak",
        description="The Diamond of Longs Peak is one of the most prominent and dramatic alpine walls in the country. For many an ascent of the Diamond may be the crowning achievement of a lifetime of rock climbing. This is for serious rock climbers only as every route on the Diamond is 5.10 or harder. The style of climbing consists of high quality pitches of vertical crack and face climbing at 13,000 feet.",
    )
    trips.append(trip5)

    trip6 = Trip(
        name="Back Country Skiing",
        description="Ski areas are a great place to start… but there is no substitute for the experience of “earning your turns” and riding the wild snow of the backcountry. Skiing / snowboarding with a guide maximizes the potential for finding quality snow conditions and minimizes the risks of the backcountry. Contact us for educational days, guided tours, overnight hut trips and remote expeditions!",
    )
    trips.append(trip6)

    trip7 = Trip(
        name="Winter Ice Climbing",
        description="Ice climbing is an essential skill for mountaineers who want to get into more technical alpine terrain. It is also a lot of fun all on its own! Ice climbing season in Colorado usually begins in mid to late November and can last until April. December - February is the most reliable time of year for most of the classic ice climbs. All ability / experience levels are welcome! Come learn the subtle and graceful art of ice climbing or just have a fun experience with one of the most experienced ice climbing guides in the country!",
    )
    trips.append(trip7)

    trip8 = Trip(
        name="Spring Mountaineering",
        description="For those looking for the true mountaineering adventure! Mountaineering season usually starts in late March and goes through June in the Colorado Rockies. Strap on your crampons and grab your ice axe for the classic gullies and mixed routes of Rocky Mountain National Park and beyond!",
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

    client_trip13 = ClientTrip(
        start_date=date(2023, 11, 9), paid=True, client_id=1, trip_id=4
    )
    client_trips.append(client_trip13)

    client_trip14 = ClientTrip(start_date=date(2023, 11, 28), client_id=1, trip_id=2)
    client_trips.append(client_trip14)

    client_trip15 = ClientTrip(start_date=date(2023, 12, 5), client_id=1, trip_id=7)
    client_trips.append(client_trip15)

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

    review6 = Review(
        date=date(2023, 7, 15),
        comment="My day out climbing with a guide in the mountains was nothing short of spectacular. From the moment we strapped on our gear to reaching the summit, the guide's expertise and passion for the mountains were evident. The breathtaking views, coupled with the thrill of conquering challenging peaks, made for an unforgettable experience. I felt safe yet exhilarated, and the guide's knowledge of the terrain added a fascinating educational aspect to the journey. Highly recommend for both novice climbers and seasoned adventurers seeking a memorable day in nature's grandeur.",
        client_id=2,
    )
    reviews.append(review6)

    review7 = Review(
        date=date(2023, 8, 20),
        comment="Climbing with a guide elevated my mountain experience to new heights. The guide's knowledge of the terrain, combined with a genuine love for the sport, created an environment of both excitement and security. Each step was a discovery, and the guide's insights into the local flora and fauna enriched the journey. The well-paced climb allowed for moments of reflection amidst the rugged beauty of the mountains. This outing is a must for those seeking not just a physical challenge, but an immersive and educational mountain escapade.",
        client_id=6,
    )
    reviews.append(review7)

    review8 = Review(
        date=date(2023, 9, 13),
        comment="An amazing day out climbing with a guide turned into a triumph as we reached the summit. The guide's encouragement and support were pivotal in pushing through challenging sections, making the accomplishment even more rewarding. The day was filled with laughter, camaraderie, and a shared sense of achievement. The guide's expertise not only ensured our safety but also enhanced the overall enjoyment of the climb. If you're looking for a day filled with both adventure and a sense of accomplishment, this guided mountain climb is the perfect choice.",
        client_id=3,
    )
    reviews.append(review8)

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

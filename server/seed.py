from random import choice as rc, randint
from faker import Faker
from app import app
from models import db, Attack, Pirate, Ship
import random

fake = Faker()

def make_attacks():

    Attack.query.delete()

    attacks = []

    for i in range(50):
        attack = Attack(
            name = fake.word(),
            location = fake.city(),
            date = fake.date_between(start_date = '-1yr', end_date='today')
        )
        attacks.append(attack)
    db.session.add_all(attacks)
    db.session.commit()

def make_ships():

    Ship.query.delete()

    ships = []

    ship_size = ['Handy', 'Aframax', 'Panamax', 'Suezmax', 'Capesize', 'Supertanker', 'Chinamax', 'Seawaymax', 'PaddleBoat']

    for i in range(25):
        ship = Ship(
            name = fake.name(),
            size = random.choice(ship_size)
        )
        ships.append(ship)
    db.session.add_all(ships)
    db.session.commit()

def make_pirates():

    Pirate.query.delete()
    attacks = Attack.query.with_entities(Attack.id).all()
    ships = Ship.query.with_entities(Ship.id).all()

    pirates = []

    for i in range(100):
        pirate = Pirate(
            name = fake.name(),
            age = randint(18,101),
            attack_id = rc(attacks)[0],
            ship_id = rc(ships)[0]
        )
        pirates.append(pirate)

    db.session.add_all(pirates)
    db.session.commit()


if __name__ == '__main__':
    with app.app_context():
        make_attacks()
        make_ships()
        make_pirates()

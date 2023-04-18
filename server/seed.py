from random import choice as rc, randint
from faker import Faker
from app import app
from models import db, Attack, Pirate, Ship
import random

fake = Faker()

def make_attacks():

    Attack.query.delete()
    pirates = Pirate.query.with_entities(Pirate.id).all()
    ships = Ship.query.with_entities(Ship.id).all()
    attacks = []

    for i in range(50):
        attack = Attack(
            name = f'The Battle of {fake.word()}',
            location = fake.city(),
            date = fake.date_between(start_date = '-1yr', end_date='today'),
            pirate_id = rc(pirates)[0],
            ship_id = rc(ships)[0]
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
    pirates = []
    pirate_ranks = ['Captain', 'First Mate', 'Quartermaster', 'Sailing Master', 'Gunner', 'Powder Monkey', 'Surgeon', 'Boatswain', 'Cook']

    for i in range(100):
        pirate = Pirate(
            name = fake.name(),
            age = randint(18,101),
            rank = random.choice(pirate_ranks)  
        )
        pirates.append(pirate)

    db.session.add_all(pirates)
    db.session.commit()


if __name__ == '__main__':
    with app.app_context():
        make_attacks()
        make_ships()
        make_pirates()

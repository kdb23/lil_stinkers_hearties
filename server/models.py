from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})
db = SQLAlchemy(metadata=metadata)

class Attack(db.Model, SerializerMixin):
    __tablename__ = "attacks"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    location = db.Column(db.String)
    date = db.Column(db.String)
    created_at = db.Column(db.DateTime,server_default=db.func.now())
    updated_at = db.Column(db.DateTime,onupdate=db.func.now())
    pirates = db.relationship("Pirate", backref="attack")

    ships = association_proxy("pirates", "ship")

class Ship(db.Model, SerializerMixin):
    __tablename__ = "ships"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True)
    size = db.Column(db.String)
    created_at = db.Column(db.DateTime,server_default=db.func.now())
    updated_at = db.Column(db.DateTime,onupdate=db.func.now())
    pirates = db.relationship("Pirate", backref="ship")

    attacks = association_proxy("pirates", "attack")

class Pirate(db.Model, SerializerMixin):
    __tablename__= "pirates"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    age = db.Column(db.Integer)
    attack_id = db.Column(db.Integer, db.ForeignKey ("attacks.id"))
    ship_id = db.Column(db.Integer, db.ForeignKey ("ships.id")) 

    @validates('age')
    def validate_age(self, key, age_input):
        if age_input < 18:
            raise ValueError("Too young to join the Lil Stinkers Crew!")
        else:
            return age_input









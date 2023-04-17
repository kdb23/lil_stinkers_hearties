from flask import Flask, make_response, request
from flask_migrate import Migrate
from flask_restful import Api, Resource
from models import db, Ship, Pirate, Attack 

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)
db.init_app(app)
api = Api(app) 

class Ships(Resource):
    def get(self):
        ships = [s.to_dict(only=('id', 'name', 'size')) for s in Ship.query.all()]
        return make_response(
             ships, 
             200
        )
    def post(self):
        data = request.get_json()
        try:
            new_ship = Ship (
                name= data['name'],
                size= data['size']
            )  
        except: 
            return make_response({'error': '400 validation error'} ,400)
        db.session.add(new_ship)
        db.session.commit()
        return make_response( new_ship.to_dict(), 201) 
    

api.add_resource(Ships, '/ships')


class ShipsById(Resource):
    def get(self, id):
        ship = Ship.query.filter_by(id = id).first()
        if not ship: 
            return make_response({'error': '404 ship not found'} ,404)
        else:
            return make_response(ship.to_dict(), 200) 

    def patch(self, id):
        data = request.get_json()
        ship = Ship.query.filter_by(id = id).first()
        for attr in data: 
            setattr(ship, attr, data[attr]) 
        db.session.add(ship)
        db.session.commit()
        return make_response(ship.to_dict(), 202)

    def delete(self, id):
        ship = Ship.query.filter_by(id = id).first()
        if not ship: 
            return make_response({'error': '404 ship not found'} ,404)
        else:
            db.session.delete(ship)
            db.session.commit()
        return make_response({}, 204)


api.add_resource(ShipsById, '/ships/<int:id>') 

class Attacks(Resource):
    def get(self):
        attacks = [a.to_dict() for a in Attack.query.all()]
        return make_response(
            attacks,
            200
        )
    def post(self):
        data = request.get_json()
        try:
            new_attack = Attack(
                name= data['name'],
                location= data['location'],
                date= data['date']
            )
        except: 
            return make_response({'error': '400 validation error'} ,400)
        db.session.add(new_attack)
        db.session.commit()
        return make_response( new_attack.to_dict(), 201) 
    
api.add_resource(Attacks, '/attacks') 

class Pirates(Resource):
    def get(self):
        pirates = [p.to_dict(only=('id', 'name', 'age', 'attack.name', 'ship.name' )) for p in Pirate.query.all()]
        return make_response(
            pirates,
            200
        )
    def post(self):
        data = request.get_json()
        try:
            new_pirate = Pirate(
                name= data['name'],
                age= data['age'],
                attack_id= data['attack_id'],
                ship_id= data['ship_id']
            )
        except: 
            return make_response({'error': '400 validation error'} ,400)
        db.session.add(new_pirate)
        db.session.commit()
        return make_response( new_pirate.to_dict(), 201) 
    
api.add_resource(Pirates, '/pirates')     


    
        
    



if __name__ == '__main__':
      app.run(port=5555, debug=True)

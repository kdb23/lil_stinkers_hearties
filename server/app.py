from flask import Flask, make_response, request
from flask_migrate import Migrate
from flask_restful import Api, Resource
from flask_cors import CORS
from models import db, Ship, Pirate, Attack 


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False


CORS(app)
migrate = Migrate(app, db)
db.init_app(app)
api = Api(app) 

class Ships(Resource):
    def get(self):
        ships = [s.to_dict(only=('id', 'name', 'size', 'pirates.name', 'pirates.rank', 'attacks.name')) for s in Ship.query.all()]
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


class PiratesById(Resource):
    def get(self, id):
        pirate = Pirate.query.filter_by(id = id).first()
        if not pirate: 
            return make_response({'error': '404 pirate not found'} ,404)
        else:
            return make_response(pirate.to_dict(), 200) 

    def patch(self, id):
        data = request.get_json()
        pirate = Pirate.query.filter_by(id = id).first()
        try:
            for attr in data: 
                setattr(pirate, attr, data[attr])
        except ValueError:
            return make_response(
                {'error': 'Too young to join the Lil Stinkers Crew!'},
                400
            )
        db.session.add(pirate)
        db.session.commit()
        return make_response(pirate.to_dict(), 202)

    def delete(self, id):
        pirate = Pirate.query.filter_by(id = id).first()
        if not pirate: 
            return make_response({'error': '404 pirate not found'} ,404)
        else:
            db.session.delete(pirate)
            db.session.commit()
        return make_response({}, 204)


api.add_resource(PiratesById, '/pirates/<int:id>') 

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
                date= data['date'],
                pirate_id= 1,
                ship_id= 1,
             )
        except: 
            return make_response({'error': '400 validation error'} ,400)
        db.session.add(new_attack)
        db.session.commit()
        return make_response( new_attack.to_dict(), 201) 
    
api.add_resource(Attacks, '/attacks') 

class Pirates(Resource):
    def get(self):
        pirates = [p.to_dict() for p in Pirate.query.all()]
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
                rank= data['rank']
            )
        except: 
            return make_response({'error': '400 validation error'} ,400)
        db.session.add(new_pirate)
        db.session.commit()
        return make_response( new_pirate.to_dict(), 201) 
    
api.add_resource(Pirates, '/pirates')     


    
        
    



if __name__ == '__main__':
      app.run(port=5555, debug=True)

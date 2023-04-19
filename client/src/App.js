import './App.css';
import {useEffect, useState} from 'react'
import NavBar from './NavBar'
import {Route, Switch} from 'react-router-dom'
import ShipContainer from './ShipContainer'
import AttackContainer from './AttackContainer'
import PiratesContainer from './PiratesContainer'
import Form from './Form'


function App() {

    const [ships, setShips] = useState([])
    const [attacks, setAttacks] = useState([])
    const [pirates, setPirates] = useState([])


    useEffect(() => {
      fetch('/ships')
        .then((r) => r.json())
        .then(setShips)
    }, [])

    useEffect(() => {
      fetch('/attacks')
        .then((r) => r.json())
        .then(setAttacks)
    }, [])

    useEffect(() => {
      fetch('/pirates')
        .then((r) => r.json())
        .then(setPirates)
    }, [])

    const addAttackState = (newAttackObj) => {
      setAttacks([newAttackObj, ...attacks])
    }

    const addShipState = (newShipObj) => {
      setShips([newShipObj, ...ships])
    }

    const addPirateState = (newPirateObj) => {
      setPirates([newPirateObj, ...pirates])
    }


  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path = '/ships'>
          <ShipContainer ships={ships} />
        </Route>
        <Route exact path = '/attacks'>
          <AttackContainer attacks={attacks} />
        </Route>
        <Route exact path = '/pirates'>
          <PiratesContainer pirates={pirates} />
        </Route>
        <Route exact path = '/forms'>
          <Form addAttack = {addAttackState} addShip= {addShipState} addPirate={addPirateState} /> 
        </Route>
      </Switch>
    </div>
  );
}

export default App;

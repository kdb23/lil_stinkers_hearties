import './App.css';
import {useEffect, useState} from 'react'
import Home from './Home'
import {Route, Switch} from 'react-router-dom'
import ShipContainer from './ShipContainer'
import AttackContainer from './AttackContainer'
import PiratesContainer from './PiratesContainer'


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



  return (
    <div>
      <Switch>
        <Route exact path = '/'>
          <Home />
        </Route>
        <Route exact path = '/ships'>
          <ShipContainer ships={ships} />
        </Route>
        {/* <Route exact path = '/ships/:id'>
            <ShipDetails />
        </Route> */}
        <Route exact path = '/attacks'>
          <AttackContainer attacks={attacks} />
        </Route>
        <Route exact path = '/pirates'>
          <PiratesContainer pirates={pirates} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

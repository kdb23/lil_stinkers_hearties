import './App.css';
import {useEffect, useState} from 'react'
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
      <ShipContainer ships={ships} />
      <AttackContainer attacks={attacks} />
      <PiratesContainer pirates={pirates} />
    </div>
  );
}

export default App;

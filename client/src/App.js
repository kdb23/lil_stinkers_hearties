import './App.css';
import {useEffect, useState} from 'react'
import ShipContainer from './ShipContainer'

function App() {

    const [ships, setShips] = useState([])


    useEffect(() => {
      fetch('/ships')
        .then((r) => r.json())
        .then(setShips)
    }, [])



  return (
    <div>
      <ShipContainer ships={ships} />
    </div>
  );
}

export default App;

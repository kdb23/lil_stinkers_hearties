import React from 'react';
import Ships from './Ships';


function ShipContainer({ships}) {
    console.log(ships)
    const boats = ships.map((boatObj) => { 
        const pirates = boatObj.pirates.map((pirate) => {
            return (
                <div key={pirate?.id}>
                    <p>Name: {pirate?.name}</p>
                    <p>Rank: {pirate?.rank}</p>
                </div>
            );
          });
        const battles = boatObj.attacks.map((attack) => {
            return (
                <div key={attack.id}>
                    <p>Name: {attack.name}</p>
                </div>
            )
        })
        return <Ships
            key = {boatObj.id}
            name = {boatObj.name}
            size = {boatObj.size}
            pirates = {pirates}
            battles = {battles}
        />


    })

    return (
        <div>
            <div className='grid grid-cols-4 gap-3'>
            {boats}
            </div>
        </div>
    )
}

export default ShipContainer
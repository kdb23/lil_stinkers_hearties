import React from 'react';
import Ships from './Ships';

function ShipContainer({ships}) {
    const boats = ships.map((boatObj) => {
        return <Ships
            key = {boatObj.id}
            name = {boatObj.name}
            size = {boatObj.size}
        />
    })

    return (
        <div>
            {boats}
        </div>
    )
}

export default ShipContainer
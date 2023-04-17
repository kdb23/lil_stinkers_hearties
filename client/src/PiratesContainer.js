import React from 'react';
import Pirates from './Pirates';

function PiratesContainer({pirates}) {
    const felon = pirates.map((pirateObj) => {
        return <Pirates
            key = {pirateObj.id}
            name = {pirateObj.name}
            age = {pirateObj.age}
        />
    })

    return (
        <div>
            {felon}
        </div>
    )
}

export default PiratesContainer
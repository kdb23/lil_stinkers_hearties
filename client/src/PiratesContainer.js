import React from 'react';
import Pirates from './Pirates';

function PiratesContainer({pirates, handlePirateDelete, handlePiratePatch}) {
    const felon = pirates.map((pirateObj) => {
        return <Pirates
            key = {pirateObj.id}
            id = {pirateObj.id}
            name = {pirateObj.name}
            age = {pirateObj.age}
            rank = {pirateObj.rank}
            handlePirateDelete = {handlePirateDelete}
            handlePiratePatch = {handlePiratePatch}

        />
    })

    return (
        <div>
            {felon}
        </div>
    )
}

export default PiratesContainer
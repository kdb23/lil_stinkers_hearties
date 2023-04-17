import React from 'react';
import Attacks from './Attacks';

function AttackContainer({attacks}) {
    const fight = attacks.map((fightObj) => {
        return <Attacks
            key = {fightObj.id}
            name = {fightObj.name}
            location = {fightObj.location}
            date = {fightObj.date}
        />
    })

    return (
        <div>
            {fight}
        </div>
    )
}

export default AttackContainer
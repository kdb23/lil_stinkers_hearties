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
            <div className='grid grid-cols-6 gap-4'>
                {fight}
            </div>
        </div>
    )
}

export default AttackContainer
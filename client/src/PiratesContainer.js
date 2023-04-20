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
            <h1 className='font-bold text-xl text-center'>Decide a Pirates Fate - Will They Declare <span className='animate-pulse text-gray-500'>Parley</span> or Will They <span className='animate-pulse text-red-500'> Walk The Plank?</span></h1>
            <div className='bg-blue-200 grid grid-cols-4 gap-4'>
                {felon} 
            </div>
        </div>
    )
}

export default PiratesContainer


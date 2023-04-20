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
            <h1 className='font-bold text-xl text-center'>Decide a Pirates Fate - Will They Declare <span className='text-gray-500'>Parley</span> or Will They <span className='text-red-500'> Walk The Plank?</span></h1>
            <div className='grid grid-cols-4 gap-4'>
                {felon} 
            </div>
        </div>
    )
}

export default PiratesContainer

{/* <div>
<div className='max-w-full rounded overflow-hidden shadow-lg'>
<div class="px-6 py-4">
<div className ="flex flex-wrap justify-center">
<div className=" outline-dotted max-w-sm rounded overflow-hidden shadow-lg shadow-blue-500/50">
    <div className= 'flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52'>
    <p class="text-gray-700 text-base">
    {felon}
    </p>
    </div>
</div>
</div>
</div>
</div>
</div>
) */}
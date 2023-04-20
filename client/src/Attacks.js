import React from 'react';

function Attacks({name,location, date}){

    return(
        <div className='border-solid border-2 border-grey-400 px-5 ph-5 animate-pulse'>
            <h1 className='mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50'>
                {name}
            </h1>

            <p className='mb-4 text-base text-neutral-600 dark:text-neutral-200'>
                Location: {location}
            </p>

            <p className='text-xs text-neutral-500 dark:text-neutral-300'>
                Occured: {date}
            </p>
        </div>
    )
}


export default Attacks
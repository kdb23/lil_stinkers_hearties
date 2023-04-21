import React from 'react';

function Attacks({name,location, date}){

    return(
        <div className='border-solid border-2 border-grey-400 px-5 ph-5 animate-pulse'>
            <h1 className='mb-2 text-xl font-medium text-gray-700 dark:text-gray-900'>
                {name}
            </h1>

            <p className='mb-4 text-base  text-gray-700 dark:text-gray-900'>
                Location: {location}
            </p>

            <p className='text-xs text-gray-700 dark:text-gray-900'>
                Occured: {date}
            </p>
        </div>
    )
}


export default Attacks
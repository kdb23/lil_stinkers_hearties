import React from 'react';

function Ships({name,size,pirates,battles}){

    return(
        <div className='border-solid border-2 border-grey-400 px-5 ph-5'>
            <h1 className='mb-2 text-xl font-medium text-neutral-800 dark:text-gray-900'>
                The {name}
            </h1>

            <p className='text-s text-neutral-500 dark:text-gray-700'>
                Size: {size}
            </p>
            <div className='grid grid-cols-2 gap-2'>
                <div>
                    <h2 className='mb-4 text-xl text-neutral-600 dark:text-gray-900 pt-2'>Lil Stinkers 🦨</h2>
                    {pirates}
                </div>

                <div>
                    <h2 className='mb-4 text-xl text-neutral-600 dark:text-gray-900 pt-2'>Battles 💣</h2>
                    {battles}
                </div>
            </div>
        </div>
    )
}


export default Ships
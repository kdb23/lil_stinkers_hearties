import {useState} from 'react'


function Form({addAttack, addShip, addPirate}) {
    const [attackName, setAttackName] = useState('');
    const [attackLocation, setAttackLocation] = useState('');
    const [attackDate, setAttackDate] = useState('');
    const [shipName, setShipName] = useState('');
    const [shipSize, setShipSize] = useState('');
    const [pirateName, setPirateName] = useState('');
    const [pirateAge, setPirateAge] = useState('');
    const [pirateRank, setPirateRank] = useState('');
    const [showAttack, setShowAttack] = useState(true);
    const [showShip, setShowShip] = useState(true);
    const [showPirate, setShowPirate] = useState(true);

    const handleAttack = () => {
        setShowAttack(!showAttack);
    };
    const handleShip = () => {
        setShowShip(!showShip);
    };
    const handlePirate = () => {
        setShowPirate(!showPirate);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let attackObj = {
            name: attackName,
            location: attackLocation,
            date: attackDate

        };
        fetch('/attacks', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(attackObj),
        })
            .then((response) => response.json())
            .then(addAttack)
        e.target.reset()

    };
    const handleShipSubmit = (e) => {
        e.preventDefault();
        let shipObj = {
            name: shipName,
            size: shipSize 
        };
        fetch('/ships', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(shipObj),
        })
            .then((r) => r.json())
            .then(addShip)
        e.target.reset()
    }

    const handlePirateSubmit = (e) => {
        e.preventDefault();
        let pirateObj = {
            name: pirateName,
            age: pirateAge,
            rank: pirateRank 
        };
        fetch('/pirates', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(pirateObj),
        })
            .then((r) => r.json())
            .then(addPirate)
        e.target.reset()
    }

    return (
        <div className="flex flex-row justify-between ">
            <div className='box-border h-500 w-500 p-4 border-4 grid justify-items-center'>
                <h1 className='mb-2 mt-0 text-5xl font-medium leading-tight text-primary' onClick={handlePirate}>Click here to add a Pirate</h1>
                {showPirate ? (
                    <img className='object-scale-down h-48 w-96' src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/painty-the-pirate-william-gerard.jpg" alt="Pirate"/>
                ) : (
                    <form onSubmit= {handlePirateSubmit}className="form">
                        <div className='mb-6'>
                            <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Pirate Name</label>
                            <input 
                                type="text" 
                                id="large-input" 
                                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                name="name"
                                onChange={(e) => setPirateName(e.target.value)} 
                            />    
                        </div>
                        <div className='mb-6'>
                            <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Pirate Age</label>
                            <input 
                                type="text" 
                                id="large-input" 
                                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                name="age"
                                onChange={(e) => setPirateAge(parseInt(e.target.value))}
                                placeholder='Must be older than 18' 
                            />
                        </div>
                        <div className='mb-6'>
                            <label for="pirate-rank" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Pirate Rank</label>
                            <select onChange={(e) => setPirateRank(e.target.value)} id="pirate-rank" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option>--Select--</option>
                                <option>Captain</option>
                                <option>First Mate</option>
                                <option>Quartermaster</option>
                                <option>Sailing Master</option>
                                <option>Gunner</option>
                                <option>Powder Monkey</option>
                                <option>Surgeon</option>
                                <option>Boatswain</option>
                                <option>Cook</option>
                            </select>
                            
                        </div>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                            Submit
                        </button>
                    </form>
                )
                }
            </div>
            <div className='box-border h-500 w-500 p-4 border-4 grid justify-items-center'>
                <h1 className='mb-2 mt-0 text-5xl font-medium leading-tight text-primary' onClick={handleAttack}>Click here to add an Attack</h1>
                {showAttack ? (
                    <img className='object-scale-down h-48 w-96' src="https://cdn.hswstatic.com/gif/storymaker-most-famous-pirates-caribbean-1105201.jpg" alt="Pirate Attack"/>
                ) : (
                    <form onSubmit= {handleSubmit}className="form">
                        <div className='mb-6'>
                            <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Attack Name</label>
                            <input 
                                type="text" 
                                id="large-input" 
                                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                name="name"
                                onChange={(e) => setAttackName(e.target.value)} 
                            />
                        </div>
                        <div className='mb-6'>
                            <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Attack Location</label>
                            <input 
                                type="text" 
                                id="large-input" 
                                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                name="location"
                                onChange={(e) => setAttackLocation(e.target.value)} 
                            />
                        </div>
                        <div className='mb-6'>
                            <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Attack date</label>
                            <input
                                type="text" 
                                id="large-input" 
                                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                name="date"
                                onChange={(e) => setAttackDate(e.target.value)} 
                                placeholder='MM/DD/YYYY'
                            />   
                        </div>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                            Submit
                        </button>
                    </form>
                )
                }                
            </div>

            <div className='box-border h-500 w-500 p-4 border-4 grid justify-items-center'>
                <h1 className='mb-2 mt-0 text-5xl font-medium leading-tight text-primary ' onClick={handleShip}>Click here to add a Ship</h1>
                {showShip ? (
                    <img className='object-scale-down h-48 w-96' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/The_Pirate_Bay_logo.svg/2000px-The_Pirate_Bay_logo.svg.png" alt="Pirate Ship"/>
                ) : (
                    <form onSubmit= {handleShipSubmit}className="form">
                        <div className='mb-6'>
                            <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Ship Name</label>
                            <input 
                                type="text" 
                                id="large-input" 
                                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                name="name"
                                onChange={(e) => setShipName(e.target.value)} 
                            />
                        </div>
                        <div className='mb-6'>
                            <label for="ship-sizes" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Ship Size</label>
                            <select onChange={(e) => setShipSize(e.target.value)} id="ship-sizes" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option>--Select--</option>
                                <option>Handy</option>
                                <option>Aframax</option>
                                <option>Panamax</option>
                                <option>Suezmax</option>
                                <option>Capesize</option>
                                <option>Supertanker</option>
                                <option>Chinamax</option>
                                <option>Seawaymax</option>
                                <option>PaddleBoat</option>
                            </select>
                        </div>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                            Submit
                        </button>
                    </form>
                )
                }
            </div>
            
        </div>
    )



   


}
export default Form 

// // <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
// <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
// <h1 className="text-3xl font-semibold text-center text-indigo-700 uppercase">
//     Join A Ship
// </h1>
// <form className="mt-6">
//     <div className="mb-2">
//         <label
//             for="text"
//             className="block text-sm font-semibold text-gray-800"
//         >
//             Ship Name
//         </label>
//         <input
//             type="name"
//             className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
//         />
//     </div>
//     <button id='dropdownDefaultButton' data-dropdown-toggle='dropdown' class='text-white bg-purple-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium round-le text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-700 dark:focus:ring-blue-800' type='button'> Select Ship Size  <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
//     <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
//     </div>
//     {/* <div className="mb-2">
//         <label
//             for="name"
//             className="block text-sm font-semibold text-gray-800"
//         >
//             Ship Size
//         </label>
//         <input
//             type=""
//             className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
//         />
//     </div> */}
//     <div className="mb-2">
//         <label
//             for="email"
//             className="block text-sm font-semibold text-gray-800"
//         >
//             Email
//         </label>
//         <input
//             type="email"
//             className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
//         />
//     </div>
//     <div className="mt-6">
//         <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
//             🏴‍☠️🌊🧜‍♀️☠️
//         </button>
//     </div>
// </form>
// </div>
// </div>
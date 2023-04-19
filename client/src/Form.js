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
        <div>
            <form onSubmit= {handleSubmit}className="form">
                <input 
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => setAttackName(e.target.value)} 
                    placeholder= "Enter Attack Name"  
                />
                <input 
                    type="text"
                    id="location"
                    name="location"
                    onChange={(e) => setAttackLocation(e.target.value)} 
                    placeholder= "Enter Attack Location"  
                />
                <input
                    type="text"
                    id= "date"
                    name="date"
                    onChange={(e) => setAttackDate(e.target.value)} 
                    placeholder= "Enter Attack date"  
                />   
                <button>
                    Submit
                </button>
            </form>
            <form onSubmit= {handleShipSubmit}className="form">
                <input 
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => setShipName(e.target.value)} 
                    placeholder= "Enter Ship Name"  
                />
                <input 
                    type="text"
                    id="size"
                    name="size"
                    onChange={(e) => setShipSize(e.target.value)} 
                    placeholder= "Enter Ship Size"  
                />
                <button>
                    Submit
                </button>
            </form>

            <form onSubmit= {handlePirateSubmit}className="form">
                <input 
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => setPirateName(e.target.value)} 
                    placeholder= "Enter Pirate Name"  
                />
                <input 
                    type="text"
                    id="age"
                    name="age"
                    onChange={(e) => setPirateAge(parseInt(e.target.value))} 
                    placeholder= "Enter Pirate Age"  
                />
                <input
                    type="text"
                    id= "rank"
                    name="rank"
                    onChange={(e) => setPirateRank(e.target.value)} 
                    placeholder= "Enter Pirate Rank"  
                />   
                <button>
                    Submit
                </button>
            </form>
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
import React from 'react';
import {useState} from 'react';


function Pirates({name, age, rank, id, handlePirateDelete, handlePiratePatch}){
    const [pirateName, setPirateName] = useState('');
    const [pirateAge, setPirateAge] = useState('');
    const [pirateRank, setPirateRank] = useState('');

    const handleDelete = (e) => {
        handlePirateDelete(id)
        fetch(`/pirates/${id}`, {
            method: "DELETE"
        })
    }
    const handlePatch = (e) => {
        e.preventDefault()
        
        let newPirateObj = {
            name: pirateName,
            age: pirateAge,
            rank: pirateRank
        }
        

        fetch(`/pirates/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newPirateObj)
        })
            .then(r => r.json())
            .then(handlePiratePatch)
    }

    return(
        <div>
            <h1>{name}</h1>
            <p>{age}</p>
            <p>{rank}</p>
            <button onClick={handleDelete}>EDIT</button>
            <form onSubmit= {handlePatch} className="form">
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


export default Pirates

// function ModalForm({isVisible, handleClose}) {

//     // const [visible, setVisible] = useState(isVisible);

//     // const toggleModal = () => {
//     //     setVisible(!visible);
//     // };

//   return (
//     <div>

//       {isVisible && (
//         <div className="fixed z-10 inset-0 overflow-y-auto">
//           <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//             <div className="fixed inset-0 transition-opacity" aria-hidden="true">
//               <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//             </div>
//             <div
//               className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
//               <div>
//                 <div className="mt-3 text-center sm:mt-5">
//                   <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
//                     Click the Flag to Make the Pirate Walk The Plank
//                   </h3>
//                   <div className="mt-2">
//                     <p className="text-sm text-gray-500">
//                       🦈🌊🏴‍☠️☠️
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-5 sm:mt-6">
//                 <button type="button"
//                   className= "animate-pulse inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500 sm:text-sm"
//                   onClick={handleClose}
//                 >
//                 ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//                 ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣷⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//                 ⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀
//                 ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀
//                 ⠀⣄⠀⠀⠀⠀⠀⠀⠈⢿⡇⠀⠈⣿⣿⠁⠀⢸⡿⠁⠀⠀⠀⠀⠀⠀⣠⠀⠀
//                 ⠀⠀⢹⣦⠀⠀⠀⠀⠀⠀⠻⣷⣤⣴⢏⡹⣦⣤⣾⠟⠀⠀⠀⠀⠀⠀⣴⡏⠀⠀
//                 ⠀⠀⠀⢿⣷⣄⠀⠀⠀⠀⠀⠀⠙⠛⠛⠛⠛⠋⠀⠀⠀⠀⠀⠀⣠⣾⡿⠀⠀⠀
//                 ⠀⠀⠀⠈⢿⣿⣧⡀⠀⠀⠀⢸⣧⡀⠀⠀⢀⣼⡇⠀⠀⠀⢀⣼⣿⡿⠁⠀⠀⠀
//                 ⠀⠀⠀⠀⠈⠻⣿⣿⣦⣀⠀⠀⠙⠿⣷⣾⠿⠋⠀⠀⣀⣴⣿⣿⠟⠁⠀⠀⠀⠀
//                 ⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣷⣄⡀⠀⠀⠀⠀⢀⣠⣾⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀
//                 ⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⢿⣿⠿⠒⢀⣠⣶⣿⣿⡿⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀
//                 ⠀⠀⠀⠀⠀⠀⠀⠰⢶⡄⠀⣠⣴⣾⣿⣿⡿⠟⠋⠀⢠⡶⠆⠀⠀⠀⠀⠀⠀⠀
//                 ⠀⠀⠀⠀⣀⠀⣀⣤⡈⢻⣆⠸⠿⠟⠋⠁⠠⠶⠇⣰⡟⢁⣤⣀⠀⣀⠀⠀⠀⠀
//                 ⠀⠀⠀⢸⣿⡇⠘⠛⠁⠀⠻⠆⠀⠀⠀⠀⠀⠀⠰⠟⠀⠈⠛⠃⢸⣿⡇⠀⠀⠀
//                 ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
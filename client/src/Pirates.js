import React from 'react';
import {useState} from 'react';


function Pirates({name, age, rank, id, handlePirateDelete, handlePiratePatch}){

    const [pirateName, setPirateName] = useState('');
    const [pirateAge, setPirateAge] = useState('');
    const [pirateRank, setPirateRank] = useState('');
    const [isVisible, setIsVisible] = useState(false)
    const [isPatchVi, setIsPatchVi] = useState(false)

    const handleClose = () => {
        setIsVisible(!isVisible);
      }

    const handlePatchClose = () => {
        setIsPatchVi(!isPatchVi);
    }

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
            <button onClick={handleClose}className="bg-blue-500 text-white active:bg-blue-300 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"> Choose Your Fate</button>
                {isVisible && (
                <button type="button"
                   className= "animate-pulse inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500 sm:text-sm"
                   onClick={handleDelete}
                >
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣷⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀
                ⠀⣄⠀⠀⠀⠀⠀⠀⠈⢿⡇⠀⠈⣿⣿⠁⠀⢸⡿⠁⠀⠀⠀⠀⠀⠀⣠⠀⠀
                ⠀⠀⢹⣦⠀⠀⠀⠀⠀⠀⠻⣷⣤⣴⢏⡹⣦⣤⣾⠟⠀⠀⠀⠀⠀⠀⣴⡏⠀⠀
                ⠀⠀⠀⢿⣷⣄⠀⠀⠀⠀⠀⠀⠙⠛⠛⠛⠛⠋⠀⠀⠀⠀⠀⠀⣠⣾⡿⠀⠀⠀
                ⠀⠀⠀⠈⢿⣿⣧⡀⠀⠀⠀⢸⣧⡀⠀⠀⢀⣼⡇⠀⠀⠀⢀⣼⣿⡿⠁⠀⠀⠀
                ⠀⠀⠀⠀⠈⠻⣿⣿⣦⣀⠀⠀⠙⠿⣷⣾⠿⠋⠀⠀⣀⣴⣿⣿⠟⠁⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣷⣄⡀⠀⠀⠀⠀⢀⣠⣾⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⢿⣿⠿⠒⢀⣠⣶⣿⣿⡿⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⠀⠰⢶⡄⠀⣠⣴⣾⣿⣿⡿⠟⠋⠀⢠⡶⠆⠀⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⣀⠀⣀⣤⡈⢻⣆⠸⠿⠟⠋⠁⠠⠶⠇⣰⡟⢁⣤⣀⠀⣀⠀⠀⠀⠀
                ⠀⠀⠀⢸⣿⡇⠘⠛⠁⠀⠻⠆⠀⠀⠀⠀⠀⠀⠰⠟⠀⠈⠛⠃⢸⣿⡇⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                </button>
                )}
            <button onClick={handlePatchClose} className="bg-blue-500 text-white active:bg-blue-300 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button">Edit Pirate Information</button>
              {isPatchVi && (
                <div>
                  <form onSubmit={handlePatch} className="form">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onChange={(e) => setPirateName(e.target.value)}
                      placeholder="Enter Pirate Name"
                    />
                    <input
                      type="text"
                      id="age"
                      name="age"
                      onChange={(e) => setPirateAge(parseInt(e.target.value))}
                      placeholder="Enter Pirate Age"
                    />
                    <input
                      type="text"
                      id="rank"
                      name="rank"
                      onChange={(e) => setPirateRank(e.target.value)}
                      placeholder="Enter Pirate Rank"
                    />
                    <button type="submit">Save Pirate Changes</button>
                  </form>
                  <button onClick={handleClose}>Pirate Updated</button>
                </div>
              )}
            </div>
          );
        }




export default Pirates






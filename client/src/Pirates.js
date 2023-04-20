import React from 'react';
import {useState} from 'react';
import styles from './App.css'


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
        <div className="outline-solid max-w-sm rounded overflow-hidden shadow-lg shadow-gray-500/50">
          <div className= 'bg-blue-200 flex flex-col rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52'>
              <h1>Name: {name}</h1>
              <p>Age: {age}</p>
              <p>Rank: {rank}</p>
              <button onClick={handleClose}className="bg-black text-white active:bg-blue-300 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"> 🌊💀🌊</button>
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
              <button onClick={handlePatchClose} className="bg-gray-500 text-white active:bg-blue-300 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button">Parley</button>
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
        </div>
      </div>
  
          );
        }




export default Pirates






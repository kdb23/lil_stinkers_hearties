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
          <div className= 'flex flex-col rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52'>
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
              <button onClick={handlePatchClose} className="bg-gray-500 text-white active:bg-gray-300 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
                      <div className='mb-6'>
                          <label for="pirate-rank" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Select Pirate Rank</label>
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
                    </form>
                    <button onClick={handleClose}>Provide Parley</button>
                  </div>
                )}
          </div>
        </div>
      </div>
  
          );
        }




export default Pirates






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
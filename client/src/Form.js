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
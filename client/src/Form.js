import {useState} from 'react'




function Form({addAttack}) {
    const [attackName, setAttackName] = useState('');
    const [attackLocation, setAttackLocation] = useState('');
    const [attackDate, setAttackDate] = useState('');
    const [shipName, setShipName] = useState('');
    const [shipSize, setShipSize] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        let attackObj = {
            name: attackName,
            location: attackLocation,
            date: attackDate

        };
        fetch("http://127.0.0.1:5555/attacks", {
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
        }
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

            
        </div>
    )



   


}
export default Form 
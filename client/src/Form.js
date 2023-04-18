import {useState} from 'react'




function Form({addAttack}) {
    const [attackName, setAttackName] = useState('');
    const [attackLocation, setAttackLocation] = useState('');
    const [attackDate, setAttackDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let attackObj = {
            name: attackName,
            location: attackLocation,
            date: attackDate

        };
        fetch("/attacks", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(attackObj),
        })
            .then((response) => response.json())
            .then(addAttack)
        e.target.reset()

    };

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
        </div>

    )


}
export default Form 
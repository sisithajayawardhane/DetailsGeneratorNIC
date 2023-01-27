import React, {useState} from "react";

export default function DetailsGenerator(){

    const [id,setId] = useState(0);
    const [year,setYear] = useState(0);
    const [gender,setGender] = useState("");
    

    
    const generator = () => {
        let number = Number(id.slice(0, -5));
        let year = (number > 100) ? number/1000 : 1900+(number/1000);
        setYear(year);
        let number1 = number % 1000;
        if ((number1 > 0) && (number1 < 367)){
            setGender("Male");
        }
        else if ((number1 > 500) && (number1 < 867)){
            setGender("Female");
        }
    }

    return(
        <div>
            <h1>Enter your NIC number here</h1>
            <label>NIC:</label>
            <input type="text" onChange={(e)=>{
                    setId(e.target.value);
                }}></input>
            <button onClick={generator}>Sumbit</button>
        </div>
    )
}
import React, {useState} from "react";

export default function DetailsGenerator(){

    const [id,setId] = useState(0);
    const [year,setYear] = useState(0);
    const [gender,setGender] = useState("");
    

    
    const generator = () => {
        let number = id.replace("v", "") && id.replace("x", "");
        let num = Number(number);
        if (num < 100000){
            let year = 1900+(num/1000);
            setYear(year);
            let a = num % 1000;
            if (a < 500){
                setGender("male");
            }else {
                setGender("female");
            }
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
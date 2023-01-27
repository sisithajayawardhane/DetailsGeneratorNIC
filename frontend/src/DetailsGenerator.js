import React, {useState} from "react";

export default function DetailsGenerator(){

    const [id,setId] = useState(0);
    const [year,setYear] = useState();
    const [month,setMonth] = useState("");
    const [day,setDay] = useState();
    const [gender,setGender] = useState("");
    

    
    const generator = () => {
        let number = Number(id.slice(0, -5));
        let year = ((number/1000) > 100) ? Math.floor(number/1000) : Math.floor(1900+(number/1000));
        setYear(year);
        let number1 = number % 1000;
        if ((number1 > 0) && (number1 < 367)){
            setGender("Male");
            switch(true) {
                case (number1 < 32):
                  setMonth("Jan");
                  setDay(number1);
                  break;
                case (number1 < 61):
                    setMonth("Feb");
                    setDay(number1 - 31);
                  break;
                case (number1 < 92):
                  setMonth("Mar");
                  setDay(number1 - 60);
                  break;
                case (number1 < 122):
                    setMonth("Apr");
                    setDay(number1 - 91);
                  break;
                case (number1 < 153):
                  setMonth("May");
                  setDay(number1 - 121);
                  break;
                case (number1 < 183):
                    setMonth("Jun");
                    setDay(number1 - 152);
                  break;
                case (number1 < 214):
                  setMonth("Jul");
                  setDay(number1 - 182);
                  break;
                case (number1 < 245):
                  setMonth("Aug");
                  setDay(number1 - 213);
                  break;
                case (number1 < 275):
                  setMonth("Sep");
                  setDay(number1 - 244);
                  break;
                case (number1 < 306):
                  setMonth("Oct");
                  setDay(number1 - 274);
                  break;
                case (number1 < 336):
                  setMonth("Nov");
                  setDay(number1 - 305);
                  break;
                default:
                  setMonth("Dec");
                  setDay(number1 - 335);
              }
        }
        else if ((number1 > 500) && (number1 < 867)){
            setGender("Female");
            switch(true) {
                case (number1 < 532):
                  setMonth("Jan");
                  setDay(number1 - 500);
                  break;
                case (number1 < 561):
                    setMonth("Feb");
                    setDay(number1 - 531);
                  break;
                case (number1 < 592):
                  setMonth("Mar");
                  setDay(number1 - 560);
                  break;
                case (number1 < 622):
                    setMonth("Apr");
                    setDay(number1 - 591);
                  break;
                case (number1 < 653):
                  setMonth("May");
                  setDay(number1 - 621);
                  break;
                case (number1 < 683):
                    setMonth("Jun");
                    setDay(number1 - 652);
                  break;
                case (number1 < 714):
                  setMonth("Jul");
                  setDay(number1 - 682);
                  break;
                case (number1 < 745):
                  setMonth("Aug");
                  setDay(number1 - 713);
                  break;
                case (number1 < 775):
                  setMonth("Sep");
                  setDay(number1 - 744);
                  break;
                case (number1 < 806):
                  setMonth("Oct");
                  setDay(number1 - 774);
                  break;
                case (number1 < 836):
                  setMonth("Nov");
                  setDay(number1 - 805);
                  break;
                default:
                  setMonth("Dec");
                  setDay(number1 - 835);
              }
        }
        else {
            alert("Invalid ID number");
        }
    }

    return(
        <div>
            <h1>Enter your NIC number here</h1>
            <label>NIC:</label>
            <input type="text" minLength="10" onChange={(e)=>{
                    setId(e.target.value);
                }}></input>
            <button onClick={generator}>Sumbit</button>
            <h2>Gender = {gender}</h2>
            <h2>DOB = {year} {month} {day}</h2>
            
        </div>
    )
}
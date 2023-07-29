import { useState } from "react";
import "./index.css";

const Factorial = () => {
    const [result, setResult] = useState("");

    const calculateFactorial = (number) => {
        let n = number;
        let res = parseFloat(n);

        if (n !== "") {
            for (let i = 1; i < n; i++) {
                if (i !== 1) {
                    res = (res * i);
                }
            }
        } else {
            return "";
        } 
        
        return res;
    }

    return (
        <div className="container">
            <div className="main-factorial">
                <input type="number" title="Number" placeholder="Number" onChange={(e) => setResult(calculateFactorial(e.target.value))}/>
                {result!==""?<h2>{`Result: ${result}`}</h2>:null}
            </div>
        </div>
    )
}

export default Factorial;
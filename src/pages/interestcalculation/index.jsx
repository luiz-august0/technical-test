import { useState } from "react";
import "./index.css";

const InterestCalculation = () => {
    const [initialCapital, setInitialCapital] = useState("");
    const [rate, setRate] = useState("");
    const [months, setMonths] = useState("");
    const [result, setResult] = useState("");

    const calculateInvestment = () => {
        if (initialCapital !== "" && rate !== "" && months !== "") {
            let res = initialCapital;

            for (let i = 0; i < months; i++) {
                res = res + ((rate / 100) * initialCapital);
            }

            setResult(res);
        }
    }

    return (
        <div className="container">
            <div className="main-interest-calculation">
                <input type="number" title="Initial capital" placeholder="Initial capital" onChange={(e) => {setInitialCapital(e.target.value!==""?parseFloat(e.target.value):""); setResult("");}}/>
                <input type="number" title="Interest rate in percentual" placeholder="Interest rate in percentual" onChange={(e) => {setRate(e.target.value!==""?parseFloat(e.target.value):""); setResult("");}}/>
                <input type="number" title="Investment time (in months)" placeholder="Investment time (in months)" onChange={(e) => {setMonths(e.target.value!==""?parseFloat(e.target.value):""); setResult("");}}/>
                <button onClick={() => calculateInvestment()}>Calculate</button>
                {result!==""?<h2>{`Result: ${result.toFixed(2)}`}</h2>:null}
            </div>
        </div>
    )
}

export default InterestCalculation;
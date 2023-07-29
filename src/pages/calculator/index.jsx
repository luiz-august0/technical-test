import { useState } from "react";
import "./index.css";

const Calculator = () => {
    const [number1, setNumber1] = useState("");
    const [number2, setNumber2] = useState("");
    const [result, setResult] = useState("");

    const calculate = (operator) => {
        if (number1 == "" || number2 == "") { return; }

        let n1 = parseFloat(number1);
        let n2 = parseFloat(number2);
        let res = 0;
        
        switch (operator) {
            case "+":
                res = (n1 + n2);
                break;
            case "-":
                res = (n1 - n2);
                break;
            case "/":
                res = (n1 / n2);
                break;
            case "*":
                res = (n1 * n2);
                break;        
            default:
                break;
        }

        if (res !== Infinity && res) {
            setResult(res);
        } else {
            setResult(0);
        }
    }

    return (
        <div className="container">
            <div className="main-calculator">
                <input type="number" title="First Number" placeholder="First Number" value={number1} onChange={(e) => {setNumber1(e.target.value); setResult("");}}/>
                <input type="number" title="Second Number" placeholder="Second Number" value={number2} onChange={(e) => {setNumber2(e.target.value); setResult("");}}/>
                <div className="buttons">
                    <button onClick={() => calculate("+")}>+</button>
                    <button onClick={() => calculate("-")}>-</button>
                    <button onClick={() => calculate("/")}>÷</button>
                    <button onClick={() => calculate("*")}>x</button>
                </div>
                {result!==""?<h2>{`Result: ${result}`}</h2>:null}
            </div>
        </div>
    )
}

export default Calculator;
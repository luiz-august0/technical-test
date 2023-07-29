import { useState } from "react";
import "./index.css";

const PrimeNumbers = () => {
    const [result, setResult] = useState("");

    const isPrimeNumber = (number) => {
        let divisibles = 0;

        for (let i = 1; i <= number; i++) {
            if (number % i == 0) {
                divisibles++;
            }
        }

        if (divisibles == 2) {
            return true;
        } else {
            return false;
        }
    }

    const renderPrimeNumbers = () => {
        let primeNumbers = [];

        for (let i = 0; primeNumbers.length <= 10; i++) {
            if (isPrimeNumber(i)) {
                primeNumbers.push(i);
            }
        }

        return (
            <div>
                <h2>First 10 prime numbers:</h2>
                <div className="rendered-numbers">
                    {primeNumbers.map((e) => <h2 key={e}>{`${e}${primeNumbers.indexOf(e) !== 10?",":""}`}</h2>)}
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="main-prime-numbers">
                {renderPrimeNumbers()}
                <input type="number" title="Number" placeholder="Number" onChange={(e) => setResult(e.target.value!==""?isPrimeNumber(e.target.value):"")}/>
                {result!==""?<h2>{`Result: ${result}`}</h2>:null}
            </div>
        </div>
    )
}

export default PrimeNumbers;
import { useState } from "react";
import "./index.css";

const VowelCounter = () => {
    const [result, setResult] = useState("");

    const calculateVowels = (word) => {
        const vowels = ["a", "e", "i", "o", "u"];
        let count = 0;

        if (word !== "") {
            for (let letter of word) {
                if (vowels.includes(letter)) {
                    count++;
                }  
            }

            return count;
        } else {
            return "";
        } 
    }

    return (
        <div className="container">
            <div className="main-vowel-counter">
                <input type="text" title="Simple Text" placeholder="Simple Text" onChange={(e) => setResult(calculateVowels(e.target.value.toLowerCase()))}/>
                {result!==""?<h2>{`Result: ${result}`}</h2>:null}
            </div>
        </div>
    )
}

export default VowelCounter;
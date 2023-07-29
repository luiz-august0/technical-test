import { useState } from "react";
import "./index.css";

const Palindrome = () => {
    const [result, setResult] = useState("");

    const isPalindrome = (word) => {
        if (word !== "") {
            let simpleWord = word.replace(/[\W_]/g, '');
            return simpleWord.split('').reverse().join('') === simpleWord;
        } else {
            return "";
        } 
    }

    return (
        <div className="container">
            <div className="main-palindrome">
                <input type="text" title="Simple Text" placeholder="Simple Text" onChange={(e) => setResult(isPalindrome(e.target.value.toLowerCase()))}/>
                {result!==""?<h2>{`Result: ${result}`}</h2>:null}
            </div>
        </div>
    )
}

export default Palindrome;
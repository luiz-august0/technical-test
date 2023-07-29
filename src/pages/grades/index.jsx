import { useState } from "react";
import "./index.css";

const Grades = () => {
    const [grade1, setGrade1] = useState("");
    const [grade2, setGrade2] = useState("");
    const [grade3, setGrade3] = useState("");
    const [result, setResult] = useState("");

    const average = () => {
        if (grade1 !== "" && grade2 !== "" && grade3 !== "") {
            setResult((grade1 + grade2 + grade3) / 3);
        }
    }

    return (
        <div className="container">
            <div className="main-grades">
                <input type="number" title="Grade One" placeholder="Grade One" value={grade1} onChange={(e) => {setGrade1(e.target.value!==""?parseFloat(e.target.value):""); setResult("");}}/>
                <input type="number" title="Grade Two" placeholder="Grade Two" value={grade2} onChange={(e) => {setGrade2(e.target.value!==""?parseFloat(e.target.value):""); setResult("");}}/>
                <input type="number" title="Grade Three" placeholder="Grade Three" value={grade3} onChange={(e) => {setGrade3(e.target.value!==""?parseFloat(e.target.value):""); setResult("");}}/>
                <button onClick={() => average()}>Calculate</button>
                {result!==""?<h2>{`Result: ${result.toFixed(2)}`}</h2>:null}
            </div>
        </div>
    )
}

export default Grades;
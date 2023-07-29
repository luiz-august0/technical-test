import { useState } from "react";
import "./index.css";

const Table = () => {
    const [result, setResult] = useState("");

    const createTable = (number) => {
        let arrayTable = [];

        if (number !== "") {
            for (let i = 1; i <= 10; i++) {
                arrayTable.push(`${number} X ${i} = ${(number * i)}`);
            }
            return arrayTable;
        } else {
            return "";
        } 
    }

    return (
        <div className="container">
            <div className="main-table">
                <input type="number" title="Number" placeholder="Number" onChange={(e) => setResult(createTable(e.target.value))}/>
                {result!==""?result.map((e) => <h2 key={e}>{e}</h2>):null}
            </div>
        </div>
    )
}

export default Table;
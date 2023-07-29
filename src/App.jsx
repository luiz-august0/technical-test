import "./App.css";
import "./globalStyles.css";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <button className="mainButton" onClick={() => navigate("/calculator")}>CALCULATOR</button>
      <button className="mainButton" onClick={() => navigate("/primenumbers")}>PRIME NUMBERS</button>
      <button className="mainButton" onClick={() => navigate("/factorial")}>FACTORIAL</button>
      <button className="mainButton" onClick={() => navigate("/palindrome")}>PALINDROME</button>
      <button className="mainButton" onClick={() => navigate("/table")}>TABLE</button>
      <button className="mainButton" onClick={() => navigate("/vowelcounter")}>VOWEL COUNTER</button>
      <button className="mainButton" onClick={() => navigate("/grades")}>GRADE AVERAGE</button>
      <button className="mainButton" onClick={() => navigate("/interestcalculation")}>INTEREST CALCULATION</button>
    </div>
  )
}

export default App;
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Calculator from "./pages/calculator";
import PrimeNumbers from "./pages/primenumbers";
import Factorial from "./pages/factorial";
import Palindrome from "./pages/palindrome";
import Table from "./pages/table";
import VowelCounter from "./pages/vowelcounter";
import Grades from "./pages/grades";
import InterestCalculation from "./pages/interestcalculation";

const Navigation = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<App/>}/>
				<Route exact path="/calculator" element={<Calculator/>}/>
				<Route exact path="/primenumbers" element={<PrimeNumbers/>}/>
				<Route exact path="/factorial" element={<Factorial/>}/>
				<Route exact path="/palindrome" element={<Palindrome/>}/>
				<Route exact path="/table" element={<Table/>}/>
				<Route exact path="/vowelcounter" element={<VowelCounter/>}/>
				<Route exact path="/grades" element={<Grades/>}/>
				<Route exact path="/interestcalculation" element={<InterestCalculation/>}/>
			</Routes>
		</BrowserRouter>
	)
}

export default Navigation;
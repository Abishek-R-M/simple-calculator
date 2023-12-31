import React, {useState} from "react";

function App() {

    const [calc , setCalc] = useState("");
    const [result , setResult] = useState("");

    const ops = ["+" , "-", "*", "/", "."];

    const updateCalc = value => {
        if (
            ops.includes(value) && calc === "" ||
            ops.includes(value) && ops.includes (calc.slice(-1))
        )
        {
            return;
        }
        setCalc(calc + value); 

        if (!ops.includes(value)) {
            setResult(eval(calc + value).toString());
        }
    }

    const createNumbers = () => {
        const numbers = [];
            for (let i=1; i<10; i++) {
                numbers.push(
                <button onClick={ () => updateCalc (i.toString())} key={i}> {i} </button>
                )
            }

            return numbers;
    };

    const calculate = () => {
        setCalc(eval(calc).toString()) 
    }

    const del = () => {
        if (calc == "") {
            return;
        }

        const value = calc.slice(0, -1)

        setCalc(value)
    } 

    return  (
        <div className="calculator">
            <div className="container">
                <div className="display">
                    { result ? <span> ({result}) </span> : "" } &nbsp; {calc || "0"}
                </div>
                <div className="operators">
                    <button onClick={ () => updateCalc ("+")}>+</button>
                    <button onClick={ () => updateCalc ("-")}>-</button>
                    <button onClick={ () => updateCalc ("*")}>*</button>
                    <button onClick={ () => updateCalc ("/")}>/ </button>
                    <button onClick={del}>DEL</button>
                </div>
                    <div className="digits">
                        { createNumbers() }
                        <button onClick={ () => updateCalc ("0")} >0</button>
                        <button onClick={ () => updateCalc (".")}>.</button>
                        <button onClick={calculate}>=</button>
                    </div>
            </div>
        </div>
    )
};


export default App;
import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
    const [input, setInput] = useState("");

    const handleClick = (value) => {
        setInput((prev) => prev + value);
    };

    const handleClear = () => {
        setInput("");
    };

    const handleCalculate = () => {
        try {
            setInput(eval(input).toString()); // ⚠️ Attention avec `eval`
        } catch {
            setInput("Erreur");
        }
    };

    return (
        <div className="calculator">
            <div className="display">{input || "0"}</div>
            <div className="buttons">
                {["1", "2", "3", "+"].map((btn) => (
                    <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
                ))}
                {["4", "5", "6", "-"].map((btn) => (
                    <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
                ))}
                {["7", "8", "9", "*"].map((btn) => (
                    <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
                ))}
                {["0", "C", "=", "/"].map((btn) => (
                    btn === "C" ? (
                        <button key={btn} className="clear" onClick={handleClear}>{btn}</button>
                    ) : btn === "=" ? (
                        <button key={btn} className="equal" onClick={handleCalculate}>{btn}</button>
                    ) : (
                        <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
                    )
                ))}
            </div>
        </div>
    );
}

export default Calculator;

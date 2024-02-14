import React, { useEffect } from 'react'
import diet from "/src/assets/images/diet.jpg";
import { useState } from 'react';


export const BmiCalc = () => {
    const [caution, setCaution] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState(null);
    const [status, setStatus] = useState("");
    function Evaluate() {
        setCaution("");
        let isValidHeight = /^\d+$/.test(height);
        let isValidWeight = /^\d+$/.test(weight);
        if (isValidHeight && isValidWeight) {
            let weightValue = weight;
            let heightValue = height;
            heightValue = heightValue / 100;
            let bmi = (weightValue / (heightValue * heightValue)).toFixed(2);
            setBmi(bmi);
            // console.time();
            // console.timeEnd();
            console.log("Waiting state");
            if (bmi <= 18.5) setStatus("Underweight");
            else if (bmi <= 24.9) setStatus("Normal weight");
            else if (bmi <= 29.9) setStatus("Over Weight");
            else setStatus("Obesity");
        }
        else {
            setCaution("Please enter an number...");
        }
    }
    function clear() {
        setBmi(null);
        setWeight("");
        setHeight("");
        setCaution("");
    }
    function enterTriggered(event) {
        if (event.target.key === "Enter") {
            Evaluate();
        }
    }
    return (
        <>
            <div className="container">
                <div className="center">
                    <img draggable="false" src={diet} alt="" />
                    <div className="form">
                        <header>BMI CALCULATOR</header>
                        <div className="caution">{caution}</div>
                        <div className="inner-container">
                            <div className="input-form">
                                <label htmlFor="height">Height (CM)</label>
                                <input value={height} required onChange={(e) => { setHeight(e.target.value); setCaution(""); setBmi(null) }} type="text" id='height' />
                                <label htmlFor="weight">Weight (KG)</label>
                                <input onKeyUp={enterTriggered} value={weight} required onChange={(e) => { setWeight(e.target.value); setCaution(""); setBmi(null) }} type="text" id='weight' />
                            </div>
                            <div className="btn">
                                <button onClick={Evaluate}>Calculate BMI</button>
                                <button onClick={clear}>Clear</button>
                            </div>
                        </div>
                        {bmi !== null && (
                            <div className="evaluation">
                                <span>{"Your BMI weight ( "}{bmi}{" )"}</span>
                                <span>{status}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
export default BmiCalc;
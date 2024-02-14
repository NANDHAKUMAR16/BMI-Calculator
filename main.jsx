import React, { Fragment } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/CSS/BmiCalc.css";
import { BmiCalc } from './assets/Components/BmiCalc.jsx';


const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <BmiCalc />
  </>
);

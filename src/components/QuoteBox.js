import React from 'react';
import quotes from '../blob.json'
import '../App.css';
import { useState, useEffect } from "react";


const QuoteBox = () => {
    const  randomQuotes = Math.floor(Math.random() * quotes.length);
    console.log(randomQuotes)
    const [quote, setQuotes] = useState(randomQuotes) 
    const nxt =() => {
  const  randomQuotes = Math.floor(Math.random() * quotes.length);
   setQuotes(randomQuotes);
  }
  useEffect(() => {
    const colors = ["#845EC2", "#D65DB1", "#FF6F91", "#F9F871", "#FFC75F"];

    document.body.style = `background: ${ colors[Math.floor(Math.random() * colors.length)] }`;
    }, [randomQuotes]);

  return (

<div className= "container" >
    <h1>
        {quotes[quote].quote} 
        </h1>
        <h2>
        {quotes[quote].author}
        </h2>
        
    <button onClick={nxt}>
        Next
    </button>

    </div>

  );
};

export default QuoteBox;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Clock from './Clock';






let curDate = new Date();
curDate = curDate.getHours();
let greeting = '';
const cssStyle = { };

if(curDate >=1 && curDate <12)
 {
   greeting = 'Good Morning';
   cssStyle.color = "green";
 } 
else if(curDate >=12  && curDate < 20)
 {
   greeting = 'Good afternoon';
   cssStyle.color = "red";
 }
else
 {
   greeting = 'Good Night, now its time to go home';
   cssStyle.color = "yellow";
 }


ReactDOM.render
( 
 <> 
  
    
      <h1> Hello guys, <span style={cssStyle}> {greeting} <Clock/> </span></h1>
      
      
 </>
  ,document.getElementById('root')
 
);
reportWebVitals();

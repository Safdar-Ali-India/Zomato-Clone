// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

/* eslint-disable no-restricted-globals */

let isOrderAccepted = false;
let isValedFound = false;
let hasRestaurantSeenMyOrder = false;
let RestaurantTimer = null;

// Zomato App - Start
window.addEventListener('load', function(){
document.getElementById('acceptOrder').addEventListener('click',function(){
        askRestuarantToAcceptOrReject();
        
      });
      checkIfOrderFound()
      .then(res=>{
        console.log('updated fromm res...',isOrderAccepted);
        if (isOrderAccepted) alert('Your Order has been accepted ')
      
      // step 3 - order rejected
        else alert('Sorry your order could not be accepted, refund initiated')        
      
      
      })
               .catch(err=>{ 
                console.log('err from api...',err);
               alert('Oops! Something went wrong ')
              });


})

// step 1 - check whether order accepted or not
function askRestuarantToAcceptOrReject(){
// callback
setTimeout(() => {
  isOrderAccepted = confirm('Should the restaurant accept the order?');
  hasRestaurantSeenMyOrder=true;
  console.log(isOrderAccepted);
}, 1000);




  // Promise - resove/accept or reject




}

// step 2 - - check if restaurant  accepted order  
function checkIfOrderFound(){
return new Promise(( resolve, reject)=>{


  setInterval(() => {
    console.log('check if order accepted or not');
    if(!hasRestaurantSeenMyOrder) return;
    
    if(isOrderAccepted) resolve(true);
    else resolve(false);
  }, 2000);

})



}



 
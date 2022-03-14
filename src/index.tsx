// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HttpProvider } from './context/HttpContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom'

// #loader elementi auth check yapildiktan sonra da kaldirilabilir. 
document.addEventListener('readystatechange', (event: any) => {

  // When HTML/DOM elements are ready:
  if (event.target.readyState === "interactive") {   //does same as:  ..addEventListener("DOMContentLoaded"..
    console.log("Interactive");
  }

  // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
  if (event.target.readyState === "complete") {
    console.log("Loaded");
    const loader: any = document.querySelector(".loader");
    setTimeout(() => {
      loader.classList.add("fadeout"); // 1-) Once fade out
    }, 850);

    setTimeout(() => {
      loader.remove();
      console.log("Loader Removed!"); // 2-) sonra Tum elementi sil. 
    }, 1050);
  }
});

const queryClient = new QueryClient();


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <HttpProvider>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </AuthProvider>
      </HttpProvider>
    </Router>
  </React.StrictMode >,
  document.getElementById('root'), () => {
    // console.log('rendered');
  }
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

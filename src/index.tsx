import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom';
import React from 'react';
import reportWebVitals from './reportWebVitals';
import App from './App';
import "./bs-config.scss"
import './index.scss';

// #loader auth check yapildiktan sonra da kaldirilabilir. 
document.addEventListener('readystatechange', (event: any) => {

  // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
  if (event.target.readyState === "complete") {

    const loader: any = document.querySelector(".loader");
    setTimeout(() => {
      loader.classList.add("fadeout");
    }, 850);

    setTimeout(() => {
      loader.remove();
    }, 1050);
  }
});

const queryClient = new QueryClient();


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Router>
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

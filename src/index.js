import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';  //we're import the css styles from bootsrap
import reportWebVitals from './reportWebVitals';

/*
  this file index, has the id root that render our component App, 
  that's pull all our webApp, virtualize our components / pages

  IMPORTANT: 
  for the version of React 18^ has been deprecated the follows functions.

  -react-dom: ReactDOM.render has been deprecated. Using it will warn and run your app in React 17 mode.
  -react-dom: ReactDOM.hydrate has been deprecated. Using it will warn and run your app in React 17 mode.
  -react-dom: ReactDOM.unmountComponentAtNode has been deprecated.
  -react-dom: ReactDOM.renderSubtreeIntoContainer has been deprecated.
  -react-dom/server: ReactDOMServer.renderToNodeStream has been deprecated.
*/

const container = document.getElementById('root');
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

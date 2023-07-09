// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.css';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Layout  from "./pages_router/Layout";
// import Home from "./pages_router/Home";
// import Blogs from "./pages_router/Blogs";


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

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const rooter = ReactDOM.createRoot(document.getElementById('rooter'));
// //i have change the name  from root to rooter
// root.render(<App />);




import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./pages_router/Layout";
import Home from "./pages_router/Home";
import Blogs from "./pages_router/Blogs";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
  <App/>
    {/* <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </Router> */}
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

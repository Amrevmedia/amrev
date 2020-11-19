import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { Routes } from './Routes';

function App () {
  return (
    <Routes />
  )
}

// function App() {
//   return (

//     <div className="app">


//       <Header />

//       <div className="app__body">
//         <Sidebar />
//         <Feed />


//       {/* App Body */}

//       {/*sidebar */}

//       {/*feed */}
//       </div>
//     </div>
//   );
// }

export default App;

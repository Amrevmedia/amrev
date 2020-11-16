import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Feed from "./Components/Feed/Feed";
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

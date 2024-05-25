import { Routes, Route } from "react-router-dom";

import { Header } from './components/Layouts/Header/Navbar';
import { Navbar } from './components/Layouts/Navbar/Navbar';
import { Calculator } from "./components/Page/Calculator/Calculator";
import { RandomColor } from "./components/Page/RandomColor/RandomColor";
import { TaskManager } from "./components/Page/TaskManager/TaskManager";
import { UserRegistration } from "./components/Page/UserRegistration/UserRegistration";
import { Welcome } from "./components/Page/Welcome/Welcome";

function App() {
  return (
    <>
       <Header className="text-5xl w-1/4 ml-12 text-white font-extrabold">JONATHAN TOMBE
        <Navbar />
      </Header>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/randomcolor' element={<RandomColor />} />
        <Route path='/userregistration' element={<UserRegistration />} />
        <Route path='/taskmanager' element={<TaskManager />} />
      </Routes>
    </>
  )
}

export default App

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/utils/Header/Header";
import Menu from "./components/utils/Menu/Menu";
import TaskList from "./components/tasks/TaskList/TaskList";
import MisDatos from "./components/myData/myData";
import MisDevoluciones from "./components/myReturns/myReturns";
import MisComunicaciones from "./components/myCommunications/myCommunications";
import MisMejoresAmigos from "./components/myBestFriends/myBestFriends";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/mis-datos" element={<MisDatos />} />
        <Route path="/mis-devoluciones" element={<MisDevoluciones />} />
        <Route path="/mis-comunicaciones" element={<MisComunicaciones />} />

        <Route path="/mis-mejores-amigos" element={<MisMejoresAmigos />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Router>
  );
};

export default App;

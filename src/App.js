import {RouterProvider } from "react-router-dom";
import { router } from "./Components/Routes/Routes";
import './App.css'

function App() {
  return (
    <div className="main-container">
     
    <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;

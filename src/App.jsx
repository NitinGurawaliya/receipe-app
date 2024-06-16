
import Homepage from "./pages/Homepage"
import Favourite from "./pages/Favourite"
import Sidebar from "./components/Sidebar"

import { Route,Routes } from "react-router-dom";

function App() {

  return (
    <div className="flex">  
    <Sidebar />
     
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route  path="/favourites" element={<Favourite />}  />
      </Routes>
     
    </div>
  );
}

export default App

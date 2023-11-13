import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';

import { useState } from 'react';
// import About from './Components/About';
import Template from './layouts/Template';
import Nav from './Components/Nav';

function App() {
  const [toggle, setToggle] = useState(false);
  const Toggle = () => {
    setToggle(!toggle)
  }
  return (
    <Template
      sidebar={<Sidebar />} 
      navbar={<Nav Toggle={Toggle}/>}
      toggle={toggle} 
      sidebarBg={"#282c34"}
    >
      <Home />
    </Template>
  );
}

export default App;

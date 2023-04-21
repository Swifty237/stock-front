import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ventes from './screens/Ventes';
import Commandes from './screens/Commandes';
import Stocks from './screens/Stocks';
import Livraisons from './screens/Livraisons';
import Clients from './screens/Clients';
import { useState } from 'react';
import { SidebarContext } from './utils/SidebarContext';
import Categories from './screens/Categories';

function App() {

  const [toggle, setToggle] = useState(true)

  return (
    <div className="App" >
      {/* <header className="App-header">

      </header> */}

      <SidebarContext.Provider value={{ toggle, setToggle }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Ventes />} />
            <Route path="/commandes" element={<Commandes />} />
            <Route path="/stocks" element={<Stocks />} />
            <Route path="/livraisons" element={<Livraisons />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="*" element={<Ventes />} />
          </Routes>
        </BrowserRouter>
      </SidebarContext.Provider>


    </div>
  );
}

export default App;

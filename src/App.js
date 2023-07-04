import './App.css'; 

import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import AboutUs from './pages/about-us';
import Service from './pages/service';
import ContactUs from './pages/contact-us';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<AboutUs />}></Route>
          <Route path='/service' element={<Service />}></Route>
          <Route path='/contact' element={<ContactUs />}></Route>
          <Route path='/contact?tiposervicio=cama-baja-liviano' element={<ContactUs />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

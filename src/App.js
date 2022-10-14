import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
// import { Layout } from './components/Layout';

// import './App.css';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className='container content'>
          <Routes>
            {/* <Route path='/' element={<Layout />}> */}
            <Route path='/'>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='contacts' element={<Contacts />} />
              {/* <Route path='blog' element={<Intro />}></Route> */}
              {/* <Route path='*' element={<Notfound />} /> */}
            </Route>
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

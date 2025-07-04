import React from 'react';
import { BrowserRouter as Router,Routes,Route } from  'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App(){
return(
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Layout>
  </Router>
)
}
export default App;
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './components/Quiz';
import Result from './pages/Result';
import Layout from './components/Layout';

function App(){
return(
  <BrowserRouter>
  <Layout>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/quiz' element={<Quiz/>}/>
    <Route path='/result'element={<Result/>}/>
  </Routes>
  </Layout>
  </BrowserRouter>
)
}
export default App;
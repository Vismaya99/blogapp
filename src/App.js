import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Addpost from './Components/Addpost';
import Viewallpost from './Components/Viewallpost';
function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' exact element={<Addpost/>}/>
   <Route path='/viewall' exact element={<Viewallpost/>}/>

   </Routes>
   </BrowserRouter>
  );
}

export default App;

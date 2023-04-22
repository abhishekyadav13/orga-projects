import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/login" element={<Login/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
         <Route path="/profile" element={<Profile/>}/>
        {/*<Route path="/tnc" element={<Tnc/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/team/ceo" element={<CEO/>}/>
        <Route path="/team/cto" element={<CTO/>}/>
        <Route path="/team/cdo" element={<CDO/>}/>
        <Route path="/team/cpo" element={<CPO/>}/>
        <Route path="/team/mentor" element={<Mentor/>}/>
        <Route path="/team/designer" element={<Designer/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

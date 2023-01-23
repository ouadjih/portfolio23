import { Error,Home,Projects,Contact, Layout } from './pages';
import {Route,Routes} from 'react-router-dom'
import './App.css';
import { Succes } from './components/Succes';
import {useTheme, useThemeUpdate } from './context/ThemeContext';
import white from './Assets/Images/white.png'
import dark from './Assets/Images/dark.png'
function App() {
  const darkTheme = useTheme()
  document.documentElement.style.setProperty('--first', darkTheme?'#AEC237':'#3B3486');
  document.documentElement.style.setProperty('--second', darkTheme?'#0F0E0E':'#FCFDF2');
  return (
    <>
    
    <div className='App'>
    
        <Layout/>
        <img  onClick={useThemeUpdate()} className='toggle' src={darkTheme?dark:white} alt="switch"/> 
        <Routes>
          <Route index element={<Home />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Succes" element={<Succes />} />
          <Route path="*" element={<Error />} />
        </Routes>
    </div>
    </>
    
  );
}

export default App;

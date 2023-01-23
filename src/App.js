import { Error,Home,Projects,Contact, Layout } from './pages';
import {Route,Routes} from 'react-router-dom'
import './App.css';
import { Succes } from './components/Succes';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <>
    <div className='App'>
     <ThemeProvider>
        <Layout/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Succes" element={<Succes />} />
          <Route path="*" element={<Error />} />
        </Routes>
    </ThemeProvider>
    </div>
    </>
    
  );
}

export default App;

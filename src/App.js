import { Error,Home,Projects,Contact, Layout } from './pages';
import {Route,Routes} from 'react-router-dom'
import './App.css';


function App() {
  return (
    <div className='App'>
    <Layout/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="Projects" element={<Projects />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </div>
  );
}

export default App;

import Router from './router';

import './modelo_global.css';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div>
      <ToastContainer autoClose={3000}/>
      <Router/>
    </div>

  );
}

export default App;

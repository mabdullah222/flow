import './App.css';
import Library from './components/Library';
import PlayerWindow from './components/PlayerWindow';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className='flex flex-row'>
    <BrowserRouter>
    <Library></Library>
    <div className='basis-3/4 grow h-[100vh]'>
      <div id="logo" className='flex flex-row justify-center items-center h-[100px]'>
        <img src={`${process.env.PUBLIC_URL}/images/logo.jpg`} alt="" className='bg-white h-[50px] ' />          
      </div>
    <Routes>
      <Route path='/songs/:id' element={<PlayerWindow/>}></Route>
    </Routes>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;

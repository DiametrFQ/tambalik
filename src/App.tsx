import { Route, Routes, Link } from 'react-router-dom';
import { EventPage } from './pages/EventPage';
import { PoliticsPage } from './pages/PoliticsPage';
import ButtomNewEvent from './components/EnentComponents/ButtomNewEvent';
import partys from './Data/partys';
function App() {
//document.querySelector('#menu').style.left = 0
//document.querySelector('#menu').style.left = '-260px'
// transition: all ease 760ms;
    return (
      <>
        <Link to="/politics" onClick={
          () => partys.sort((a,b) => a.par > b.par ? -1 : 1)
        }>
          <div className='absolute h-[128px] w-[20%] left-0 top-0 bg-[#9E8449]'/>
        </Link>
        <Link to="/">       
          <ButtomNewEvent />
        </Link>
        <Routes>
          <Route path='/' element={<EventPage />}> </Route>
          <Route path='/politics' element={<PoliticsPage />}> </Route>
        </Routes>
      </>
    );
}

export default App;

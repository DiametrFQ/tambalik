import { Route, Routes } from 'react-router-dom';
// import { EventPage } from './pages/EventPage';
// import { PoliticsPage } from './pages/PoliticsPage';
// import ButtomNewEvent from './components/EnentComponents/ButtomNewEvent';
import Map from './pages/Map';
// import partys from './Data/partys';
import './index.scss'
import Directions from './components/Directions';
import Trends from './pages/Trends';
import Economy from './pages/Economy';
import Quests from './pages/Quests';
import PolicySituation from './pages/PolicySituation';

function App() {
    return (
      <>
        <Directions />
        <Routes>
          <Route path='/' element={<Map />} />
          <Route path='/policy-situation' element={<PolicySituation />} />
          <Route path='/economy' element={<Economy />} />
          {/* <Route path='/foreign-policy' element={<Voider />} /> */}
          <Route path='/tasks' element={<Quests />} />
          <Route path='/trends' element={<Trends />} />
        </Routes>
      </>
    );
}

export default App;

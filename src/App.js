// eslint-disable-next-line no-unused-vars
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import AddMeetings from './pages/AddMeeting';
import Navigation from './components/Navigation';
function App() {
  return (
      <div className="App">


        <Navigation />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/add' element={<AddMeetings />} />
        </Routes>



      </div>
  );
}

export default App;
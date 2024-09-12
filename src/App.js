import './App.css';
import RoadMap from './components/home/RoadMap';
import Tokenomics from './components/home/Tokenomics';
import Layer from './components/home/Layer';
import Layer2 from './components/home/Layer2';

function App() {
  return (
    <div className='max-w-[1920px] mx-auto'>
      <Tokenomics />
      <Layer />
      <RoadMap />
      <Layer2 />

    </div>
  );
}

export default App;

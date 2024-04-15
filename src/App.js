import './App.css';
import TrafficLights from './components/TrafficLights';

const config = {
  red: {
    backgroundColor: 'red',
    duration: 4000,
    next: 'green'
  },
  green: {
    backgroundColor: 'green',
    duration: 3000,
    next: 'yellow'
  },
  yellow: {
    backgroundColor: 'yellow',
    duration: 2000,
    next: 'red'
  }
}

function App() {
  return (
    <div className="wrapper">
      <TrafficLights config={config}/>
      <TrafficLights config={config} layout='horizontal'/>
    </div>
  );
}

export default App;
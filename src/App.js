import logo from './logo.svg';
import './App.css';
import Layout from './components/layout/Layout';
import Chart from './components/chart/Chart'
import { useState } from 'react';
import { BubblesortStrategy } from './strategies/BubbleSort.strategy';

function App() {
  const [bars, setBars] = useState([4, 3, 7, 2, 67, 9, 0, 45, 34, 12, 46, 32, 23]);

  const algoMaps = new Map([
    [1, BubblesortStrategy]
  ]);

  const execute = function (algorithm) {
    if (algoMaps.has(algorithm)) {
      algoMaps.get(algorithm).execute(bars, setBars);
    }
  };

  return (
    <div className='App'>
      <Layout executeSearch={execute}>
        <Chart bars={bars}></Chart>
      </Layout>
    </div>
  );
}

export default App;

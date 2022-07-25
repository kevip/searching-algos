import './App.css';
import Layout from './components/layout/Layout';
import Chart from './components/chart/Chart'
import { useState } from 'react';
import { BubblesortStrategy } from './strategies/BubbleSort.strategy';

function App() {
  const [bars, setBars] = useState([
    { height: 4, class: 'bar'},
    { height: 3, class: 'bar'},
    { height: 7, class: 'bar'},
    { height: 2, class: 'bar'},
    { height: 67, class: 'bar'},
    { height: 9, class: 'bar'},
    { height: 0, class: 'bar'},
    { height: 45, class: 'bar'},
    { height: 34, class: 'bar'},
    { height: 12, class: 'bar'},
    { height: 46, class: 'bar'},
    { height: 32, class: 'bar'},
    { height: 23, class: 'bar'},
    { height: 39, class: 'bar'},
    { height: 17, class: 'bar'},
    { height: 27, class: 'bar'},
    { height: 57, class: 'bar'}
  ]);

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

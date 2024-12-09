import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App


//task 4
//stores fetched data
const [chartData, setChartData] = useState(null);
//loads data from json file and updates fetched data
useEffect(() => {
  fetch('/financial_data.json')
    .then((response) => response.json())
    .then((data) => setChartData(data));
}, []);
//displays loading messages with data is being fetched
if (!chartData) {
  return <div>Loading...</div>;
}
//render each chart component and title of app
return (
  <div style={{ textAlign: 'center' }}>
    <h1>dynamic chart dashboard</h1>
    <BarChart data={chartData} />
    <LineChart data={chartData} />
    <ScatterChart data={chartData} />
    <BubbleChart data={chartData} />
  </div>
);
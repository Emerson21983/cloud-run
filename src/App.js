import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import CounterApp from './Components/CounterApp';

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count, "Desde componente App")
  }, [count])
  

  return (
    <div className="App">
      <CounterApp nombre="Emerson" numero={count} funcion={setCount} />
    </div>
  );
}

export default App;

import { useState } from 'react';
import AddEmployee from './components/AddEmployee';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <AddEmployee/>
    </>
  )
}

export default App

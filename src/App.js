import { useState } from 'react'

function App() {
  const [data, setData] = useState(null)
  
  fetch("http://localhost:4000/products")
  .then(response => response.json())
  .then(data => setData(data))

  return (
    <>
    {JSON.stringify(data)}
    </>
  );
}

export default App;

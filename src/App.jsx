
import { Suspense } from 'react';
import './App.css'
import Bottles from './Components/Bottles/Bottles';

const bottlesPromise=fetch("./bottles.json").then(res=>res.json());


function App() {
  

  return (
    <>
      <h2>Awesome Bottles Are Here</h2>
      <Suspense fallback={<p>All Bottles Are Loading...</p>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  )
}

export default App

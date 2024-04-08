import { useEffect } from 'react';
import './App.css';

function App() {
  // Passing an empty array for the second param, tells React effect doesn't depend on anything
  // This way it will never needs to re-run
  // Equivalent to componentDidMount
  useEffect(() => {
    document.title = '(NEW TITLE HERE)';
  }, []);


  return (
    <div className="App">
    </div>
  );
}

export default App;

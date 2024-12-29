import { useEffect, useState } from 'react';

import MainPage from './pages/mainPage/MainPage.jsx';
import '../src/app.css'

function App() {
  const [ isFirstVisit, setIsFirstVisit ] = useState(true);

  useEffect(() => {
    const isVisited = localStorage.getItem("is-visited");

    if (isVisited)
      setIsFirstVisit(false);
  }, []);

  const getStarted = () => {
    setIsFirstVisit(false);
    localStorage.setItem("is-visited", true);
  };

  return( 
    <div className="App">
      <MainPage></MainPage>
    </div>
  );
}

export default App;

import Header from './Header';
import Card from './Card';
import { useState } from 'react';

function App() {
  const [checked, setChecked] = useState(false);
  const changeStyleHandler = () => {
    setChecked(!checked);
  }
  const setClass = checked ? 'card-new-style' : 'card';
  return (
    <div className="App">
      <Header />
      <Card 
        caption="Caption" 
        text="Text..." 
        onChange={changeStyleHandler} 
        class_Name={setClass}
      />
    </div>
  );
}

export default App;

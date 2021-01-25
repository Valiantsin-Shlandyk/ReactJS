import Header from './Header';
import Card from './Card';
import { useState } from 'react';

function App() {
  const [checked, setChecked] = useState(false);
  const changeStyleHandler = () => {
    setChecked(!checked);
  }
  return (
    <div className="App">
      <Header />
      <Card 
        caption="Caption" 
        text="Text..." 
        onChange={changeStyleHandler}
        checked={checked}
      />
    </div>
  );
}

export default App;

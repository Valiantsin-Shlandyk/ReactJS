import Header from './Header';
import Card from './Card';
import { useState } from 'react';

function App() {
  const cards = [
    {headerData: 'Caption 1', bodyData: 'text 1', id: 1},
    {headerData: 'Caption 2', bodyData: 'text 2', id: 2},
    {headerData: 'Caption 3', bodyData: 'text 3', id: 3},
    {headerData: 'Caption 4', bodyData: 'text 4', id: 4},
    {headerData: 'Caption 5', bodyData: 'text 5', id: 5},
    {headerData: 'Caption 6', bodyData: 'text 6', id: 6},
    {headerData: 'Caption 7', bodyData: 'text 7', id: 7},
    {headerData: 'Caption 8', bodyData: 'text 8', id: 8}
  ]

  const [readMode, setReadMode] = useState(false);

  const readModeHandler = () => {
    setReadMode(!readMode);
  }

  const renderCards = () => {
    return cards.map(item => {
      return <Card 
              headerData={item.headerData} 
              bodyData={item.bodyData} 
              readMode={readMode}
              key={item.id}
             />
    });
  }

  const layoutReadModeBtn = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '30px',
    top: '-25px'
  }

  return (
    <div className="App">
      <Header />
      <div className='container' style={{'position': 'relative'}}>
        <div className='toggleReadMode' style={layoutReadModeBtn}>
         <input type="checkbox" onChange={readModeHandler}/>
         <p style={{color: '#25b618', marginLeft: '10px'}}>Only view</p>
        </div>
        <div className='cards' style={{'marginTop':' 10px'}}>
          {renderCards()}
        </div>
      </div>
    </div>
  );
}

export default App;

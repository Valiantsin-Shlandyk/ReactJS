import Header from './Header';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Header />
      <Card headerData='Caption' bodyData='Some interesting text'/>
    </div>
  );
}

export default App;

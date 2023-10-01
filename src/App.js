import './App.css';
import List_Item from './Components/List_Item/List_Item.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        ToDo or Not ToDo
      </header>
      <main>
        <List_Item task = "Pick Up Dry Cleaning"  />
        <List_Item task = "Mow the lawn"  />
      </main>
    </div>
  );
}

export default App;

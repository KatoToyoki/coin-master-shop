import logo from './logo.svg';
import './App.css';
import GetDatas from './backend/databaseCtl/getData';
import { AddItem, getCustomerCount, GetItemOrFalse, GetNotSoldItems, ItemSold } from './function';
import SetCoin from './backend/databaseCtl/setCoin';

function App() {
  let data = ItemSold(0);



  return (
    <div className="App">
      {Object.entries(data).map(
        ([key, value]) => <p>{key}: {value}</p>
      )}
      <SetCoin />
    </div>
  );
}

export default App;

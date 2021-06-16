import {
  Switch, Route, BrowserRouter,
} from 'react-router-dom';
import StockCatalogue from './components/StockCatalogue';
import Company from './components/Company';

function App() {
  return (
    <BrowserRouter className="App">
      <Switch>
        <Route path="/" component={StockCatalogue} exact />
        <Route path="/:ticker" component={Company} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

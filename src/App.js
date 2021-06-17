import {
  Switch, Route, BrowserRouter,
} from 'react-router-dom';
import StockCatalogue from './containers/StockCatalogue';
import Company from './containers/Company';

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

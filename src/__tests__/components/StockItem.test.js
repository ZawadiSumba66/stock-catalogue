import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../store';
import StockItem from '../../components/CategoryFilter';

it('matches the stock item snapshot', () => {
  const tree = renderer.create(<Provider store={store}><StockItem /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});

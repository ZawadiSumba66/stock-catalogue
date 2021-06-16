import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import StockCatalogue from '../../components/StockCatalogue';
import store from '../../store';

configure({ adapter: new Adapter() });

it('matches the stock catalogue snapshot', () => {
  const tree = renderer.create(<Provider store={store}><StockCatalogue /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('contains the <CategoryFilter/> component', () => {
  const component = shallow(<Provider store={store}><StockCatalogue /></Provider>);
  expect(component.find('CategoryFilter')).toBeTruthy();
});

it('renders loading before items are displayed', () => {
  const { getByTestId } = render(<Provider store={store}><StockCatalogue /></Provider>);
  expect(getByTestId('stock-catalogue')).toHaveTextContent('Please wait...');
});

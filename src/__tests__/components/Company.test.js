import { Provider } from 'react-redux';
import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import store from '../../store';
import Company from '../../components/Company';

configure({ adapter: new Adapter() });
let container;

beforeEach(() => {
  container = shallow(<Provider store={store}><Company /></Provider>);
});

it('contains price', () => {
  expect(container.find('Price')).toBeTruthy();
});

it('contains Country', () => {
  expect(container.find('Company')).toBeTruthy();
});

it('contains Exchange', () => {
  expect(container.find('Exchange')).toBeTruthy();
});

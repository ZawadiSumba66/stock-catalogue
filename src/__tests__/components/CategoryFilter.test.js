import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import CategoryFilter from '../../components/CategoryFilter';

configure({ adapter: new Adapter() });

it('contains filter Stock', () => {
  const component = shallow(<CategoryFilter />);
  expect(component.find('Filter Stock')).toBeTruthy();
});

it('matches the category filter snapshot', () => {
  const tree = renderer.create(<CategoryFilter />).toJSON();
  expect(tree).toMatchSnapshot();
});

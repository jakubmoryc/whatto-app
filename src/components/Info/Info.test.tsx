import React from 'react';
import ReactDOM from 'react-dom';
import Info from './Info'
import { shallow } from 'enzyme';

// import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// Enzyme.configure({ adapter: new Adapter() });

describe('<Info/>', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<Info />);
      });

    it('renders two <i> elements', () => {
      const wrapper = shallow(<Info />);
      expect(wrapper.find('i').length).toEqual(2)
    })
})
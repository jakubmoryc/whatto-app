import React from 'react';
import ReactDOM from 'react-dom';
import Results from './Results'
import { shallow } from 'enzyme';

describe('<Results/>', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<Results/>)
      });
})
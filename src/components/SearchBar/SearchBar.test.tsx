import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar'
import { shallow } from 'enzyme';

describe('<SearchBar/>', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<SearchBar />)
      });
    it('renders .search-bar element', () => {
      const wrapper = shallow(<SearchBar />)
      expect(wrapper.contains('.search-bar'))
    })
    it('renders .search-bar with an input and an i element', () => {
      const wrapper = shallow(<SearchBar />)
      expect(wrapper.find('.search-bar').contains([<input/>, <i></i>]))
    })
})
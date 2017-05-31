import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import {shallow} from 'enzyme';

describe('Test suite for task1', () => {
  it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
  it('shallow render', () => {
    shallow(<App/>);
});   
  
})

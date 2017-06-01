import React from 'react';
import {shallow } from 'enzyme';
import Button from '../Button.js';
import App from '../App.js';

describe('Button Component unit test', () =>{
    it('render Button Component', () =>{
        shallow(<Button/>);
    })
    it('find buttonClass', () =>{
        const wrapper=shallow(<Button/>);
        expect(wrapper.find('button').hasClass('buttonClass')).toBe(true);
    })
    it('simulate button click', () =>{
        const wrapper=shallow(<Button />);
        wrapper.find('button').simulate('click');
    })
   
})
    
    
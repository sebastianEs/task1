import React from 'react';
import {shallow, mount} from 'enzyme';
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
    it('simulate button click, clear inputs', () =>{
        const wrapper=mount(<App />);
        wrapper.find('button').simulate('click', {
            target: {
                className: 'buttonClass'
            },
            type: 'click'
        });
        let actual =wrapper.state('name')

        let expected ='';
        expect(actual).toBe(expected);
        
    })
   
})
    
    
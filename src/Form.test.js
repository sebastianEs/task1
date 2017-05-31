import React from 'react';
import {shallow, mount} from 'enzyme';
import Form from './Form.js';
import App from './App.js';

describe('Form component test suite', () => {
    
    test('Checking if Form exists', () => {
        shallow(<App />);
    })
    test('render form, state.name=""', () => {
        let wrapper = mount(<App/>);
        let actual = wrapper.state('name');
        let expected =('');
        expect(actual).toBe(expected);
    })   
        
        
    test('user can change state.name', () => {
        const input= 'Sebastian'
        let wrapper = mount(<App/>);
        wrapper.find('input.form-name').simulate('change', {
            target: {
                value: input,
                name: 'name'
            },
            type: 'change'
        
        });
        let actual = wrapper.state('name');
        expect(actual).toBe(input);
    })
        
        
    test('user can change state.email', () =>{
        const inp ='myEmail@gmail.com';
        let wrapper = mount(<App />);
        wrapper.find('input.form-email').simulate('change', {
            target: {
                value: inp,
                name: 'email'
            }, 
            type: 'change'
        })
        let actual = wrapper.state('email');
        expect(actual).toBe(inp);
    })
        
});
    
import React from 'react';
import {shallow} from 'enzyme';
import Form from './Form.js';

describe('Form component test suite', () => {
    
    test('Checking if Form exists', () => {
        shallow(<Form />);
    })
    test('render form, state.name=""', () => {
        let wrapper = shallow(<Form/>);
        let actual = wrapper.state('name');
        let expected =('');
        expect(actual).toBe(expected);
    })   
    test('user can change state.name', () => {
        const input= 'Sebastian'
        let wrapper = shallow(<Form/>);
        console.log(wrapper.find('.form-name').length)
        wrapper.find('.form-name').first().simulate('change', {
            target: {
                value: input,
                name: 'name'
            },
            type: 'change'
        
        });
        let actual = wrapper.state('name');
        console.log(wrapper.state);
        expect(actual).toBe(input);
    })
        
});
    //  skriv test för Email 
import React from 'react';
import {shallow} from 'enzyme';
import Form from './Form.js';

describe('Form component test suite', () => {
    
    test('Checking if Form exists', () => {
        shallow(<Form />);
    })
    test('expect Form to have classname form', () => {
        expect(shallow(<Form/>).is('.form')).toBe(true);
    })
})
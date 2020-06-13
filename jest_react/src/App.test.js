import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import { shallow } from 'enzyme';

describe('Counter Testing', () => {

    //Shalow = "See" the component itself. not the childrens.
    //Mount = "See" the component itself and the childrens.

    let wrapper;
    beforeEach(() => {
        //Shallow create an instance of your component.
        wrapper = shallow(<App />);
    })

    test('Render the title of counter', () => {

        expect(wrapper.find('h1').text()).toContain('This is counter app');

    });

    test('render a button with text of `increment` ', () => {
       
        expect(wrapper.find('#increment-btn').text()).toBe('increment');

    })

    test('render the initial value of state in a div', () => {

        expect(wrapper.find('#counter-value').text()).toBe("0")

    })  

    test('render the click event of increment button and increment counter value', () => {
        wrapper.find('#increment-btn').simulate('click');
        expect(wrapper.find('#counter-value').text()).toBe("1")
    })
    
    test('render the click event of decrement button and decrement counter value', () => {
        wrapper.find('#increment-btn').simulate('click');
        expect(wrapper.find('#counter-value').text()).toBe("1")
        wrapper.find('#decrement-btn').simulate('click');
        expect(wrapper.find('#counter-value').text()).toBe("0")
    })

})  


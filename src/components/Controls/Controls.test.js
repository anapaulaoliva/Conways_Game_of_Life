import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls';

//First mock test cases
describe('test suite for controls components -', () => {
    test('description that helps to understand how the component works', () => {
        const handlers = { simulate: jest.fn(), random: jest.fn(), clear: jest.fn() }
        const { container } = render( <Controls handlers={ handlers }/> );
        expect(container.querySelector(".fa-play")).toBeInTheDocument();
    });  

    test('description that helps to understand how the component works', () => {
        const handlers = { simulate: jest.fn(), random: jest.fn(), clear: jest.fn() }
        const { container } = render( <Controls handlers={ handlers }/> );
        const playButton = container.querySelector(".fa-play");
        fireEvent.click(playButton);
        expect(container.querySelector(".fa-pause")).toBeInTheDocument();
    });  

    test('description that helps to understand how the component works', () => {
        const handlers = { simulate: jest.fn(), random: jest.fn(), clear: jest.fn() }
        const { container } = render( <Controls handlers={ handlers }/> );
        const playButton = container.querySelector(".fa-play");
        fireEvent.click(playButton);
        expect(handlers.simulate).toHaveBeenCalled();
    });
});
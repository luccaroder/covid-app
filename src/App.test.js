import React from 'react';
import { render } from '@testing-library/react';
import App from 'App';

jest.mock('components/covid/Monitor', () => () => 'Monitor') 

test('renders learn react link', () => {
    const { container } = render(<App/>);
    expect(container.innerHTML).toEqual('<div class="App">Monitor</div>');
});

import React from 'react';
import App from 'App';

afterEach(cleanup)

jest.mock('components/covid/Monitor', () => 'mock-monitor');

test('renders App react component', () => {
    const { asFragment } = render(<App />)
    expect(asFragment(<App />)).toMatchSnapshot()
});

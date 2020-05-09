import React from 'react';
import Monitor from 'components/covid/Monitor'

afterEach(cleanup)

jest.mock('components/common/CommonDate', () => () => 'mock-common-date');
jest.mock('components/covid/LineChart', () => () => 'mock-line-chart');

test('renders Monitor react component', () => {
    const { asFragment } = render(<Monitor/>);
    expect(asFragment(<Monitor/>)).toMatchSnapshot();
});

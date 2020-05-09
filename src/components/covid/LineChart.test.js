import React from 'react';
import LineChart from 'components/covid/LineChart'
const chartInformation = [{ x: '01:00', y: '2000' }]

jest.mock('@nivo/line', () => ({ ResponsiveLine: 'responsive-line'}))

afterEach(cleanup)

test('renders LineChart react component', () => {
    const { asFragment } = render(<LineChart chartInformation={chartInformation}/>);
    expect(asFragment(<LineChart chartInformation={chartInformation}/>)).toMatchSnapshot();
});

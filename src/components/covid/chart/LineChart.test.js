import React from 'react';
import { render } from '@testing-library/react';
import LineChart from 'components/covid/chart/LineChart'
const chartInformation = [{ x: '01:00', y: '2000' }]

jest.mock('@nivo/line', () => ({ ResponsiveLine: 'responsive-line'}))

test('renders learn react link', () => {
    const { container } = render(<LineChart chartInformation={chartInformation}/>);
    expect(container.innerHTML).toEqual('<div class="App">Monitor</div>');
});

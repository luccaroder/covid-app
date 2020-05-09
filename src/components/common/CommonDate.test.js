import React from 'react';
import CommonDate from 'components/common/CommonDate'

const selectedDate = '03/03/2011'
afterEach(cleanup)

test('renders CommonDate react component', () => {
    const { asFragment } = render(<CommonDate selectedDate={selectedDate}/>);
    expect(asFragment(<CommonDate selectedDate={selectedDate}/>)).toMatchSnapshot();
});

test('CommonDate must be a correc property selectedDate', () => {
    const { container } = render(<CommonDate selectedDate={selectedDate}/>);
    expect(container.querySelector('input').value).toEqual(selectedDate);
});

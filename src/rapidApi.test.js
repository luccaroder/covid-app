import httpClient from 'rapidApi';

afterEach(cleanup)

test('renders App react component', () => {
    expect(httpClient.defaults.baseURL).toEqual('https://coronavirus-monitor.p.rapidapi.com/coronavirus');
    expect(httpClient.defaults.headers).toMatchObject({'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com'});
});

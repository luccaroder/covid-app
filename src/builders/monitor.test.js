import apiMonitorResponse from 'fixtures/builders/api/monitor.json'
import monitorResponse from 'fixtures/builders/monitor.json'
import { buildCovidInformation } from './monitor';

test('builder chart information .buildCovidInformation', () => {
  expect(buildCovidInformation(apiMonitorResponse)).toEqual(monitorResponse)
});
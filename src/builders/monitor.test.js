import apiMonitorResponse from 'builders/fixtures/api/monitor.json'
import monitorResponse from 'builders/fixtures/monitor.json'
import { BuildTotalInformation } from 'builders/monitor';

test('builder chart information .buildCovidInformation', () => {
  expect(BuildTotalInformation(apiMonitorResponse)).toEqual(monitorResponse)
});
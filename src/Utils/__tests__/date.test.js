// @flow

import { getTime, getDate } from '../date';

test('getTime gives correct time', () => {
  const time = getTime('2017-09-07T04:51:38.160Z');
  expect(time).toBe('07:51');
});

test('getDate gives correct date', () => {
  const date = getDate('2017-09-07T04:51:38.160Z');
  expect(date).toBe('04-August-2017');
});

import test from 'ava';
import {DateTime} from 'luxon';
import {getMothersDay, isMothersDay} from '../lib/index.js';

test('Check some mother\'s days', t => {
	t.is(getMothersDay(2024).toISODate(), '2024-05-12');
	t.is(getMothersDay(2044).toISODate(), '2044-05-08');
	t.is(getMothersDay(2045).toISODate(), '2045-05-14');
	t.is(getMothersDay(2099).toISODate(), '2099-05-10');
});

test('Check if a date is mother\'s day', t => {
	t.true(isMothersDay(DateTime.fromISO('2024-05-12')));
	t.true(isMothersDay(DateTime.fromISO('2024-05-12').setLocale('cs')));

	t.false(isMothersDay(DateTime.fromISO('2044-05-07')));
	t.true(isMothersDay(DateTime.fromISO('2044-05-08')));
	t.false(isMothersDay(DateTime.fromISO('2044-05-09')));
});

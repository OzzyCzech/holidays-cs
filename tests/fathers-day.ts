import test from 'ava';
import {getFathersDay, isFatherDay} from '../lib/fathers-day';
import {DateTime} from 'luxon';

test('Check some father\'s days', t => {
	t.is(getFathersDay(2044).toISODate(), '2044-06-19');
	t.is(getFathersDay(2045).toISODate(), '2045-06-18');
	t.is(getFathersDay(2099).toISODate(), '2099-06-21');
});

test('Check if a date is father\'s day', t => {
	t.false(isFatherDay(DateTime.fromISO('2044-06-18')));
	t.true(isFatherDay(DateTime.fromISO('2044-06-19')));
	t.false(isFatherDay(DateTime.fromISO('2044-06-20')));
});
import test from 'ava';

import {getPublicHoliday} from "../lib/holidays.js";
import {DateTime} from 'luxon';

test('Selected czech holidays', t => {
	t.is(getPublicHoliday(DateTime.fromISO('2024-01-01')), 'Den obnovy samostatného českého státu');
	t.is(getPublicHoliday(DateTime.fromISO('2024-11-17')), 'Den boje za svobodu a demokracii (1939 a 1989)');
	t.is(getPublicHoliday(DateTime.fromISO('2024-12-26')), 'Druhý svátek vánoční');
});

test('Easter Monday is holiday', t => {
	t.is(getPublicHoliday(DateTime.fromISO('2024-04-01')), 'Velikonoční pondělí');
})

test('Good Friday is holiday', t => {
	t.is(getPublicHoliday(DateTime.fromISO('2024-03-29')), 'Velký pátek');
});

test('Check that some days are not holidays', t => {
	t.is(getPublicHoliday(DateTime.fromISO('2024-03-28')), undefined);
	t.is(getPublicHoliday(DateTime.fromISO('2023-04-01')), undefined);
})
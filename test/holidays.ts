import test from 'ava';

import {getHoliday} from "../lib/holidays.js";
import {DateTime} from 'luxon';

test('Selected czech holidays', t => {
	t.is(getHoliday(DateTime.fromISO('2024-01-01')), 'Den obnovy samostatného českého státu');
	t.is(getHoliday(DateTime.fromISO('2024-11-17')), 'Den boje za svobodu a demokracii (1939 a 1989)');
	t.is(getHoliday(DateTime.fromISO('2024-12-26')), 'Druhý svátek vánoční');
});
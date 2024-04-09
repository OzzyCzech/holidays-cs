import test from 'ava';

import {getHoliday} from "../lib/get-holiday";
import {DateTime} from 'luxon';

test('Get some holidays', t => {

	const date = DateTime.fromISO('2024-12-24')
	t.is(getHoliday(date)[0], "Štědrý den");
});
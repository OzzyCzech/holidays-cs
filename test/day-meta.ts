import test from 'ava';
import {getDayMeta} from "../lib/index.js";
import {DateTime} from "luxon";


test("Christmas Eve in 2024", t => {
	const meta = getDayMeta(DateTime.fromISO('2024-12-24'));
	t.is(meta.publicHoliday, 'Štědrý den');

	t.true(meta.shops.areOpen);
	t.is(meta.shops.status, 'otevřeno do 12:00');
});

test('Easter Monday in 2024', t => {
	const meta = getDayMeta(DateTime.fromISO('2024-04-01'));


	if (meta.easter) {
		t.is(meta.easter.name, 'Velikonoční pondělí');
		t.is(meta.easter.isGoodFriday, false);
		t.is(meta.easter.isHolySaturday, false);
		t.is(meta.easter.isHolySunday, false);
		t.is(meta.easter.isEasterMonday, true);
	}
	t.is(meta.publicHoliday, 'Velikonoční pondělí');
	t.false(meta.shops.areOpen);
});
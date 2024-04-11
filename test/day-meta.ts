import test from 'ava';
import {getDayMeta} from "../lib/index.js";
import {DateTime} from "luxon";


test("Christmas Eve in 2024", t => {
	t.deepEqual(getDayMeta(DateTime.fromISO('2024-12-24')),
		{
			names: ['Adam', 'Eva'],
			easter: undefined,
			isSignificantDay: false,
			significantDay: undefined,
			isPublicHoliday: true,
			publicHoliday: 'Štědrý den',
			shops: {areOpen: true, status: 'otevřeno do 12:00'}
		}
	);
});

test('Easter Monday in 2024', t => {
	t.deepEqual(getDayMeta(DateTime.fromISO('2024-04-01')),
		{
			names: ['Hugo'],
			easter: {
				name: 'Velikonoční pondělí',
				isGoodFriday: false,
				isHolySaturday: false,
				isHolySunday: false,
				isEasterMonday: true
			},
			isSignificantDay: false,
			significantDay: undefined,
			isPublicHoliday: true,
			publicHoliday: 'Velikonoční pondělí',
			shops: {areOpen: false, status: 'zavřeno'}
		});
});
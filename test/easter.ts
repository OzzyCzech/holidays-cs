import test from 'ava';
import {DateTime} from 'luxon';
import {getEasterDayName, getEasterSunday, isHolyWeek} from '../lib/index.js';

test('Easter date for 10 years', t => {
	t.is(getEasterSunday(2024).toISODate(), '2024-03-31');
	t.is(getEasterSunday(2025).toISODate(), '2025-04-20');
	t.is(getEasterSunday(2026).toISODate(), '2026-04-05');
	t.is(getEasterSunday(2027).toISODate(), '2027-03-28');
	t.is(getEasterSunday(2028).toISODate(), '2028-04-16');
	t.is(getEasterSunday(2029).toISODate(), '2029-04-01');
	t.is(getEasterSunday(2030).toISODate(), '2030-04-21');
	t.is(getEasterSunday(2031).toISODate(), '2031-04-13');
	t.is(getEasterSunday(2032).toISODate(), '2032-03-28');
	t.is(getEasterSunday(2033).toISODate(), '2033-04-17');
});

test('Easter date for 100 years', t => {
	// 2105 and above
	t.is(getEasterSunday(2105).toISODate(), '2105-04-05');
	t.is(getEasterSunday(2106).toISODate(), '2106-04-18');

	// 2200 and above
	t.is(getEasterSunday(2225).toISODate(), '2225-03-27');
	t.is(getEasterSunday(2299).toISODate(), '2299-04-16');
});

test('If day is part of Holy Week', t => {
	// 2024 Holy Week
	t.false(isHolyWeek(DateTime.fromISO('2024-03-23')));
	t.true(isHolyWeek(DateTime.fromISO('2024-03-24'))); // Palm Sunday
	t.true(isHolyWeek(DateTime.fromISO('2024-03-25')));
	t.true(isHolyWeek(DateTime.fromISO('2024-03-26')));
	t.true(isHolyWeek(DateTime.fromISO('2024-03-27')));
	t.true(isHolyWeek(DateTime.fromISO('2024-03-28')));
	t.true(isHolyWeek(DateTime.fromISO('2024-03-29')));
	t.true(isHolyWeek(DateTime.fromISO('2024-03-30')));
	t.true(isHolyWeek(DateTime.fromISO('2024-03-31')));
	t.true(isHolyWeek(DateTime.fromISO('2024-04-01'))); // Easter Monday
	t.false(isHolyWeek(DateTime.fromISO('2024-04-02')));

	// Not part of Holy Week
	t.false(isHolyWeek(DateTime.fromISO('2024-12-24')));
	t.false(isHolyWeek(DateTime.fromISO('2024-12-25')));
	t.false(isHolyWeek(DateTime.fromISO('2024-12-26')));
	t.false(isHolyWeek(DateTime.fromISO('2024-12-31')));
	t.false(isHolyWeek(DateTime.fromISO('2025-01-01')));
});

test('Get Holy Week days names in 2024', t => {
	// Before Holy Week
	t.falsy(getEasterDayName(DateTime.fromISO('2025-03-23')));

	// 2024 Holy Week
	t.is(getEasterDayName(DateTime.fromISO('2024-03-24')), 'Květná neděle');
	t.is(getEasterDayName(DateTime.fromISO('2024-03-25')), 'Modré pondělí');
	t.is(getEasterDayName(DateTime.fromISO('2024-03-26')), 'Šedivé úterý');
	t.is(getEasterDayName(DateTime.fromISO('2024-03-27')), 'Škaredá středa');
	t.is(getEasterDayName(DateTime.fromISO('2024-03-28')), 'Zelený čtvrtek');
	t.is(getEasterDayName(DateTime.fromISO('2024-03-29')), 'Velký pátek');
	t.is(getEasterDayName(DateTime.fromISO('2024-03-30')), 'Bílá sobota');
	t.is(getEasterDayName(DateTime.fromISO('2024-03-31')), 'Velikonoční neděle');
	t.is(getEasterDayName(DateTime.fromISO('2024-04-01')), 'Velikonoční pondělí');

	// After Holy Week
	t.falsy(getEasterDayName(DateTime.fromISO('2025-04-02')));
});

test('Get Holy Week days names in 2025', t => {
	// Before Holy Week
	t.falsy(getEasterDayName(DateTime.fromISO('2025-03-12')));

	// 2025 Holy Week
	t.is(getEasterDayName(DateTime.fromISO('2025-04-13')), 'Květná neděle');
	t.is(getEasterDayName(DateTime.fromISO('2025-04-14')), 'Modré pondělí');
	t.is(getEasterDayName(DateTime.fromISO('2025-04-15')), 'Šedivé úterý');
	t.is(getEasterDayName(DateTime.fromISO('2025-04-16')), 'Škaredá středa');
	t.is(getEasterDayName(DateTime.fromISO('2025-04-17')), 'Zelený čtvrtek');
	t.is(getEasterDayName(DateTime.fromISO('2025-04-18')), 'Velký pátek');
	t.is(getEasterDayName(DateTime.fromISO('2025-04-19')), 'Bílá sobota');
	t.is(getEasterDayName(DateTime.fromISO('2025-04-20')), 'Velikonoční neděle');
	t.is(getEasterDayName(DateTime.fromISO('2025-04-21')), 'Velikonoční pondělí');

	// After Holy Week
	t.falsy(getEasterDayName(DateTime.fromISO('2025-04-22')));
});
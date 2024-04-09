import test from 'ava';
import {DateTime} from "luxon";
import {getShopStatus, isOpen} from "../lib/shops.js";

test('Check shops open/close status', t => {
	t.is(getShopStatus(DateTime.fromISO('2024-12-25')), 'zavřeno');
	t.is(getShopStatus(DateTime.fromISO('2024-12-26')), 'zavřeno');
	t.is(getShopStatus(DateTime.fromISO('2024-05-01')), 'otevřeno');
});

test('Check if Easter Monday is closed and Friday is not', t => {
	t.is(getShopStatus(DateTime.fromISO('2024-03-28')), 'otevřeno'); // Friday
	t.is(getShopStatus(DateTime.fromISO('2024-04-01')), 'zavřeno'); // Monday
})

test('Check if Christmas Eve is open until noon', t => {
	t.is(getShopStatus(DateTime.fromISO('2024-12-24')), 'otevřeno do 12:00');
	t.is(getShopStatus(DateTime.fromISO('2025-12-24')), 'otevřeno do 12:00');
})

test('Check if shops are open or closed', t => {
	// open days
	t.true(isOpen(DateTime.fromISO('2024-12-24'))); // Christmas Eve is open until noon
	t.true(isOpen(DateTime.fromISO('2024-05-01'))); // Labour Day
	t.true(isOpen(DateTime.fromISO('2024-11-17'))); // Struggle for Freedom and Democracy Day

	// closed days
	t.false(isOpen(DateTime.fromISO('2024-01-01')));
	t.false(isOpen(DateTime.fromISO('2024-12-26')));
});


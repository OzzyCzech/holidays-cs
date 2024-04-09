import {getDayNames, getNameDay} from "../lib/names.js";
import {DateTime} from "luxon";
import test from 'ava';


test('Check some significant names', t => {
	// 2024-10-31 is the day of Štěpánka
	t.like(getDayNames(DateTime.fromISO('2024-10-31')), ['Štěpánka']);
	t.is(getNameDay(DateTime.fromISO('2024-10-31')), 'Štěpánka');

	// 2024-01-23 is the day of Zdeněk
	t.like(getDayNames(DateTime.fromISO('2024-01-23')), ['Zdeněk']);
	t.is(getNameDay(DateTime.fromISO('2024-01-23')), 'Zdeněk');

	// 2024-12-24 is the day of Adam and Eve
	t.like(getDayNames(DateTime.fromISO('2024-12-24')), ['Adam', 'Eva']);
	t.is(getNameDay(DateTime.fromISO('2024-12-24')), 'Adam a Eva');
});

test('Check Horymír at leap year', t => {
	t.like(getDayNames(DateTime.fromISO('2024-02-29')), ['Horymír']);
	t.is(getNameDay(DateTime.fromISO('2024-02-29')), 'Horymír');
});

test('Check days without names', t => {
	t.like(getDayNames(DateTime.fromISO('2024-01-01')), []);
	t.is(getNameDay(DateTime.fromISO('2024-02-01')), '');
})
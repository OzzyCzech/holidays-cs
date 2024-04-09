import test from 'ava';
import {DateTime} from "luxon";
import {getSignificantDay, isSignificantDay} from "../lib/significant.js";

test('Check Tří králové day', t => {
	t.true(isSignificantDay(DateTime.fromISO('2020-01-06')));
	t.is(getSignificantDay(DateTime.fromISO('2020-01-06')), 'Tři králové');
});
import test from "ava";
import { DateTime } from "luxon";
import { getSignificantDay, isSignificantDay } from "../lib";

test("Check Den odchodu okupačních vojsk", (t) => {
	t.true(isSignificantDay(DateTime.fromISO("2024-06-25")));
	t.deepEqual(getSignificantDay(DateTime.fromISO("2024-06-25")), {
		name: "Den odchodu okupačních vojsk",
		description: "Odchod posledního sovětského vojáka z ČSFR",
		year: 1991,
	});
});

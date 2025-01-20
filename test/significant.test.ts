import { DateTime } from "luxon";
import { describe, expect, it } from "vitest";
import { getSignificantDay, isSignificantDay } from "../lib";

describe("Significant Day Tests", () => {
	it("Check Den odchodu okupačních vojsk", () => {
		expect(isSignificantDay(DateTime.fromISO("2024-06-25"))).toBe(true);
		expect(getSignificantDay(DateTime.fromISO("2024-06-25"))).toEqual({
			name: "Den odchodu okupačních vojsk",
			description: "Odchod posledního sovětského vojáka z ČSFR",
			year: 1991,
		});
	});
});

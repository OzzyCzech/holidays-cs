import { DateTime } from "luxon";
import { describe, expect, it } from "vitest";
import { areShopsOpen, getShopsStatus } from "../lib";

describe("Shop Status Tests", () => {
	it("Check shops open/close status", () => {
		expect(getShopsStatus(DateTime.fromISO("2024-12-25"))).toBe("zavřeno");
		expect(getShopsStatus(DateTime.fromISO("2024-12-26"))).toBe("zavřeno");
		expect(getShopsStatus(DateTime.fromISO("2024-05-01"))).toBe("otevřeno");
	});

	it("Check if Easter Monday is closed and Friday is not", () => {
		expect(getShopsStatus(DateTime.fromISO("2024-03-28"))).toBe("otevřeno"); // Friday
		expect(getShopsStatus(DateTime.fromISO("2024-04-01"))).toBe("zavřeno"); // Monday
	});

	it("Check if Christmas Eve is open until noon", () => {
		expect(getShopsStatus(DateTime.fromISO("2024-12-24"))).toBe("otevřeno do 12:00");
		expect(getShopsStatus(DateTime.fromISO("2025-12-24"))).toBe("otevřeno do 12:00");
	});

	it("Check if shops are open or closed", () => {
		// Open days
		expect(areShopsOpen(DateTime.fromISO("2024-12-24"))).toBe(true); // Christmas Eve is open until noon
		expect(areShopsOpen(DateTime.fromISO("2024-05-01"))).toBe(true); // Labour Day
		expect(areShopsOpen(DateTime.fromISO("2024-11-17"))).toBe(true); // Struggle for Freedom and Democracy Day

		// Closed days
		expect(areShopsOpen(DateTime.fromISO("2024-01-01"))).toBe(false);
		expect(areShopsOpen(DateTime.fromISO("2024-12-26"))).toBe(false);
	});
});

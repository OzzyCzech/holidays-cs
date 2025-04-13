import { DateTime } from "luxon";
import { describe, expect, it } from "vitest";
import { getPublicHoliday, getPublicHolidaysList } from "../lib";

describe("Public Holiday Tests", () => {
	it("Selected Czech holidays", () => {
		expect(getPublicHoliday(DateTime.fromISO("2024-01-01"))).toBe("Den obnovy samostatného českého státu");
		expect(getPublicHoliday(DateTime.fromISO("2024-11-17"))).toBe("Den boje za svobodu a demokracii (1939 a 1989)");
		expect(getPublicHoliday(DateTime.fromISO("2024-12-26"))).toBe("Druhý svátek vánoční");
	});

	it("Easter Monday is holiday", () => {
		expect(getPublicHoliday(DateTime.fromISO("2025-04-21"))).toBe("Velikonoční pondělí");
	});

	it("Good Friday is holiday", () => {
		expect(getPublicHoliday(DateTime.fromISO("2025-04-18"))).toBe("Velký pátek");
	});

	it("Check that some days are not holidays", () => {
		expect(getPublicHoliday(DateTime.fromISO("2024-03-28"))).toBeUndefined();
		expect(getPublicHoliday(DateTime.fromISO("2023-04-01"))).toBeUndefined();
	});

	it("Get public holidays list", () => {
		const list = getPublicHolidaysList(2025);
		expect(list.has("2025-01-01")).toBe(true); // Den obnovy samostatného českého státu
		expect(list.has("2025-11-17")).toBe(true); // Den boje za svobodu a demokracii (1939 a 1989)
		expect(list.has("2025-12-26")).toBe(true); // Druhý svátek vánoční
		expect(list.has("2025-04-21")).toBe(true); // Velikonoční pondělí
		expect(list.get("2025-05-01")).toBe("Svátek práce");
		expect(list.size).toBe(13); // Expected 13 holidays
	});
});

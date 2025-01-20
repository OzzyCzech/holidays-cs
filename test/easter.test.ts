import { DateTime } from "luxon";
import { describe, expect, it } from "vitest";
import { getEasterDayName, getEasterSunday, isHolyWeek } from "../lib";

describe("Easter Tests", () => {
	it("Easter date for 10 years", () => {
		expect(getEasterSunday(2024).toISODate()).toBe("2024-03-31");
		expect(getEasterSunday(2025).toISODate()).toBe("2025-04-20");
		expect(getEasterSunday(2026).toISODate()).toBe("2026-04-05");
		expect(getEasterSunday(2027).toISODate()).toBe("2027-03-28");
		expect(getEasterSunday(2028).toISODate()).toBe("2028-04-16");
		expect(getEasterSunday(2029).toISODate()).toBe("2029-04-01");
		expect(getEasterSunday(2030).toISODate()).toBe("2030-04-21");
		expect(getEasterSunday(2031).toISODate()).toBe("2031-04-13");
		expect(getEasterSunday(2032).toISODate()).toBe("2032-03-28");
		expect(getEasterSunday(2033).toISODate()).toBe("2033-04-17");
	});

	it("Easter date for 100 years", () => {
		expect(getEasterSunday(2105).toISODate()).toBe("2105-04-05");
		expect(getEasterSunday(2106).toISODate()).toBe("2106-04-18");
		expect(getEasterSunday(2225).toISODate()).toBe("2225-03-27");
		expect(getEasterSunday(2299).toISODate()).toBe("2299-04-16");
	});

	it("If day is part of Holy Week", () => {
		expect(isHolyWeek(DateTime.fromISO("2024-03-23"))).toBe(false);
		expect(isHolyWeek(DateTime.fromISO("2024-03-24"))).toBe(true); // Palm Sunday
		expect(isHolyWeek(DateTime.fromISO("2024-03-25"))).toBe(true);
		expect(isHolyWeek(DateTime.fromISO("2024-03-26"))).toBe(true);
		expect(isHolyWeek(DateTime.fromISO("2024-03-27"))).toBe(true);
		expect(isHolyWeek(DateTime.fromISO("2024-03-28"))).toBe(true);
		expect(isHolyWeek(DateTime.fromISO("2024-03-29"))).toBe(true);
		expect(isHolyWeek(DateTime.fromISO("2024-03-30"))).toBe(true);
		expect(isHolyWeek(DateTime.fromISO("2024-03-31"))).toBe(true);
		expect(isHolyWeek(DateTime.fromISO("2024-04-01"))).toBe(true); // Easter Monday
		expect(isHolyWeek(DateTime.fromISO("2024-04-02"))).toBe(false);

		expect(isHolyWeek(DateTime.fromISO("2024-12-24"))).toBe(false);
		expect(isHolyWeek(DateTime.fromISO("2024-12-25"))).toBe(false);
		expect(isHolyWeek(DateTime.fromISO("2024-12-26"))).toBe(false);
		expect(isHolyWeek(DateTime.fromISO("2024-12-31"))).toBe(false);
		expect(isHolyWeek(DateTime.fromISO("2025-01-01"))).toBe(false);
	});

	it("Get Holy Week days names in 2024", () => {
		expect(getEasterDayName(DateTime.fromISO("2025-03-23"))).toBeFalsy();

		expect(getEasterDayName(DateTime.fromISO("2024-03-24"))).toBe("Květná neděle");
		expect(getEasterDayName(DateTime.fromISO("2024-03-25"))).toBe("Modré pondělí");
		expect(getEasterDayName(DateTime.fromISO("2024-03-26"))).toBe("Šedivé úterý");
		expect(getEasterDayName(DateTime.fromISO("2024-03-27"))).toBe("Škaredá středa");
		expect(getEasterDayName(DateTime.fromISO("2024-03-28"))).toBe("Zelený čtvrtek");
		expect(getEasterDayName(DateTime.fromISO("2024-03-29"))).toBe("Velký pátek");
		expect(getEasterDayName(DateTime.fromISO("2024-03-30"))).toBe("Bílá sobota");
		expect(getEasterDayName(DateTime.fromISO("2024-03-31"))).toBe("Velikonoční neděle");
		expect(getEasterDayName(DateTime.fromISO("2024-04-01"))).toBe("Velikonoční pondělí");

		expect(getEasterDayName(DateTime.fromISO("2025-04-02"))).toBeFalsy();
	});

	it("Get Holy Week days names in 2025", () => {
		expect(getEasterDayName(DateTime.fromISO("2025-03-12"))).toBeFalsy();

		expect(getEasterDayName(DateTime.fromISO("2025-04-13"))).toBe("Květná neděle");
		expect(getEasterDayName(DateTime.fromISO("2025-04-14"))).toBe("Modré pondělí");
		expect(getEasterDayName(DateTime.fromISO("2025-04-15"))).toBe("Šedivé úterý");
		expect(getEasterDayName(DateTime.fromISO("2025-04-16"))).toBe("Škaredá středa");
		expect(getEasterDayName(DateTime.fromISO("2025-04-17"))).toBe("Zelený čtvrtek");
		expect(getEasterDayName(DateTime.fromISO("2025-04-18"))).toBe("Velký pátek");
		expect(getEasterDayName(DateTime.fromISO("2025-04-19"))).toBe("Bílá sobota");
		expect(getEasterDayName(DateTime.fromISO("2025-04-20"))).toBe("Velikonoční neděle");
		expect(getEasterDayName(DateTime.fromISO("2025-04-21"))).toBe("Velikonoční pondělí");

		expect(getEasterDayName(DateTime.fromISO("2025-04-22"))).toBeFalsy();
	});
});

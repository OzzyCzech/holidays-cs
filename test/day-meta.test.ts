import { DateTime } from "luxon";
import { describe, expect, it } from "vitest";
import { getDayMeta } from "../lib";

describe("Day Metadata Tests", () => {
	it("Christmas Eve in 2024", () => {
		const meta = getDayMeta(DateTime.fromISO("2024-12-24"));
		expect(meta.publicHoliday).toBe("Štědrý den");

		expect(meta.shops.areOpen).toBe(true);
		expect(meta.shops.status).toBe("otevřeno do 12:00");
	});

	it("Easter Monday in 2024", () => {
		const meta = getDayMeta(DateTime.fromISO("2024-04-01"));

		if (meta.easter) {
			expect(meta.easter.name).toBe("Velikonoční pondělí");
			expect(meta.easter.isGoodFriday).toBe(false);
			expect(meta.easter.isHolySaturday).toBe(false);
			expect(meta.easter.ieEasterSunday).toBe(false);
			expect(meta.easter.isEasterMonday).toBe(true);
		} else {
			throw new Error("Easter Monday expected");
		}

		expect(meta.publicHoliday).toBe("Velikonoční pondělí");
		expect(meta.shops.areOpen).toBe(false);
	});

	it("Easter Sunday in 2025", () => {
		const meta = getDayMeta(DateTime.fromISO("2025-04-13"));

		if (meta.easter) {
			expect(meta.easter.name).toBe("Květná neděle");
			expect(meta.easter.isGoodFriday).toBe(false);
			expect(meta.easter.isHolySaturday).toBe(false);
			expect(meta.easter.ieEasterSunday).toBe(false);
			expect(meta.easter.isEasterMonday).toBe(false);
		} else {
			throw new Error("Easter Sunday expected");
		}

		expect(meta.shops.areOpen).toBe(true);
	});
});

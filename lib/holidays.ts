import { DateTime } from "luxon";
import { getEasterDayName, getEasterMonday, getGoodFriday, isEasterMonday, isGoodFriday } from "./easter.js";

/**
 * Zákon č. 245/2000 Sb., o státních svátcích a národních svátcích České republiky
 */
const holidays: Record<string, string> = {
	"0101": "Den obnovy samostatného českého státu",
	"0105": "Svátek práce",
	"0805": "Den vítězství (1945)",
	"0507": "Den slovanských věrozvěstů Cyrila a Metoděje",
	"0607": "Den upálení mistra Jana Husa (1415)",
	"2809": "Den české státnosti",
	"2810": "Den vzniku samostatného československého státu (1918)",
	"1711": "Den boje za svobodu a demokracii (1939 a 1989)",
	"2412": "Štědrý den",
	"2512": "První svátek vánoční",
	"2612": "Druhý svátek vánoční",
};

/**
 * Check if the given date is a holiday
 * @param date
 */
export function isPublicHoliday(date: DateTime | Date): boolean {
	date = date instanceof Date ? DateTime.fromJSDate(date) : date;
	return isEasterMonday(date) || isGoodFriday(date) || date.toFormat("ddMM") in holidays;
}

/**
 * Get the name of the holiday for the given date
 * @param date
 */
export function getPublicHoliday(date: DateTime | Date): string | undefined {
	date = date instanceof Date ? DateTime.fromJSDate(date) : date;
	if (isEasterMonday(date)) {
		return getEasterDayName(date);
	}

	if (isGoodFriday(date)) {
		return getEasterDayName(date);
	}

	return holidays[date.toFormat("ddMM")];
}

/**
 * Get a list of public holidays for the given year
 * @param year
 */
export function getPublicHolidaysList(year: number): Map<string, string> {
	const list = new Map<string, string>();
	for (const date in holidays) {
		if (Object.hasOwn(holidays, date)) {
			const key = DateTime.fromFormat(date, "ddMM").set({ year }).toISODate();
			if (key !== null) {
				list.set(key, holidays[date] ?? "");
			}
		}
	}

	const goodFriday = getGoodFriday(year);
	list.set(goodFriday.toISODate() ?? "", getEasterDayName(goodFriday) ?? "");

	const easterMonday = getEasterMonday(year);
	list.set(easterMonday.toISODate() ?? "", getEasterDayName(easterMonday) ?? "");

	return list;
}

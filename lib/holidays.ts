import {DateTime} from "luxon";
import {isEasterMonday, isGoodFriday} from "./easter.js";

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
	"2612": "Druhý svátek vánoční"
}

/**
 * Check if the given date is a holiday
 * @param date
 */
export function isPublicHoliday(date: DateTime | Date): boolean {
	date = date instanceof Date ? DateTime.fromJSDate(date) : date;
	return isEasterMonday(date) || isGoodFriday(date) || date.toFormat('ddMM') in holidays;
}

/**
 * Get the name of the holiday for the given date
 * @param date
 */
export function getPublicHoliday(date: DateTime | Date): string | undefined {
	date = date instanceof Date ? DateTime.fromJSDate(date) : date;
	if (isEasterMonday(date)) {
		return "Velikonoční pondělí";
	}

	if (isGoodFriday(date)) {
		return "Velký pátek";
	}
	return holidays[date.toFormat('ddMM')];
}
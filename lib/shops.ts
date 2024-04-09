import {DateTime} from "luxon";
import {isEasterMonday} from "./easter.js";

/**
 * List of days when the shop is closed.
 * https://cs.wikipedia.org/wiki/%C4%8Cesk%C3%BD_st%C3%A1tn%C3%AD_sv%C3%A1tek
 */
const closed: Record<string, string> = {
	"0101": "Nový rok",
	"0805": "Den vítězství",
	"2809": "Den české státnosti",
	"2810": "Den vzniku samostatného československého státu",
	"2512": "1. svátek vánoční",
	"2612": "2. svátek vánoční",
};

/**
 * Returns the shop status for the given date.
 * @param date
 */
export function getShopStatus(date: DateTime): string {
	// Easter Monday
	if (isEasterMonday(date)) {
		return "zavřeno";
	}

	// Christmas Eve
	if (date.toFormat('ddMM') === '2412') {
		return "otevřeno do 12:00";
	}

	// other closed days
	return date.toFormat('ddMM') in closed ? "zavřeno" : "otevřeno";
}

/**
 * Returns true if the given date is a shop open day.
 * @param date
 */
export function isOpen(date: DateTime): boolean {
	return getShopStatus(date).startsWith("otevřeno")
}
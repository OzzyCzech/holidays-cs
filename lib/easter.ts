import * as EasterDate from "easter-date";
import { DateTime, Interval } from "luxon";

/**
 * Returns the date of Easter Monday for a given year.
 * @param year
 */
export function getEasterMonday(year: number): DateTime {
	return DateTime.fromJSDate(EasterDate.getEasterMonday(year)).setZone("Europe/Prague").startOf("day");
}

/**
 * Returns true if the given date is Easter Monday.
 * @param date
 */
export function isEasterMonday(date: DateTime | Date): boolean {
	return EasterDate.isEasterMonday(date instanceof Date ? date : date.toJSDate());
}

/**
 * Returns the date of Easter for a given year.
 * Function is an alias for getEasterSunday() function
 * @param year
 */
export function getEaster(year: number): DateTime {
	return DateTime.fromJSDate(EasterDate.getEaster(year)).setZone("Europe/Prague").startOf("day");
}

/**
 * Returns the date of Easter for a given year.
 * @param year
 */
export function getEasterSunday(year: number): DateTime {
	return DateTime.fromJSDate(EasterDate.getEasterSunday(year)).setZone("Europe/Prague").startOf("day");
}

/**
 * Returns true if the given date is Easter Sunday.
 * @param date
 */
export function isEasterSunday(date: DateTime | Date): boolean {
	return EasterDate.isEasterSunday(date instanceof Date ? date : date.toJSDate());
}

/**
 * Returns the date of Holy Saturday for a given year.
 * @param year
 */
export function getHolySaturday(year: number): DateTime {
	return DateTime.fromJSDate(EasterDate.getHolySaturday(year)).setZone("Europe/Prague").startOf("day");
}

/**
 * Returns true if the given date is Holy Saturday.
 * @param date
 */
export function isHolySaturday(date: DateTime | Date): boolean {
	return EasterDate.isHolySaturday(date instanceof Date ? date : date.toJSDate());
}

/**
 * Returns the date of Good Friday for a given year.
 * @param year
 */
export function getGoodFriday(year: number): DateTime {
	return DateTime.fromJSDate(EasterDate.getGoodFriday(year)).setZone("Europe/Prague").startOf("day");
}

/**
 * Returns true if the given date is Good Friday.
 * @param date
 */
export function isGoodFriday(date: DateTime | Date): boolean {
	return EasterDate.isGoodFriday(date instanceof Date ? date : date.toJSDate());
}

/**
 * Return the Interval of Holly Week for a given year.
 *
 * @param year
 */
export function getHollyWeekInterval(year: number): Interval {
	const easter = getEaster(year);

	return Interval.fromDateTimes(
		easter.minus({ days: 7 }), // Palm Sunday
		easter.plus({ days: 1 }), // Easter Monday
	);
}

/**
 * Returns true if the given date is part of Holy Week.
 * @param date
 */
export function isHolyWeek(date: DateTime | Date): boolean {
	date = (date instanceof Date ? DateTime.fromJSDate(date) : date).setZone("Europe/Prague").startOf("day");
	const interval = getHollyWeekInterval(date.year);
	if (!interval.isValid) {
		return false;
	}

	return interval.start && interval.end ? interval.start <= date && date <= interval.end : false;
}

/**
 * Names of the days in Holy Week.
 */
const names: Record<string, string> = {
	"-7": "Květná neděle",
	"-6": "Modré pondělí",
	"-5": "Šedivé úterý",
	"-4": "Škaredá středa",
	"-3": "Zelený čtvrtek",
	"-2": "Velký pátek",
	"-1": "Bílá sobota",
	"0": "Velikonoční neděle",
	"1": "Velikonoční pondělí",
};

/**
 * Returns the name of the day for the given date in Holy Week.
 * @param date
 */
export function getEasterDayName(date: DateTime | Date): string | undefined {
	date = (date instanceof Date ? DateTime.fromJSDate(date) : date).setZone("Europe/Prague").startOf("day");
	if (isHolyWeek(date)) {
		const easter = getEaster(date.year).setZone("Europe/Prague").startOf("day");
		const index = date.diff(easter, "days").as("days");
		return names[index] ?? undefined;
	}

	return undefined;
}

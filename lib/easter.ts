import {DateTime, Interval} from 'luxon';

/**
 * Returns the date of Easter Monday for a given year.
 * @param year
 */
export function getEasterMonday(year: number): DateTime {
	return getEaster(year).plus({days: 1});
}

/**
 * Returns true if the given date is Easter Monday.
 * @param date
 */
export function isEasterMonday(date: DateTime): boolean {
	return date.equals(getEasterMonday(date.year));
}

/**
 * Returns the date of Easter for a given year.
 * Function is an alias for getEasterSunday() function
 * @param year
 */
export function getEaster(year: number): DateTime {
	return getEasterSunday(year);
}

/**
 * Returns the date of Easter for a given year.
 * @param year
 */
export function getEasterSunday(year: number): DateTime {
	const a = year % 19;
	const b = Math.floor(year / 100);
	const c = year % 100;
	const d = Math.floor(b / 4);
	const e = b % 4; // eslint-disable-line unicorn/prevent-abbreviations
	const f = Math.floor((b + 8) / 25);
	const g = Math.floor((b - f + 1) / 3);
	const h = ((19 * a) + b - d - g + 15) % 30;
	const i = Math.floor(c / 4);
	const k = c % 4;
	const l = (32 + (2 * e) + (2 * i) - h - k) % 7;
	const m = Math.floor((a + (11 * h) + (22 * l)) / 451);
	const month = Math.floor((h + l - (7 * m) + 114) / 31);
	const day = ((h + l - (7 * m) + 114) % 31) + 1;

	return DateTime.fromObject({year, month, day});
}

/**
 * Returns true if the given date is Easter Sunday.
 * @param date
 */
export function isEasterSunday(date: DateTime | Date): boolean {
	date = date instanceof Date ? DateTime.fromJSDate(date) : date;
	return date.equals(getEasterSunday(date.year));
}

/**
 * Returns the date of Holy Saturday for a given year.
 * @param year
 */
export function getHolySaturday(year: number): DateTime {
	return getEaster(year).minus({days: 1});
}

/**
 * Returns true if the given date is Holy Saturday.
 * @param date
 */
export function isHolySaturday(date: DateTime | Date): boolean {
	date = date instanceof Date ? DateTime.fromJSDate(date) : date;
	return date.equals(getHolySaturday(date.year));
}

/**
 * Returns the date of Good Friday for a given year.
 * @param year
 */
export function getGoodFriday(year: number): DateTime {
	return getEaster(year).minus({days: 2});
}

/**
 * Returns true if the given date is Good Friday.
 * @param date
 */
export function isGoodFriday(date: DateTime | Date): boolean {
	date = date instanceof Date ? DateTime.fromJSDate(date) : date;
	return date.equals(getGoodFriday(date.year));
}

/**
 * Return the Interval of Holly Week for a given year.
 *
 * @param year
 */
export function getHollyWeekInterval(year: number): Interval {
	const easter = getEaster(year);

	return Interval.fromDateTimes(
		easter.minus({days: 7}), // Palm Sunday
		easter.plus({days: 1}), // Easter Monday
	);
}

/**
 * Returns true if the given date is part of Holy Week.
 * @param date
 */
export function isHolyWeek(date: DateTime | Date): boolean {
	date = date instanceof Date ? DateTime.fromJSDate(date) : date;
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
	'-7': 'Květná neděle',
	'-6': 'Modré pondělí',
	'-5': 'Šedivé úterý',
	'-4': 'Škaredá středa',
	'-3': 'Zelený čtvrtek',
	'-2': 'Velký pátek',
	'-1': 'Bílá sobota',
	0: 'Velikonoční neděle',
	1: 'Velikonoční pondělí',
};

/**
 * Returns the name of the day for the given date in Holy Week.
 * @param date
 */
export function getEasterDayName(date: DateTime | Date): string | undefined {
	if (isHolyWeek(date)) {
		date = date instanceof Date ? DateTime.fromJSDate(date) : date;
		const index = date.diff(getEaster(date.year), 'days').as('days');
		return index in names ? names[index] : undefined;
	}

	return undefined;
}

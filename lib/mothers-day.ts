import {DateTime} from 'luxon';

/**
 * Get the date of Mother's (Second Sunday in May) for the given year.
 * @param year
 * @returns {DateTime}
 */
export function getMothersDay(year: number): DateTime {
	return DateTime.fromObject({year, month: 5, day: 1}, {locale: 'en'})
		.plus({weeks: 1})
		.startOf('week')
		.plus({days: 6});
}

/**
 * Check if date is Mother's Day.
 * @param date
 * @returns {*}
 */
export function isMothersDay(date: DateTime | Date): boolean {
	date = date instanceof Date ? DateTime.fromJSDate(date) : date;
	return getMothersDay(date.year).hasSame(date, 'day');
}

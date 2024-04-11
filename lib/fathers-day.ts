import {DateTime} from 'luxon';

/**
 * Get the date of Father's (Third Sunday in June) for the given year.
 * @param year
 * @returns {DateTime}
 */
export function getFathersDay(year: number): DateTime {
	return DateTime.fromObject({year, month: 6, day: 1})
		.plus({weeks: 2})
		.startOf('week')
		.plus({days: 6});
}

/**
 * Is the given date Father's Day?
 * @param date
 * @returns {*}
 */
export function isFathersDay(date: DateTime): boolean {
	return date.equals(getFathersDay(date.year));
}
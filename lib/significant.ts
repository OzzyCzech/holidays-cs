import data from './significant.json';
import {DateTime} from "luxon";

const significant = data as Record<string, string>;

/**
 * Returns the significant day for the given date.
 * @param date
 */
export function getSignificantDay(date: DateTime | Date): string | undefined {
	date = date instanceof Date ? DateTime.fromJSDate(date) : date;
	return significant[date.toFormat('ddMM')];
}

/**
 * Returns true if the given date is a significant day.
 * @param date
 */
export function isSignificantDay(date: DateTime | Date): boolean {
	date = date instanceof Date ? DateTime.fromJSDate(date) : date;
	return date.toFormat('ddMM') in significant;
}
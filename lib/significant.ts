import data from './significant.json';
import {DateTime} from "luxon";

const significant = data as Record<string, string>;

/**
 * Returns the significant day for the given date.
 * @param date
 */
export function getSignificantDay(date: DateTime): string {
	return significant[date.toFormat('ddMM')];
}

/**
 * Returns true if the given date is a significant day.
 * @param date
 */
export function isSignificantDay(date: DateTime): boolean {
	return date.toFormat('ddMM') in significant;
}
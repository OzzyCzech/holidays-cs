import {DateTime} from 'luxon';
import data from './significant.json';

/**
 * Represents a significant day.
 */
export type SignificantDay = {
	name: string;
	description: string;
	year?: number;
};

/**
 * Zákon č. 245/2000 Sb., o státních svátcích a národních svátcích České republiky
 */
const significant = data as Record<string, SignificantDay>;

/**
 * Returns the significant day for the given date.
 * @param date
 */
export function getSignificantDay(date: DateTime | Date): SignificantDay | undefined {
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

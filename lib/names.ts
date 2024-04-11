import data from './names.json';
import {DateTime} from "luxon";

const names = data as Record<string, string[]>;

/**
 * Get names as a string for the given date
 * @param date
 * @param joinWith
 */
export function getNameDay(date: DateTime | Date, joinWith = ' a '): string {
	date = date instanceof Date ? DateTime.fromJSDate(date) : date;
	return getNamesDay(date).join(joinWith);
}

/**
 * Get the names of the name day for the given date
 * @param date
 */
export function getNamesDay(date: DateTime | Date): string[] {
	date = date instanceof Date ? DateTime.fromJSDate(date) : date;
	const day = date.toFormat('ddMM');
	return day in names ? names[day] : [];
}
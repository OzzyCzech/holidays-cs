import data from './names.json';
import {DateTime} from "luxon";

const names = data as Record<string, string[]>;

/**
 * Get names as a string for the given date
 * @param date
 * @param joinWith
 */
export function getNameDay(date: DateTime, joinWith = ' a '): string {
	return getNames(date).join(joinWith);
}

/**
 * Get the names of the name day for the given date
 * @param date
 */
export function getNames(date: DateTime): string[] {
	const day = date.toFormat('ddMM');
	return day in names ? names[day] : [];
}
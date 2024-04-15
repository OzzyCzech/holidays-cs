import {type DateTime} from 'luxon';
import * as NameDays from 'namedays-cs';

/**
 * Get names as a string for the given date
 * @param date
 * @param joinWith
 */
export function getNameDay(date: DateTime | Date, joinWith = ' a '): string {
	return NameDays.getNameDay(date instanceof Date ? date : date.toJSDate(), joinWith);
}

/**
 * Get the names of the name day for the given date
 * @param date
 */
export function getNameDayArray(date: DateTime | Date): string[] | undefined {
	return NameDays.getNameDayArray(date instanceof Date ? date : date.toJSDate());
}

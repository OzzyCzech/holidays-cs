import holidays from './calendars/cs/holidays.json'
import {DateTime} from "luxon";

export function getHoliday(date: DateTime): string | undefined {
	const key = date.toFormat('MM-dd')
	if (holidays[key]) {
		return holidays[key]
	}
}
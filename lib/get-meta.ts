import {DateTime} from "luxon";
import {getNameDayArray} from "./names.js";
import {isPublicHoliday, getPublicHoliday} from "./holidays.js";
import {getSignificantDay, isSignificantDay} from "./significant.js";
import {areShopsOpen, getShopsStatus} from "./shops.js";
import {getEasterDayName, isEasterMonday, isEasterSunday, isGoodFriday, isHolySaturday, isHolyWeek} from "./easter.js";

interface Easter {
	name: string | undefined;
	isGoodFriday: boolean;
	isHolySaturday: boolean;
	ieEasterSunday: boolean;
	isEasterMonday: boolean;
}

interface ShopsStatus {
	areOpen: boolean;
	status: string;
}

interface DayMetadata {
	names: string[] | undefined;

	isSignificantDay: boolean;
	significantDay: string | undefined;

	isPublicHoliday: boolean;
	publicHoliday: string | undefined;

	// Easter metadata
	easter: Easter | undefined;
	shops: ShopsStatus
}

/**
 * Get metadata for a specific day
 * @param date
 */
export function getDayMeta(date: DateTime | Date): DayMetadata {
	date = date instanceof Date ? DateTime.fromJSDate(date) : date;

	let easter: Easter | undefined = undefined;
	if (isHolyWeek(date)) {
		easter = {
			name: getEasterDayName(date),
			isGoodFriday: isGoodFriday(date),
			isHolySaturday: isHolySaturday(date),
			ieEasterSunday: isEasterSunday(date),
			isEasterMonday: isEasterMonday(date),
		}
	}

	let shops: ShopsStatus = {
		areOpen: areShopsOpen(date),
		status: getShopsStatus(date)
	}

	return {
		names: getNameDayArray(date),

		// easter metadata
		easter: easter,

		// national significant days
		isSignificantDay: isSignificantDay(date),
		significantDay: getSignificantDay(date),

		// national holidays
		isPublicHoliday: isPublicHoliday(date),
		publicHoliday: getPublicHoliday(date),

		// shops metadata
		shops: shops
	};
}
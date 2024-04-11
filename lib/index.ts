export * from "./easter.js";
export * from "./holidays.js";
export * from "./fathers-day.js";
export * from "./mothers-day.js";
export * from "./names.js";
export * from "./shops.js";

import {DateTime} from "luxon";
import {getNames} from "./names.js";
import {isPublicHoliday, getPublicHoliday} from "./holidays.js";
import {getSignificantDay, isSignificantDay} from "./significant.js";
import {areShopsOpen, getShopsStatus} from "./shops.js";
import {getEasterDayName, isEasterMonday, isGoodFriday, isHolySaturday, isHolyWeek} from "./easter.js";

interface Easter {
	name: string
	isGoodFriday: boolean;
	isHolySaturday: boolean;
	isHolySunday: boolean;
	isEasterMonday: boolean;
}

interface ShopsStatus {
	areOpen: boolean;
	status: string;
}

interface DayMetadata {
	names: string[];

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
export function getDayMeta(date: DateTime): DayMetadata {

	// Easter metadata
	let easter: Easter | undefined = undefined;
	if (isHolyWeek(date)) {
		easter = {
			name: getEasterDayName(date),
			isGoodFriday: isGoodFriday(date),
			isHolySaturday: isHolySaturday(date),
			isHolySunday: isHolySaturday(date),
			isEasterMonday: isEasterMonday(date),
		}
	}

	let shops: ShopsStatus = {
		areOpen: areShopsOpen(date),
		status: getShopsStatus(date)
	}

	return {
		names: getNames(date),

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
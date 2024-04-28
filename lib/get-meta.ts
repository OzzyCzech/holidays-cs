import {DateTime} from 'luxon';
import {getPublicHoliday, isPublicHoliday} from './holidays.js';
import {getSignificantDay, isSignificantDay, type SignificantDay} from './significant.js';
import {areShopsOpen, getShopsStatus} from './shops.js';
import {
	getEasterDayName, isEasterMonday, isEasterSunday, isGoodFriday, isHolySaturday, isHolyWeek,
} from './easter.js';

export type EasterMetadata = {
	name: string | undefined;
	isGoodFriday: boolean;
	isHolySaturday: boolean;
	ieEasterSunday: boolean;
	isEasterMonday: boolean;
};

export type DayMetadata = {
	// Significant days metadata
	isSignificantDay: boolean;
	significantDay?: SignificantDay;

	// Public holidays metadata
	isPublicHoliday: boolean;
	publicHoliday?: string | undefined;

	// Easter metadata
	isHolyWeek: boolean;
	easter?: EasterMetadata | undefined;

	// Shops metadata
	shops: {areOpen: boolean; status: string};
};

/**
 * Get metadata for a specific day
 * @param date
 */
export function getDayMeta(date: DateTime | Date): DayMetadata {
	date = date instanceof Date ? DateTime.fromJSDate(date) : date;

	const meta: DayMetadata = {
		// Flags
		isSignificantDay: isSignificantDay(date),
		isPublicHoliday: isPublicHoliday(date),

		// Easter
		isHolyWeek: isHolyWeek(date),

		// Shops
		shops: {
			areOpen: areShopsOpen(date),
			status: getShopsStatus(date),
		},
	};

	if (meta.isSignificantDay) {
		meta.significantDay = getSignificantDay(date);
	}

	if (meta.isPublicHoliday) {
		meta.publicHoliday = getPublicHoliday(date);
	}

	if (meta.isHolyWeek) {
		meta.easter = {
			name: getEasterDayName(date),
			isGoodFriday: isGoodFriday(date),
			isHolySaturday: isHolySaturday(date),
			ieEasterSunday: isEasterSunday(date),
			isEasterMonday: isEasterMonday(date),
		};
	}

	return meta;
}

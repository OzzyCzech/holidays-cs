import {DateTime} from "luxon";

const holidays = {
	"01-01": "Den obnovy samostatného českého státu",
	"01-05": "Svátek práce",
	"08-05": "Den vítězství (1945)",
	"05-07": "Den slovanských věrozvěstů Cyrila a Metoděje",
	"06-07": "Den upálení mistra Jana Husa (1415)",
	"28-09": "Den české státnosti",
	"28-10": "Den vzniku samostatného československého státu (1918)",
	"17-11": "Den boje za svobodu a demokracii (1939 a 1989)",
	"24-12": "Štědrý den",
	"25-12": "První svátek vánoční",
	"26-12": "Druhý svátek vánoční"
}

/**
 * Check if the given date is a holiday
 * @param date
 */
export function isHoliday(date: DateTime): boolean {
	return date.toFormat('MM-dd') in holidays;
}

/**
 * Get the name of the holiday for the given date
 * @param date
 */
export function getHoliday(date: DateTime): string | undefined {
	return date.toFormat('MM-dd') in holidays ? holidays[date.toFormat('MM-dd')] : undefined;
}
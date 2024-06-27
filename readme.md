# Holidays (cs)

[![NPM Downloads](https://img.shields.io/npm/dm/holidays-cs?style=for-the-badge)](https://www.npmjs.com/package/holidays-cs)
[![NPM Version](https://img.shields.io/npm/v/holidays-cs?style=for-the-badge)](https://www.npmjs.com/package/holidays-cs)
[![NPM License](https://img.shields.io/npm/l/holidays-cs?style=for-the-badge)](https://github.com/OzzyCzech/holidays-cs/blob/main/LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/OzzyCzech/holidays-cs?style=for-the-badge)](https://github.com/OzzyCzech/holidays-cs/commits/main)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/OzzyCzech/holidays-cs/main.yml?style=for-the-badge)](https://github.com/OzzyCzech/holidays-cs/actions)

Public holidays and significant days in the Czech Republic.

## Functions

All functions are available in the main module. You can import them like this:

```javascript
import * as holidays from 'holidays-cs';
```

[Luxon](https://moment.github.io/luxon/) is used for date manipulation.
You can pass a `Date` object or a `DateTime` object to the functions.
Responses are always `DateTime` objects. If you need a `Date` object,
you can use the `response.toJSDate()` method.

## Czech public holidays

```javascript
import {DateTime} from 'luxon';
import {isPublicHoliday, getPublicHoliday} from 'holidays-cs';

// 1. january
isPublicHoliday(DateTime.fromISO('2024-01-01')); // true

// 2. january
isPublicHoliday(DateTime.fromISO('2024-01-02')); // false

// 17. november
isPublicHoliday(DateTime.fromISO('2024-11-17')); // true
getPublicHoliday(DateTime.fromISO('2024-11-17')); // Den boje za svobodu a demokracii (1939 a 1989)
```

You can get all public holidays for a given year:

```javascript
import {getPublicHolidaysList} from 'holidays-cs';

getPublicHolidaysList(2024); // returns Map with all 13 holidays
```

### Shops status

In the Czech Republic, shops are closed on some public holidays.

```javascript
import {DateTime} from 'luxon';
import {areShopsOpen, getShopsStatus} from 'holidays-cs';

// 24. december 2024
areShopsOpen(DateTime.fromISO('2024-12-24')); // true

// 25. december 2024
getShopsStatus(DateTime.fromISO('2024-12-25')); // otevřeno do 12:00 

// New Year's Day 2025
areShopsOpen(DateTime.fromISO('2025-01-01')); // false
getShopsStatus(DateTime.fromISO('2025-01-01')); // zavřeno
```

## Czech significant days

Significant days are not public holidays, but they are important in the Czech Republic.

```javascript
import {DateTime} from 'luxon';
import {isSignificantDay, getSignificantDay} from 'holidays-cs';

// 16. jan 2024
isSignificantDay(DateTime.fromISO('2024-01-16')); // true
getSignificantDay(DateTime.fromISO('2024-01-16')).name; // Den památky Jana Palacha
```

Visit the [significant days](https://cs.wikipedia.org/wiki/%C4%8Cesk%C3%BD_st%C3%A1tn%C3%AD_sv%C3%A1tek) page for more information.

## Easter

**Easter Monday** (_Velikonoční pondělí_) and **Good Friday** (_Velký pátek_)
are public holidays in the Czech Republic.

### Easter date

Library can calculate the Easter date for a given year (it's Sunday):

```javascript
import {getEaster} from 'holidays-cs';

getEaster(2024).toISODate(); // 2024-03-31
getEaster(2025).toISODate(); // 2025-04-20
```

Need more? Check out the [Easter Date](https://github.com/OzzyCzech/easter-date) library.

### Easter days

```javascript
import {getGoodFriday, getHolySaturday, getEasterSunday, getEaster, getEasterMonday} from 'holidays-cs';

getGoodFriday(2024).toISODate(); // 2024-03-29
getHolySaturday(2024).toISODate(); // 2024-03-30

// Easter Sunday and Easter are the same
getEasterSunday(2024).toISODate(); // 2024-03-31
getEaster(2024).toISODate(); // 2024-03-31

getEasterMonday(2024).toISODate(); // 2024-04-01
```

You can also check if a given date is Good Friday, Holy Saturday, Easter Sunday or Easter Monday:

```javascript
import {isGoodFriday, isHolySaturday, isEasterSunday, isEasterMonday} from 'holidays-cs';
import {DateTime} from 'luxon';


// 29. march 2024 - Good Friday
isGoodFriday(DateTime.fromISO('2024-03-29')); // true

// 30. march 2024 - Holy Saturday
isHolySaturday(DateTime.fromISO('2024-03-30')); // true

// 31. march 2024 - Easter Sunday
isEasterSunday(DateTime.fromISO('2024-03-31')); // true

// 1. april 2024 - Easter Monday
isEasterMonday(DateTime.fromISO('2024-04-01')); // true
```

### Holy Week

You can also check if given date is part of the Holy Week.
Holy Week is the week before Easter plus Easter Monday.
Starts with Palm Sunday and ends with Easter Monday.

```javascript
import {isHolyWeek, getHollyWeekInterval} from 'holidays-cs';

// 29. march 2024
isHolyWeek(DateTime.fromISO('2024-03-29')); // true it's Good Friday

// Get the Holy Week interval
getHollyWeekInterval(2024) // {start: DateTime, end: DateTime}
```

You can also get the name of the day in the Holy Week:

```javascript
import {DateTime} from 'luxon';
import {getEasterDayName} from 'holidays-cs';

getEasterDayName(DateTime.fromISO('2024-03-29')); // Velký pátek
```

## Credits

- [Zákon č. 245/2000 Sb., o státních svátcích a národních svátcích České republiky](https://www.mpsv.cz/web/cz/zakon-c.-245-2000-sb.-ze-dne-29.-cervna-2000-)

## License

[MIT](./LICENSE)
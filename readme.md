# Holidays (cs)

Public holidays, Easter, name days and important days in the Czech Republic.

## Functions

All functions are available in the main module. You can import them like this:

```javascript
import * as holidays from 'holidays-cs';
```

[Luxon](https://moment.github.io/luxon/) is used for date manipulation.
You can pass a `Date` object or a `DateTime` object to the functions.
Responses are always `DateTime` objects. If you need a `Date` object,
you can use the `response.toJSDate()` method.

## Name days

You can get the name day for a given date:

```javascript
import {DateTime} from 'luxon';
import {getNameDay, getNameDayArray} from 'holidays-cs';

// String of name days
getNameDay(DateTime.fromISO('2024-12-24')); // Adam a Eva
getNameDay(DateTime.fromISO('2024-12-24'), ', '); // Adam, Eva

// Array of name days
getNameDayArray(DateTime.fromISO('2024-12-24')); // ['Adam', 'Eva']
```

## Easter

**Easter Monday** (Velikonoční pondělí) and **Good Friday** (Velký pátek)
are public holidays in the Czech Republic.

### Easter date

Library can calculate the Easter date for a given year (it's Sunday):

```javascript
import {getEaster} from 'holidays-cs';

getEaster(2024).toISODate(); // 2024-03-31
getEaster(2025).toISODate(); // 2025-04-20
```

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

## Father's and Mother's day

Father's day is celebrated on the **third Sunday in June**.
Mother's day is celebrated on the **second Sunday in May**.

```javascript
import {DateTime} from 'luxon';
import {isFathersDay, getFathersDay, isMothersDay, getMothersDay} from 'holidays-cs';

// 16. june 2024
isFathersDay(DateTime.fromISO('2024-06-16')); // true
getFathersDay(2024).toISODate(); // 2024-06-16

// 12. may 2024
isMothersDay(DateTime.fromISO('2024-05-12')); // true
getMothersDay(2024).toISODate(); // 2024-05-12
```

## Credits

- [date-holidays](https://github.com/commenthol/date-holidays) library for inspiration
- [Online calendar](https://calendar.center/) for verifying the data
- [Easter dates calculation](https://github.com/paulzag/ZagZ-iCalendars) for the Easter dates
- [Svatý týden](https://cs.wikipedia.org/wiki/Svat%C3%BD_t%C3%BDden) for names of the Easter days

## License

MIT
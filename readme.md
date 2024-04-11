# Holidays (cs)

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

```javascript
import {getNameDay, getNamesDay} from 'holidays-cs';

getNameDay(new Date(2024, 11, 24)); // Adam a Eva
getNamesDay(new Date(2024, 11, 24)); // [ 'Adam', 'Eva' ]
```

## Public holidays

```javascript
import {isPublicHoliday, getPublicHoliday} from 'holidays-cs';

isPublicHoliday(new Date(2024, 0, 1)); // true
isPublicHoliday(new Date(2024, 0, 2)); // false

getPublicHoliday(new Date(2024, 10, 17)); // Den boje za svobodu a demokracii (1939 a 1989)
```

## Credits

- [Online calendar](https://calendar.center/) for verifying the data
- [Easter dates calculation](https://github.com/paulzag/ZagZ-iCalendars) for the Easter dates
- [Svatý týden](https://cs.wikipedia.org/wiki/Svat%C3%BD_t%C3%BDden) for names of the Easter days
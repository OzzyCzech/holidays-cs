import {writeFile as writeFileAsync} from 'node:fs/promises';
import ky from 'ky';
import ICAL from 'ical.js';

function convertIcalToJson(icalData) {
  const jcalData = ICAL.parse(icalData);
  const comp = new ICAL.Component(jcalData);
  const events = comp.getAllSubcomponents('vevent');
  let result = {};

  for (let event of events) {
    let vevent = new ICAL.Event(event);
    let key = vevent.endDate.toJSDate().toISOString().substring(0, 10);
    if (!result[key]) {
      result[key] = vevent.description;
    }
  }

  return result;
}

const calendarUrl = 'https://raw.githubusercontent.com/paulzag/ZagZ-iCalendars/master/Easter-iCalendars/Easter_next_Easter_to_2299.ics';
const data = await ky.get(calendarUrl).text();
const json = convertIcalToJson(data);
await writeFileAsync('lib/calendars/easter.json', JSON.stringify(json, null, 2));
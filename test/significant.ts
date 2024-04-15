import test from 'ava';
import {DateTime} from 'luxon';
import {getSignificantDay, isSignificantDay} from '../lib/index.js';

test('Check Tří králové day', t => {
	t.true(isSignificantDay(DateTime.fromISO('2020-01-06')));
	t.deepEqual(getSignificantDay(DateTime.fromISO('2020-01-06')),
		{
			'name': 'Tři králové',
			'description': 'Tři králové přišli k Ježíši',
		});
});

import { getCounter, incrementCounter, resetCounter } from './counter';
import { map, share } from 'rxjs/operators';
import { buttonsClicks$ } from '../application-state/';

export const saveCounter$ = buttonsClicks$.pipe(
  map(action => {
    if (action) {
      incrementCounter();
    } else {
      resetCounter();
    }

    return getCounter();
  }),
  share(),
);

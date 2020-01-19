import { distinctUntilChanged, shareReplay, startWith } from 'rxjs/operators';
import { buttonsClicks$ } from './buttons-clicks-observable';

export const applicationState$ = buttonsClicks$.pipe(
  distinctUntilChanged(),
  startWith(false),
  shareReplay(),
);

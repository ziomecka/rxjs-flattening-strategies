import { delay, endWith, mergeMap, take } from 'rxjs/operators';
import { interval, of } from 'rxjs';

export const saveXHR$ = interval(1000).pipe(
  take(3),
  endWith('completed!'),
  mergeMap(value => {
    return typeof value === 'number'
      ? of(value + 1)
      : of(value).pipe(delay(1000));
  }),
);

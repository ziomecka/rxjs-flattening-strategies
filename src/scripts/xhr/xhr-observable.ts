import { defer, interval, of } from 'rxjs';
import { delay, endWith, mergeMap, take } from 'rxjs/operators';
import { $interval } from './constants';

const getInterval = () => Number($interval.value);

export const saveXHR$ = defer(() => {
  const selectedInterval = getInterval();

  return interval(selectedInterval).pipe(
    take(3),
    endWith('completed!'),
    mergeMap(value => {
      return typeof value === 'number'
        ? of(value + 1)
        : of(value).pipe(delay(selectedInterval));
    }),
  );
});

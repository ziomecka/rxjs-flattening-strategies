import { Observable, combineLatest, of } from 'rxjs';
import { concatMap, exhaustMap, mergeMap, switchMap } from 'rxjs/operators';
import { saveCounter$, saveXHR$ } from '../xhr/';
import { Strategies } from '../constants';

const strategies = new Map<Strategies, any>([
  [Strategies.MergeMap, mergeMap],
  [Strategies.SwitchMap, switchMap],
  [Strategies.ConcatMap, concatMap],
  [Strategies.ExhaustMap, exhaustMap],
]);

export const buildObservable = (
  strategy: Strategies,
): Observable<[number | string, number]> => {
  const flatteningOperator = strategies.get(Number(strategy));

  return saveCounter$.pipe(
    flatteningOperator((counter: number) =>
      combineLatest(saveXHR$, of(counter)),
    ),
  );
};

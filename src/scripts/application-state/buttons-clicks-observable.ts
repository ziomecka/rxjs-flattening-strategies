import { fromEvent, merge } from 'rxjs';
import { mapTo, share } from 'rxjs/operators';

const $emitButton = document.getElementById('emit-button') as HTMLButtonElement;
const $resetButton = document.getElementById(
  'reset-button',
) as HTMLButtonElement;

export const buttonsClicks$ = merge(
  fromEvent($emitButton, 'click').pipe(mapTo(true)),
  fromEvent($resetButton, 'click').pipe(mapTo(false)),
).pipe(share());

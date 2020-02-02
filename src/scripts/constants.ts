export const $emitButton = document.getElementById(
  'emit-button',
) as HTMLButtonElement;

export const $resetButton = document.getElementById(
  'reset-button',
) as HTMLButtonElement;

export const $saveCounter = document.getElementById(
  'emit-count',
) as HTMLSpanElement;

export enum Strategies {
  MergeMap,
  SwitchMap,
  ConcatMap,
  ExhaustMap,
}

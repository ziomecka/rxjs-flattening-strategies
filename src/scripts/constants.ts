export const $emitButton = document.getElementById(
  'emit-button',
) as HTMLButtonElement;

export const $resetButton = document.getElementById(
  'reset-button',
) as HTMLButtonElement;

export const $saveCounter = document.getElementById(
  'emit-count',
) as HTMLSpanElement;

export const $checkAllInput = document.querySelector(
  'input#check-all',
) as HTMLInputElement;

export const $checkAllLabel =
  (document.querySelector('label[for="check-all"]') as HTMLLabelElement) ||
  ({ style: {} } as HTMLLabelElement);

export const $strategies = Array.from(
  (document.querySelectorAll('input[id^="strategy-"]') as NodeListOf<
    HTMLInputElement
  >) || [],
);

export enum Strategies {
  MergeMap,
  SwitchMap,
  ConcatMap,
  ExhaustMap,
}

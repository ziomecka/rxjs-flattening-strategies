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

export const $foldingButtons = Array.from(
  document.querySelectorAll('.foldable button') as NodeListOf<
    HTMLButtonElement
  >,
);

export const $question = document.querySelector('#question') as SVGElement;
export const $answer = document.querySelector('#answer') as HTMLDivElement;
export const $closeAnswer = document.querySelector(
  '#answer-close',
) as HTMLDivElement;

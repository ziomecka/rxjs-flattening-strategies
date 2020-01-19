import {
  $checkAllInput,
  $checkAllLabel,
  $saveCounter,
  $strategies,
} from './constants';
import { appendStrategy, removeStrategy } from './strategies/';
import { applicationState$ } from './application-state';
import { fromEvent } from 'rxjs';
import { reactToAppState } from './react-to-app-state';
import { saveCounter$ } from './xhr';

export const init = () => {
  listenStrategiesCheckBoxes();
  listenCheckAll();

  applicationState$.subscribe(reactToAppState);
  saveCounter$.subscribe(count => ($saveCounter.innerText = count.toString()));
};

function listenStrategiesCheckBoxes() {
  const changeListener = ({
    currentTarget: { checked, value },
  }: HTMLElementEvent<HTMLInputElement>) => {
    if (checked) {
      appendStrategy(Number(value));
    } else {
      removeStrategy(Number(value));
    }

    toggleCheckAll(checked);
  };

  $strategies.forEach($inputElement => {
    fromEvent($inputElement, 'change').subscribe(changeListener);
  });
}

function toggleCheckAll(status: boolean) {
  $checkAllInput.checked = status;

  if (someStrategyStatus(!status) && someStrategyStatus(status)) {
    $checkAllInput.style.opacity = '.2';
    $checkAllLabel.style.opacity = '.2';
    $checkAllInput.checked = true;
  } else {
    $checkAllInput.style.opacity = '1';
    $checkAllLabel.style.opacity = '1';
  }
}

function someStrategyStatus(expectedStatus = true) {
  return $strategies.some($inputElement => {
    return $inputElement.checked === expectedStatus;
  });
}

function listenCheckAll() {
  const changeListener = ({
    currentTarget: { checked },
  }: HTMLElementEvent<HTMLInputElement>) => {
    if (checked) {
      $strategies.forEach($inputElement => {
        $inputElement.checked = true;
        $inputElement.dispatchEvent(new Event('change'));
      });
    } else {
      $strategies.forEach($inputElement => {
        $inputElement.checked = false;
        $inputElement.dispatchEvent(new Event('change'));
      });
    }
  };

  fromEvent($checkAllInput, 'change').subscribe(changeListener);
}

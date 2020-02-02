import { $checkAllInput, $checkAllLabel, $strategies } from './constants';
import { appendStrategy, removeStrategy } from '../strategies/';
import { fromEvent } from 'rxjs';

export const listenStrategiesCheckBoxes = () => {
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
};

export const toggleCheckAll = (status: boolean) => {
  $checkAllInput.checked = status;

  if (someStrategyStatus(!status) && someStrategyStatus(status)) {
    $checkAllInput.style.opacity = '.2';
    $checkAllLabel.style.opacity = '.2';
    $checkAllInput.checked = true;
  } else {
    $checkAllInput.style.opacity = '1';
    $checkAllLabel.style.opacity = '1';
  }
};

function someStrategyStatus(expectedStatus = true) {
  return $strategies.some($inputElement => {
    return $inputElement.checked === expectedStatus;
  });
}

export const listenCheckAll = () => {
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

  return fromEvent($checkAllInput, 'change').subscribe(changeListener);
};

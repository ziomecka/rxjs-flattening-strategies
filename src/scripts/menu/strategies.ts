import { $checkAllInput, $strategies } from './constants';
import { appendStrategy, removeStrategy } from '../strategies/';
import { fromEvent } from 'rxjs';
import { styleMenuElements } from './style-menu-elements';

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

  styleMenuElements();
};

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

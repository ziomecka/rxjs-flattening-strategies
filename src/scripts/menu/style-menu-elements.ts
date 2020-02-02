import { $checkAllInput, $checkAllLabel, $strategies } from './constants';
import { $emitButton } from '../constants';

const FULL_OPACITY = '1';
const LOWER_OPACITY = '.2';

export const styleMenuElements = () => {
  const anyStrategyChecked = someStrategyStatus(true);
  const anyStrategyNotChecked = someStrategyStatus(!false);

  if (anyStrategyNotChecked && anyStrategyChecked) {
    changeCheckAllOpacity(LOWER_OPACITY);

    $checkAllInput.checked = true;
    $emitButton.disabled = false;
  } else if (anyStrategyChecked) {
    changeCheckAllOpacity(FULL_OPACITY);

    $emitButton.disabled = false;
  } else {
    changeCheckAllOpacity(FULL_OPACITY);

    $emitButton.disabled = true;
  }
};

function changeCheckAllOpacity(opacity: string) {
  $checkAllInput.style.opacity = opacity;
  $checkAllLabel.style.opacity = opacity;
}

function someStrategyStatus(expectedStatus = true) {
  return $strategies.some($inputElement => {
    return $inputElement.checked === expectedStatus;
  });
}

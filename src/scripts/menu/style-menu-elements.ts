import { $checkAllInput, $checkAllLabel, $strategies } from './constants';

const FULL_OPACITY = '1';
const LOWER_OPACITY = '.2';

export const styleMenuElements = () => {
  const anyStrategyChecked = someStrategyStatus(true);
  const anyStrategyNotChecked = someStrategyStatus(!false);

  if (anyStrategyNotChecked && anyStrategyChecked) {
    changeCheckAllOpacity(LOWER_OPACITY);
    $checkAllInput.checked = true;
  } else if (anyStrategyChecked) {
    changeCheckAllOpacity(FULL_OPACITY);
  } else {
    changeCheckAllOpacity(FULL_OPACITY);
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

import { LOGGER_PREFIX, buildLoggerId } from './helpers';
import { addSubscription, resetSubscriptions } from './strategies/';
import { Strategies } from './constants';

const numberOfStrategies = Object.keys(Strategies).length / 2;
const strategies: Strategies[] = new Array(numberOfStrategies).fill(null);

export const reactToAppState = (state: boolean) => {
  if (!state) {
    resetSubscriptions();

    Array.from(document.querySelectorAll(`[id^=${LOGGER_PREFIX}-`)).forEach(
      $logger => ($logger.innerHTML = ''),
    );

    return;
  }

  strategies.forEach((value, index) => {
    const $logger = document.getElementById(buildLoggerId(index));
    if ($logger) addSubscription(index);
  });
};

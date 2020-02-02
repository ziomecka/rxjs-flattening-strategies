import {
  listenCheckAll,
  listenFolding,
  listenQuestion,
  listenStrategiesCheckBoxes,
  styleMenuElements,
} from './menu';
import { $saveCounter } from './constants';
import { applicationState$ } from './application-state';
import { reactToAppState } from './react-to-app-state';
import { saveCounter$ } from './xhr';

export const init = () => {
  listenStrategiesCheckBoxes();
  listenCheckAll();
  listenQuestion();
  listenFolding();

  styleMenuElements();

  return [
    applicationState$.subscribe(reactToAppState),
    saveCounter$.subscribe(
      count => ($saveCounter.innerText = count.toString()),
    ),
  ];
};

import { Strategies } from '../constants';
import { buildLoggerId } from '../helpers';

const notExists = (value: any) => value === undefined || value === null;

export const colors = new Map([
  [1, 'rgba(255, 0, 0, .09'],
  [2, 'rgba(0, 255, 0, .09'],
  [3, 'rgba(255, 255, 0, .09'],
  [4, 'rgba(0, 0, 255, .09'],
  [5, 'rgba(255, 0, 255, .09'],
]);

export const buildSubscriber = (strategy: Strategies) => {
  const $parent = document.getElementById(buildLoggerId(strategy));

  if (!$parent) return () => {};

  return ([text, saveCounter]: SaveState) => {
    if (notExists(text) || notExists(saveCounter)) return;

    const $p = document.createElement('p');

    $p.innerText = typeof text === 'number' ? `step ${text}` : text;
    $p.setAttribute('data-xhr-counter', String(saveCounter));
    $p.classList.add('log');
    $p.style.background =
      colors.get(saveCounter) || `rgba(100, 100, 100, .${saveCounter}`;

    $parent.appendChild($p);
  };
};

type SaveState = [number | string, number];

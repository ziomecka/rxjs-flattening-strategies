import { $colorsAlpha } from './constants';
import { Strategies } from '../constants';
import { buildLoggerId } from '../helpers';

const notExists = (value: any) => value === undefined || value === null;
const getColorsAlpha = () => $colorsAlpha.value;

const DEFAULT_COLOR = 'inherit';
const CONTRAST_COLOR = 'white';

export const colors = new Map([
  [1, { background: '255, 0, 0', color: CONTRAST_COLOR }],
  [2, { background: '0, 255, 0', color: DEFAULT_COLOR }],
  [3, { background: '255, 255, 0', color: DEFAULT_COLOR }],
  [4, { background: '0, 0, 255', color: CONTRAST_COLOR }],
  [5, { background: '255, 0, 255', color: DEFAULT_COLOR }],
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

    const { background, color } = colors.get(saveCounter) || {};
    const opacity = getColorsAlpha();

    $p.style.background =
      `rgba(${background}, ${opacity})` ||
      `rgba(100, 100, 100, .${saveCounter}`;
    $p.style.color = color || DEFAULT_COLOR;

    $parent.appendChild($p);
  };
};

type SaveState = [number | string, number];

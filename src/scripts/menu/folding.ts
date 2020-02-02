import { $foldingButtons } from './constants';
import { fromEvent } from 'rxjs';

const FOLDED_CLASS = 'foldable-folded';

export const listenFolding = () => {
  const listener = ({ currentTarget }: HTMLElementEvent<HTMLButtonElement>) => {
    const { classList } = currentTarget.parentElement;

    console.log(Array.from(classList));
    if (Array.from(classList).includes(FOLDED_CLASS)) {
      classList.remove(FOLDED_CLASS);
    } else {
      classList.add(FOLDED_CLASS);
    }
  };

  return fromEvent($foldingButtons, 'click').subscribe(listener);
};

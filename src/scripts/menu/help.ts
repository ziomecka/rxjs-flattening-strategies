import { $answer, $closeAnswer, $question } from './constants';
import { fromEvent } from 'rxjs';

export const listenQuestion = () => {
  const showModal = () => {
    $answer.classList.add('modal-show');
  };

  const hideModal = () => {
    $answer.classList.remove('modal-show');
  };

  return [
    fromEvent($question, 'click').subscribe(showModal),
    fromEvent($closeAnswer, 'click').subscribe(hideModal),
  ];
};

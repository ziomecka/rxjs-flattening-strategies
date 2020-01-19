import { buildLoggerBoxId, buildLoggerId } from '../../helpers';
import { $loggers } from './constants';
import { Strategies } from '../../constants';

export const appendStrategyHTML = (strategy: Strategies) => {
  const id = buildLoggerBoxId(strategy);
  const alreadyAppended = Boolean(document.getElementById(id));

  if (alreadyAppended) return false;

  const $loggerBox = document.createElement('div');
  $loggerBox.classList.add('logger-box');
  $loggerBox.setAttribute('id', id);

  const $title = document.createElement('p');
  $title.innerText = Strategies[strategy].replace(/^\w/, firstLetter =>
    firstLetter.toLowerCase(),
  );
  $title.classList.add('strategy-title');

  const $logger = document.createElement('div');
  $logger.id = buildLoggerId(strategy);

  $loggerBox.appendChild($title);
  $loggerBox.appendChild($logger);

  $loggers.appendChild($loggerBox);

  return true;
};

import { $loggers } from './constants';
import { Strategies } from '../../constants';
import { buildLoggerBoxId } from '../../helpers/';
import { removeSubscription } from '../subscriptions';

export const removeStrategy = (strategy: Strategies) => {
  const $strategy = document.getElementById(buildLoggerBoxId(strategy));

  $strategy && $loggers.removeChild($strategy);

  removeSubscription(strategy);
};

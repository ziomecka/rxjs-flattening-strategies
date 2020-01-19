import { Strategies } from '../../constants';
import { addSubscription } from '../subscriptions';
import { appendStrategyHTML } from './append-strategy-html';

export const appendStrategy = (strategy: Strategies) => {
  appendStrategyHTML(strategy);
  addSubscription(strategy);
};

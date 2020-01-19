import { Subscription, of } from 'rxjs';
import { Strategies } from '../constants';
import { applicationState$ } from '../application-state/';
import { buildObservable } from './build-observable';
import { buildSubscriber } from './build-subscriber';
import { switchMap } from 'rxjs/operators';

const subscriptions = new Map<Strategies, Subscription>([]);

export const addSubscription = (strategy: Strategies) => {
  if (!isSubscribed(strategy)) {
    return subscriptions.set(strategy, subscribeStrategyToAppState(strategy));
  }
};

export const removeSubscription = (
  strategy: Strategies,
  subscriptionArg?: Subscription,
) => {
  const subscription = subscriptionArg || subscriptions.get(strategy);

  if (subscription) {
    subscription.unsubscribe();
    subscriptions.delete(strategy);
  }
};

export const resetSubscriptions = () => {
  for (const subscriptionEntry of subscriptions.entries()) {
    removeSubscription(...subscriptionEntry);
  }
};

function isSubscribed(strategy: Strategies) {
  return subscriptions.has(strategy);
}

function subscribeStrategyToAppState(strategy: Strategies) {
  return applicationState$
    .pipe(
      switchMap(applicationState => {
        return applicationState ? buildObservable(Number(strategy)) : of([]);
      }),
    )
    .subscribe(buildSubscriber(Number(strategy)));
}

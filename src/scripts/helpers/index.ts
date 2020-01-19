import { Strategies } from '../constants';

export const LOGGER_PREFIX = 'logger';
const LOGGER_BOX_PREFIX = 'logger_box';

export const buildLoggerId = (strategy: Strategies) =>
  `${LOGGER_PREFIX}-${strategy}`;

export const buildLoggerBoxId = (strategy: Strategies) =>
  `${LOGGER_BOX_PREFIX}-${strategy}`;

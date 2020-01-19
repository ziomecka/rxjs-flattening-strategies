let counter = 0;

export const getCounter = () => counter;

export const resetCounter = () => {
  counter = 0;
  return counter;
};

export const incrementCounter = () => {
  counter = counter + 1;
  return counter;
};

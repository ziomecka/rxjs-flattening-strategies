declare type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T & {
    value: string;
  };
  currentTarget: T & {
    value: string;
  };
};

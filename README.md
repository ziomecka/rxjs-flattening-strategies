# RxJS flattening strategies

Application created for tech talk on RxJS hosted by Codilime in January 2020.

It aims to present different flattening strategies: mergeMap, switchMap, concatMap, exhaustMap

Stack: RxJS

Project is running on [heroku](https://rxjs-flattening-strategies.herokuapp.com/).

# Tool description

The tool visualizes how the **mergeMap**, **switchMap**, **concatMap** and **exhaustMap** operators work.

- The user can select any combination of the operators.

- Tool can either be in _on_ or _off_ state (controlled by _xhr_ and _reset_ buttons).

- Xhr event consists of three _steps_ and _complete_ message, separated by one second intervals (**xhr-steps stream**).

- Tool counts times the _xhr_ button has been clicked (**xhr-counter stream**).

- The flattening strategies, which have been checked, react to the
  xhr-counter stream and return combined xhr-counter stream and
  xhr-steps stream (**strategy stream**).

- **Strategy streams** are subscribed by functions responsible for
  rendering the logs on the screen.

**Enjoy learning the flattening strategies!**

![coded with love](https://img.shields.io/static/v1?label=coded%20with&message=love&color=a53860)

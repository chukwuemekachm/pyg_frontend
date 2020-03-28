/* eslint-disable import/prefer-default-export */

export function handleButtonClick(callBack) {
  return function actionHandler(event) {
    if (event.keyCode === 13 || event.keyCode === 32) {
      // eslint-disable-next-line prefer-rest-params
      callBack.apply(this, arguments);
    }
  };
}

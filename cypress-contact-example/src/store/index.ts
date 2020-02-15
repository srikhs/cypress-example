import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import { Action, AnyAction, combineReducers, Dispatch, Reducer } from "redux";
import { reducer as formReducer } from "redux-form";
import { all, fork } from "redux-saga/effects";
import { contactUsReducer } from "./contactus/reducer";
import ContactUsSaga from "./contactus/sagas";
import { IContactUsState } from "./contactus/types";

// The top-level application state object
export interface IApplicationState {
  router: RouterState;
  form: any;
  contactUs: IContactUsState;
}

// Additional props for connected React components. This prop is passed by default with `connect()`
export interface IConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>;
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export function createRootReducer(history: History<any>): Reducer<IApplicationState, AnyAction> {
  return combineReducers<IApplicationState>({
    form: formReducer,
    router: connectRouter(history),
    contactUs: contactUsReducer
  });
}

// Here we use `redux-saga` to trigger actions asynchronously. `redux-saga` uses something called a
// "generator function", which you can read about here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
export function* rootSaga() {
  yield all([
    fork(ContactUsSaga)
  ]);
}

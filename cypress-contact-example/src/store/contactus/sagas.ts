import { all, fork, put, takeEvery } from "redux-saga/effects";
import { ActionType } from "typesafe-actions";
import { submitSupportTicket, submitSupportTicketSuccess } from "./actions";
import { ContactUsActionTypes } from "./types";


export function* handleSubmitSupportTicket(action: ActionType<typeof submitSupportTicket>) {
  try {
    const response = { status: 200 };
    if (response.status !== 200) {
      console.error("Error occured while creating support ticket");
    }

    yield (put(submitSupportTicketSuccess("123")))
  } catch (error) {
    console.error("Error occured while creating support ticket");
  }
}

function* watchSubmitSupportTicket() {
  yield takeEvery(ContactUsActionTypes.CONTACTUS_SUBMITREQUEST, handleSubmitSupportTicket);
}
function* ContactUsSaga() {
  yield all([fork(watchSubmitSupportTicket)]);
}

export default ContactUsSaga;

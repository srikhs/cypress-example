import { Reducer } from "redux";
import { ContactUsActionTypes, IContactUsState } from "src/store/contactus/types";

export const initialState: IContactUsState = {
  failedToSend: undefined,
  isSending: undefined,
  isLoading: undefined,
  sentSuccessfully: undefined,
  helpIssueCategories: undefined,
  supportTicketResponse: undefined
};

const reducer: Reducer<IContactUsState> = (state = initialState, action) => {
  switch (action.type) {
    case ContactUsActionTypes.CONTACTUS_SUBMITREQUEST: {
      return {
        ...state,
        isSending: true,
        failedToSend: false
      };
    }

    case ContactUsActionTypes.CONTACTUS_SUBMITREQUEST_SUCCESS: {
      return {
        ...state,
        supportTicketResponse: action.payload.supportTicketResponse,
        isLoading: false,
        failedToSend: false,
        isSending: false,
        sentSuccessfully: true
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as contactUsReducer };


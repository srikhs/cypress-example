import { ContactUsActionTypes } from "src/store/contactus/types";
import { action } from "typesafe-actions";

export const submitSupportTicket = () =>
  action(ContactUsActionTypes.CONTACTUS_SUBMITREQUEST);
export const submitSupportTicketSuccess = (supportTicketResponse: string) =>
  action(ContactUsActionTypes.CONTACTUS_SUBMITREQUEST_SUCCESS, { supportTicketResponse });

export const enum ContactUsActionTypes {
  CONTACTUS_SUBMITREQUEST = "@@contactus/CONTACTUS_SUBMITREQUEST",
  CONTACTUS_SUBMITREQUEST_SUCCESS = "@@contactus/CONTACTUS_SUBMITREQUEST_SUCCESS"
}

export interface IContactUsState {
  isSending?: boolean;
  isLoading?: boolean;
  sentSuccessfully?: boolean;
  failedToSend?: boolean;
  helpIssueCategories?: IHelpIssueCategory[];
  supportTicketResponse: string;
}

export interface IHelpIssueCategory {
  name: string;
  code: string;
  issueCategories: IIssueCategory[];
  key: string;
}

export interface IContactUsSubmissionFields {
  userFirstName: string;
  userLastName: string;
  userEmail: string;
  issue: string;
  nonprofitName: string;
  phoneNumber: string;
  category: string;
  helpCategory: string;
}

export interface IContactUsSubmissionForm extends IContactUsSubmissionFields {
  helpCategoryComboValue: any;
}

export interface IIssueCategory {
  name: string;
  code: string;
  helpCategoryCode: string;
  key: string;
}
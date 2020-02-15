import { Icon, Separator } from "office-ui-fabric-react";
import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { Dispatch } from "redux";
import { InjectedFormProps, reduxForm } from "redux-form";
import Text from "src/components/text/Text";
import localeService from "src/services/LocaleService";
import { IApplicationState } from "src/store";
import { submitSupportTicket } from "src/store/contactus/actions";
import { IContactUsState, IContactUsSubmissionForm } from "src/store/contactus/types";
import LoadingButton from "../utilities/LoadingButton";
import ContactUsDropDown from "./ContactUsDropDown";
import "./ContactUsForm.scss";
import ContactUsInputFields from "./ContactUsInputFields";
import { AddComboBoxOptions, canRenderFormFields } from "./Util";

export interface IPropsFromState {
  contactUsProps: IContactUsState;
  contactUsFormValues: any;
  category?: string;
  subCategory?: string;
}

export interface IPropsFromDispatch {
  submitSupportTicket: typeof submitSupportTicket;
}

export type ContactUsFormProps = IPropsFromState &
  IPropsFromDispatch &
  RouteComponentProps &
  InjectedFormProps<IContactUsSubmissionForm>;


export class ContactUsForm extends React.Component<ContactUsFormProps> {
  constructor(props) {
    super(props);
  }

  public render() {
    const { handleSubmit, contactUsProps, contactUsFormValues } = this.props;
    let dropdownOptions = [];
    let selectedDropdownValue;

    const canRenderAllFields = canRenderFormFields(contactUsFormValues);
    const disableSubmitButton =
      canRenderAllFields && !this.isValidForSubmission(contactUsFormValues);


    dropdownOptions = AddComboBoxOptions([{
      "name": "Option 1", "code": "2", "key": "offers",
      "issueCategories": [{ "name": "Offer A", "code": "1", "key": "offers-and-pricing", "helpCategoryCode": "3" },
      { "name": "Offer B", "code": "4", "key": "microsoft-azure", "helpCategoryCode": "3" },
      { "name": "Offer C", "code": "2", "key": "select-products", "helpCategoryCode": "3" },
      { "name": "Offer D", "code": "3", "key": "microsoft-partner", "helpCategoryCode": "3" }]
    },
    {
      "name": "Option 2", "code": "3", "key": "eligibility",
      "issueCategories": [{ "name": "Offer A", "code": "1", "key": "eligibility-criteria", "helpCategoryCode": "3" },
      { "name": "Offer B", "code": "2", "key": "validation-process", "helpCategoryCode": "3" },
      { "name": "Offer C", "code": "3", "key": "check-status", "helpCategoryCode": "3" }]
    }]);


    return (
      <div aria-live="polite" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <section id="contactus-form" className="ms-Grid" dir="ltr">
          <form
            role="form"
            id="ContactUs"
            onSubmit={handleSubmit(this.submitForm)}
            onKeyDown={e => {
              if (e.key === "Enter" && document.activeElement.id !== "submitSupportRequest") {
                e.preventDefault(); // prevent implicit form submission via enter key (unless submit button is focused)
              }
            }}
          >
            <div className="ms-Grid">
              <h2>
                <Text category="ContactUs" id="Title" />
              </h2>
              {!contactUsProps.sentSuccessfully && (
                <p>
                  <Text category="ContactUs" id="FormSubHeader" />
                </p>
              )}
              <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12 ms-xl12">
                  {!contactUsProps.sentSuccessfully && (
                    <section id="contactus-dropdown-section">
                      <ContactUsDropDown
                        helpIssueCategories={contactUsProps.helpIssueCategories}
                        contactUsOptions={dropdownOptions}
                        selectedDropdownValue={selectedDropdownValue}
                        disabled={contactUsProps.sentSuccessfully ? true : false}
                      />
                    </section>
                  )}

                  {contactUsProps.sentSuccessfully && (
                    <section id="contactusSuccess">
                      <p>Thanks for your submission. Your ticket id is {contactUsProps.supportTicketResponse}</p>
                    </section>
                  )}

                  {canRenderAllFields && !contactUsProps.sentSuccessfully && (
                    <section id="contactus-details-section">
                      <Separator alignContent="center" id="legendSection">
                        <Icon iconName="Questionnaire" id="legendIcon" />
                        <Text category="ContactUs" id="UserInfoLegend" />
                      </Separator>
                      <div className="ms-Grid-row">
                        <ContactUsInputFields />
                      </div>
                    </section>
                  )}
                </div>
              </div>

              {canRenderAllFields && !contactUsProps.sentSuccessfully && (
                <div className="ms-Grid-row" id="contactus-button-section">
                  <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg4 ms-xl4">
                    <LoadingButton
                      loading={contactUsProps.isSending}
                      type="submit"
                      id="submitSupportRequest"
                      disabled={disableSubmitButton}
                      title={`${localeService.getText("ContactUs", "SubmitRequest")}`}
                      text={`${localeService.getText("ContactUs", "SubmitButtonText")}`}
                      width={160}
                    />
                  </div>
                  <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9 ms-xl10">
                    {contactUsProps.failedToSend && (
                      <div role="alert">
                        <p>Try Again!</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </form>
        </section>
      </div>
    );
  }

  private submitForm = (contactUsSubmissionForm: IContactUsSubmissionForm) => {
    this.props.submitSupportTicket();
  };

  private isValidForSubmission = (contactUsFormValues: { syncErrors: any }) => {
    return contactUsFormValues.syncErrors === undefined;
  };
}

const mapStateToProps = ({ contactUs, form }: IApplicationState): IPropsFromState => ({
  contactUsProps: contactUs,
  contactUsFormValues: form && form.contactus
});

const mapDispatchToProps: (dispatch: Dispatch) => IPropsFromDispatch = dispatch => ({
  submitSupportTicket: () => dispatch(submitSupportTicket())
});

const createReduxForm = reduxForm({
  form: "contactus"
});

export default createReduxForm(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ContactUsForm)
);

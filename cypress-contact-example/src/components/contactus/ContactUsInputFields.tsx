import * as React from "react";
import ContactUsTextInput from "./ContactUsTextInput";

export class ContactUsInputFields extends React.Component<{}> {
  public render() {
    return (
      <div id="contactUs-fields">
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg6 ms-xl6">
            <ContactUsTextInput
              id="userFirstName"
              multiline={false}
              label="FirstName"
              required={true}
              category="ContactUs"
              type="text"
            />
          </div>
          <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg6 ms-xl6">
            <ContactUsTextInput
              id="userLastName"
              multiline={false}
              label="LastName"
              required={true}
              category="ContactUs"
              type="text"
            />
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg6 ms-xl6">
            <ContactUsTextInput
              id="userEmail"
              multiline={false}
              label="UserEmail"
              required={true}
              category="ContactUs"
              type="email"
            />
          </div>
          <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg6 ms-xl6">
            <ContactUsTextInput
              id="phoneNumber"
              multiline={false}
              label="PhoneNumber"
              required={false}
              category="ContactUs"
              type="phone"
            />
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12 ms-xl12">
            <ContactUsTextInput
              id="orgName"
              multiline={false}
              label="OrgName"
              required={true}
              category="ContactUs"
              type="text"
            />
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12 ms-xl12">
            <ContactUsTextInput
              id="issue"
              multiline={true}
              label="HowCanWeHelp"
              required={true}
              category="ContactUs"
              type="text"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default ContactUsInputFields;

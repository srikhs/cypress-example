import * as React from "react";
import * as DocumentTitle from "react-document-title";
import ContactUsPage from "./pages/contactus/ContactUsPage";

export class Routes extends React.Component<{}> {
  public render() {
    return (
      // @ts-ignore: Import error
      <DocumentTitle title="CypressExample">
        <ContactUsPage />
      </DocumentTitle>
    );
  }
}

export default Routes;

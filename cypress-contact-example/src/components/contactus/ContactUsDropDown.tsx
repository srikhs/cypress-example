import { Dropdown, IDropdown } from "office-ui-fabric-react";
import * as React from "react";
import { Field } from "redux-form";
import localeService from "src/services/LocaleService";
import { IHelpIssueCategory } from "src/store/contactus/types";

export interface IContactUsDropDownProps {
  helpIssueCategories?: IHelpIssueCategory[];
  showFormLabel?: boolean;
  currentSelectedHelpValue?: string;
  currentSelectedCategoryValue?: string;
  contactUsOptions?: any[];
  selectedDropdownValue?: any;
  disabled: boolean;
}

export class ContactUsDropDown extends React.Component<IContactUsDropDownProps> {
  private dropdownRef = React.createRef<IDropdown>();

  public render(): JSX.Element {
    return (
      <div>
        {(
          <Field
            id="helpCategoryComboValue"
            name={"helpCategoryComboValue"}
            disabled={this.props.disabled}
            component={this.renderComboBox}
            required
          />
        )}
      </div>
    );
  }

  private onRenderItem = (props, defaultRender) => props.key !== "disabledDropdownKey" && defaultRender(props);

  private renderComboBox = ({ input, ...props }) => (
    <div>
      <Dropdown
        componentRef={this.dropdownRef}
        placeholder={localeService.getText("ContactUs", "SelectAnOption")}
        label={localeService.getText("ContactUs", "DropdownComboboxTitle")}
        ariaLabel={localeService.getText("ContactUs", "DropdownComboboxHelper")}
        options={this.props.contactUsOptions}
        required={true}
        onRenderItem={this.onRenderItem}
        onChanged={input.onChange}
        styles={{
          label: {
            fontSize: "17px",
            fontWeight: "bold"
          }
        }}
        selectedKey={this.props.selectedDropdownValue && this.props.selectedDropdownValue.key}
        disabled={props.disabled}
      />
    </div>
  );
}

export default ContactUsDropDown;

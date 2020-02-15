import { DropdownMenuItemType } from "office-ui-fabric-react";
import { IHelpIssueCategory } from "src/store/contactus/types";

export function AddComboBoxOptions(helpIssueCategories: IHelpIssueCategory[]) {
  const options = [];
  options.push({ key: "disabledDropdownKey", text: "Select an option" });

  helpIssueCategories.forEach(element => {
    options.push({
      key: element.code,
      text: element.name,
      itemType: DropdownMenuItemType.Header,
      additionalKey: element.key
    });

    element.issueCategories.forEach(issueCategory => {
      options.push({
        key: element.code + "/" + issueCategory.name,
        text: issueCategory.name,
        keyValue: element.code,
        additionalKey: issueCategory.key
      });
    });

    options.push({
      key: element.name + "divider",
      text: "-",
      itemType: DropdownMenuItemType.Divider,
      additionalKey: element.key
    });
  });

  // ensures that the last added divider is removed. This last section won't contain a divider, but would include the default container's closing line.
  options.pop();
  return options;
}

export function canRenderFormFields(contactUsFormValues: any): boolean {
  return (
    contactUsFormValues &&
    contactUsFormValues.values &&
    contactUsFormValues.values.helpCategoryComboValue &&
    contactUsFormValues.values.helpCategoryComboValue.key !== "disabledDropdownKey"
  );
}
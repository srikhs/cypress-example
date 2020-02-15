import { TextField } from "office-ui-fabric-react";
import * as React from "react";
import { Field } from "redux-form";
import localeService from "src/services/LocaleService";
import Text from "../text/Text";

export const requiredFieldValidator = (value: any) => (value ? undefined : "RequiredError");
export const emailAddressValidator = (value: any) =>
  value && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/i.test(value) ? "InvalidEmailError" : undefined;

export const inputTextFieldValidators = (required: boolean, type: "text" | "email" | "phone" | "url") => {
  const validators = [];
  if (required) {
    validators.push(requiredFieldValidator);
  }
  if (type === "email") {
    validators.push(emailAddressValidator);
  }

  return validators;
};

export interface IContactUsTextInputProps {
  id: string;
  multiline: boolean;
  required: boolean;
  label?: string;
  hasHelpText?: boolean;
  autoFocus?: boolean;
  type?: "text" | "email" | "phone" | "url";
  disabled?: boolean;
  category: string;
}

export const contactUsTextInputField = (field: any) => {
  const {
    input,
    type,
    id,
    category,
    name,
    label,
    required,
    readOnly,
    placeholder,
    maxLength,
    autoFocus,
    disabled,
    multiline,
    meta: { error, touched }
  } = field;
  return (
    <div className="form-field">
      <TextField
        {...input}
        type={type}
        id={id}
        category={category}
        name={name}
        required={required}
        placeholder={placeholder}
        readOnly={readOnly}
        autoFocus={autoFocus}
        maxLength={maxLength}
        disabled={disabled}
        className={touched && error ? "has-error" : null}
        multiline={multiline}
        ariaLabel={label}
      />
      {touched && error && (
        <div role="alert" className="error">
          <Text category={`${category}`} id={`${id}${error}`} />
        </div>
      )}
    </div>
  );
};

export class ContactUsTextInput extends React.Component<IContactUsTextInputProps> {
  public render() {
    const { id, multiline, label, required, autoFocus, type, disabled, category } = this.props;
    return this.renderTextInput(id, label, required, multiline, autoFocus, type, disabled, category);
  }

  private renderTextInput = (
    id: string,
    label: string,
    required: boolean,
    isMultiLine?: boolean,
    autoFocus?: boolean,
    type?: "text" | "email" | "phone" | "url",
    disabled?: boolean,
    category?: string
  ): JSX.Element => (
      <div className="ms-Grid-row field-row">
        {isMultiLine ? (
          <Field
            id={id}
            name={id}
            component={contactUsTextInputField}
            placeholder={
              localeService.getText(`${category}`, `${label}Placeholder`) || localeService.getText(`${category}`, label)
            }
            multiline={true}
            maxLength={2250}
            validate={inputTextFieldValidators(required, type)}
            disabled={disabled}
            category={category}
            required={required}
            label={label}
          />
        ) : (
            <Field
              id={id}
              name={id}
              component={contactUsTextInputField}
              type={type || "text"}
              placeholder={
                localeService.getText(`${category}`, `${label}Placeholder`) || localeService.getText(`${category}`, label)
              }
              validate={inputTextFieldValidators(required, type)}
              maxLength={type === "phone" ? 30 : 100}
              disabled={disabled}
              category={category}
              multiline={false}
              required={required}
              label={label}
            />
          )}
      </div>
    );
}
export default ContactUsTextInput;

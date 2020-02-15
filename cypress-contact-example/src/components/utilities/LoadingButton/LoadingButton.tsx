import { IButtonProps, PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { Spinner, SpinnerSize } from "office-ui-fabric-react/lib/Spinner";
import * as React from "react";
import "./LoadingButton.scss";

export type ILoadingButtonProps = IButtonProps & { loading: boolean };

const LoadingButton: React.FunctionComponent<ILoadingButtonProps> = props => {
  const { loading } = props;
  return (
    <div className="loading-button-container">
      {<PrimaryButton {...props} disabled={props.disabled || loading} />}
      {loading && <Spinner size={SpinnerSize.small} ariaLive="assertive" />}
    </div>
  );
};

export default LoadingButton;

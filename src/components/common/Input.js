import React from "react";
import PropTypes from "prop-types";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from "react-bootstrap";

const Input = ({
  label,
  id,
  required,
  error,
  className,
  children,
  placeholder,
  ...props
}) => {
  return (
    <FormGroup className={className} controlId={id} validationState={error ? 'error' : null}>
      {label && (
        <ControlLabel>
          {label}
          {required && <span className="text-danger"> *</span>}
        </ControlLabel>
      )}
      {children ? (
        <FormControl componentClass="select" {...props}>
          {children}
        </FormControl>
      ) : (
        <FormControl
          placeholder={placeholder || label}
          required={required}
          {...props}
        />
      )}
      {error && <HelpBlock>{error}</HelpBlock>}
    </FormGroup>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string
};

Input.defaultProps = {
  type: "text",
  error: null
};

export default Input;

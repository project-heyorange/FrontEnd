import React from "react"
import { Input as InputReactStrap, Label, FormFeedback, FormGroup } from "reactstrap";

import { useField, ErrorMessage } from "formik"

const Checkbox = ({ name, label, ...props }) => {
    const [field, meta] = useField(name);
    return (
        <FormGroup check inline>
            <InputReactStrap
                {...field}
                {...props}
                invalid={meta.error && meta.touched}
                type="checkbox"
            />
            <Label check for={name}>
                {label}
            </Label>
        </FormGroup>
    );
};

export default Checkbox;
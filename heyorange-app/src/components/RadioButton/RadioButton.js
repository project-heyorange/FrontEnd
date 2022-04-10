import React from "react"
import { Input, Label, FormGroup } from "reactstrap";

import { useField } from "formik"

const RadioButton = ({ name, label, ...props }) => {
    const [field, meta] = useField(name);
    return (
        <FormGroup check>
            <Input
                {...field}
                {...props}
                invalid={meta.error}
                type="radio"
                checked={field.value ? field.value === props.value : false}
            />
            <Label check for={name}>
                {label}
            </Label>
        </FormGroup>
    );
};

export default RadioButton;
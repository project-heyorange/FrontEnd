import React from "react"
import { Input, Label, FormGroup } from "reactstrap";

import { useField } from "formik"

const Checkbox = ({ name, label, ...props }) => {
    const [field, meta] = useField(name);
    return (
        <FormGroup check inline>
            <Input
                {...field}
                {...props}
                invalid={meta.error && meta.touched}
                type="checkbox"
                checked={field.value}
            />
            <Label check for={name}>
                {label}
            </Label>
        </FormGroup>
    );
};

export default Checkbox;
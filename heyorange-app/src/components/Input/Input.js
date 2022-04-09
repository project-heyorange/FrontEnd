import React from "react"
import { Input as InputReactStrap, Label, FormFeedback, InputGroup, FormGroup } from "reactstrap";

import { useField, ErrorMessage } from "formik"

const Input = ({ name, label, ...props }) => {
    const [field, meta] = useField(name);
    return (
        <FormGroup floating>
            <InputReactStrap
                {...field}
                {...props}
                invalid={meta.error && meta.touched}
            />
            <Label for={name}>
                {label}
            </Label>
            <FormFeedback invalid>
                <ErrorMessage
                        name={field.name}
                        component="p"
                    />
            </FormFeedback>
        </FormGroup>
    );
};

export default Input;
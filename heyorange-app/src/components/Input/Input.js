import React from "react"
import { Input as InputReactStrap, Label, FormFeedback, FormGroup } from "reactstrap";
import { useField, ErrorMessage } from "formik"
import "./Input.css";

const Input = ({ name, label, ...props }) => {
    const [field, meta] = useField(name);
    return (
        <FormGroup floating>
            <InputReactStrap 
            className="input"
                {...field}
                {...props}
                invalid={meta.error && meta.touched}
                placeholder={props.placeholder || "placeholder"}
    
            />
            <Label for={name}>
                {label}
            </Label>
            <FormFeedback invalid="true">
                <ErrorMessage
                        name={field.name}
                        component="p"
                    />
            </FormFeedback>
        </FormGroup>
    );
};

export default Input;
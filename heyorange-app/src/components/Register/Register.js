import React from "react"


import { Formik, Form } from "formik"
import { object, string, ref } from "yup";
import Input from "../Input";

const RegisterValidation = object().shape({
    name: string().required("obrigatorioCampo "),
    email: string()
      .required("Valid email required")
      .email("Valid email required"),
    password: string().min(8, "Pelo menos 8 caracteres").required("Required"),
    confirmPassword: string()
      .required("Please confirm your password")
      .oneOf([ref("password")], "Passwords do not match"),
  });

const Register = () => {
    
    const handleSubmit = (values) => {
        console.log(values)
    }

    return <div>
        <Formik
            initialValues={{
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={RegisterValidation}
        >
            {() => {
                return (
                    <Form>
                        <Input name="name" label="Name" />
                        <Input name="email" label="Email" />
                        <Input name="password" label="Password" type="password" />
                        <Input
                            name="confirmPassword"
                            label="Confirm Password"
                            type="password"
                        />
                        <div>
                            <button
                                type="submit"
                            >
                                Register
                            </button>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    </div>
}

export default Register
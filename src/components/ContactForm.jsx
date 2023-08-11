import { Formik, Field, Form, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';


const ContactSchema = Yup.object().shape({
    name: Yup.string().required('Name is Required'),
    number: Yup.string().min(6).max(10).required(''),
})

export const ContactForm = ({addContact}) => {
    const handleAddContact = (values, { resetForm }) => {
        addContact({...values, id: nanoid() });
        resetForm();
    };
    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    number: '',
                }}
                validationSchema={ContactSchema}
                onSubmit={handleAddContact}
                >
                    <Form autoComplete="off">
                        <label>
                            Name
                            <Field name="name" placeholder="Jane" />
                            <ErrorMessage name="name" />
                        </label>
                        <label >
                            Number
                            <Field name="number" placeholder="Enter Phone"/>
                            <ErrorMessage name="number" />
                        </label>
                        <button type="submit">Add Contact</button>
                    </Form>
            </Formik>
        </div>
    )
}
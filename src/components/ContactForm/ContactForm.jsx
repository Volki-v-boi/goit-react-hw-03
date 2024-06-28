import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Мінімальна кількість символів - 3")
    .max(50, "Максимальна кількість символів - 50")
    .required("Поле обов'язкове для заповнення"),
  number: Yup.string()
    .min(3, "Мінімальна кількість символів - 3")
    .max(50, "Максимальна кількість символів - 50")
    .required("Поле обов'язкове для заповнення"),
});

export default function ContactForm({ addContact }) {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        const newContact = {
          id: nanoid(),
          ...values,
        };
        addContact(newContact);
        resetForm();
      }}
    >
      {() => (
        <Form>
          <Field name="name" type="text" placeholder="Ім'я" />
          <ErrorMessage name="name" component="div" />

          <Field name="number" type="text" placeholder="Номер телефону" />
          <ErrorMessage name="number" component="div" />

          <button type="submit">Додати контакт</button>
        </Form>
      )}
    </Formik>
  );
}

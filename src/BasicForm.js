import { useFormik } from "formik";
import * as Yup from "yup";

const formValidationSchema = Yup.object({
  email: Yup.string().min(6, 'need'),
  password: Yup.string().min(8, "need a bigger password"),
});

export function BasicForm() {
  const formik = useFormik({
    initialValues: {
      email: "abc@gmail.com",
      password: "123",
    },
    ValidationSchema : formValidationSchema,
    onSubmit: (values) => {
      console.log("The form value are", values);
    },
  })

  return (
    <form className='basicform' onSubmit={formik.handleSubmit}>
      <input name="email"
        type="email"
        placeholder='Email'
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      {formik.errors.email}

      <input name="password"
        type="text"
        placeholder='Password'
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      {formik.errors.password}
      <button type="submit">Submit</button>
    </form>
  );
}


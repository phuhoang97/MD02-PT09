import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

function DemoValidateForm() {
  // Formik cho phép quản lý trạng thái các input trong form
  // Yup được dùng để thông báo lỗi cho người dùng (Validate form)
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      password: "",
      cfPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, "Name cần lớn hơn 5 ký tự")
        .max(10, "Name cần nhỏ hơn 10 ký tự")
        .required("Không được để trống"),
      email: Yup.string()
        .email("Email không đúng định dạng")
        .required("không được để trống"),
      address: Yup.string().required("Address không được để trống"),
      password: Yup.string()
        .min(8, "Password cần lớn hơn 8 ký tự")
        .required("Không được để trống"),
      cfPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password không trùng khớp")
        .required("Không được để trống"),
    }),

    onSubmit: (values) => {
      console.log(values);
      toast.success("Đăng ký thành công");
    },
  });

  return (
    <div>
      <h1>Demo Validate Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <label>Name: </label>
        <input
          type='text'
          name='name'
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && formik.touched.name && (
          <p style={{ color: "red" }}>{formik.errors.name}</p>
        )}
        <br />

        <label>Email: </label>
        <input
          type='text'
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && formik.touched.email && (
          <p style={{ color: "red" }}>{formik.errors.email}</p>
        )}
        <br />

        <label>Address: </label>
        <input
          type='text'
          name='address'
          value={formik.values.address}
          onChange={formik.handleChange}
        />
        {formik.errors.address && formik.touched.address && (
          <p style={{ color: "red" }}>{formik.errors.address}</p>
        )}
        <br />

        <label>Password: </label>
        <input
          type='text'
          name='password'
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.password && formik.touched.password && (
          <p style={{ color: "red" }}>{formik.errors.password}</p>
        )}
        <br />

        <label>Confirm Password: </label>
        <input
          type='text'
          name='cfPassword'
          value={formik.values.cfPassword}
          onChange={formik.handleChange}
        />
        {formik.errors.cfPassword && formik.touched.cfPassword && (
          <p style={{ color: "red" }}>{formik.errors.cfPassword}</p>
        )}
        <br />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default DemoValidateForm;

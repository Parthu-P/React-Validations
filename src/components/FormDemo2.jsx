import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";

function FormDemo2() {
  return (
    <div className="Container-fluid">
      <Formik
        initialValues={{ ProductId: 0, Name: "", Price: 0 }}
        validationSchema={yup.object({
          ProductId: yup.number().required("Product required"),
          Name: yup.string().required("Name required").min(4, "Name too short"),
          Price: yup.number().required("Price required"),
        })}
        onSubmit={(values) => alert(JSON.stringify(values))}
      >
        {
            form=>
            <Form>
            <dl>
              <dt>ProductId</dt>
              <dd>
                <Field type="number" name="ProductId"></Field>
              </dd>
              <dd className="text-danger">
                <ErrorMessage name="ProductId"></ErrorMessage>
              </dd>
              <dt>Name</dt>
              <dd>
                <Field type="text" name="Name"></Field>
              </dd>
              <dd className="text-danger">
                <ErrorMessage name="Name"></ErrorMessage>
              </dd>
              <dt>Price</dt>
              <dd>
                <Field type="number" name="Price"></Field>
              </dd>
              <dd className="text-danger">
                <ErrorMessage name="Price"></ErrorMessage>
              </dd>
            </dl>
            <button disabled={(form.isValid)?false:true}>Submit</button>
            <button style={{display:(form.dirty)?"inline":"none"}} className="ms-2">Save</button>
          </Form>
        }
      </Formik>
    </div>
  );
}

export default FormDemo2;

import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";
import * as yup from "yup"

function FormDemo() {
  // function validation(userDetails) {
  //   var error = {
  //     Username: "",
  //     Password: "",
  //     Mobile: "",
  //     City: "",
  //     Gender: "",
  //   };
  //   if (userDetails.Username === "") {
  //     error.Username = "Username required";
  //   }else{
  //     if(userDetails.Username.length<4){
  //       error.Username="Name too short"
  //     }
  //   }
  //   if (userDetails.Password === "") {
  //     error.Password = "Password required";
  //   }
  //   if (userDetails.City === "-1") {
  //     error.City = "City required";
  //   }
  //   return error;
  // }

  const formik = useFormik({
    initialValues: {
      Username: "",
      Password: "",
      Mobile: "",
      City: "",
      Gender: "",
    },
    //validate: validation,
    validationSchema:yup.object({
      Username:yup.string().required('username required').min(4,"Name too short").max(20),
      Password:yup.string().required('Password required'),
      Mobile:yup.string().required("Mobile required").matches(/\+91\d{10}/,"Invalid Mobile")
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <div className="container-fluid">
      <form className="w-25" onSubmit={formik.handleSubmit}>
        <h4>Register User</h4>
        <dl>
          <dt>Username</dt>
          <dd className="text-danger">
            <input type="text" name="Username" {...formik.getFieldProps("Username")} />
          </dd>
          <dd className="text-danger">{formik.errors.Username}</dd>
          <dt>Password</dt>
          <dd>
            <input
              type="password"
              name="Password"
              {...formik.getFieldProps("Password")}
              className="form-control"
            />
          </dd>
          <dd className="text-danger">{formik.errors.Password}</dd>
          <dt>Mobile</dt>
          <dd>
            <input
              type="text"
              name="Mobile"
              {...formik.getFieldProps("Mobile")}
              className="form-control"
            />
          </dd>
          <dt>City</dt>
          <dd>
            <select
              name="City"
              {...formik.getFieldProps("City")}
              className="form-select"
            >
              <option value="-1">Select City</option>
              <option>Delhi</option>
              <option>Bangalore</option>
            </select>
          </dd>
          <dd className="text-danger">{formik.errors.City}</dd>
          <dt>Gender</dt>
          <dd>
            <input
              type="radio"
              {...formik.getFieldProps("Gender")}
              name="Gender"
              value="Male"
            />
            Male
            <input
              type="radio"
              {...formik.getFieldProps("Gender")}
              name="Gender"
              value="Female"
            />{" "}
            Female
          </dd>
        </dl>
        <button className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  );
}

export default FormDemo;

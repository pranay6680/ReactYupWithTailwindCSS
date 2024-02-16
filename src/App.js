import logo from "./logo.svg";
import "./App.css";
import { useFormik, Form } from "formik";
import * as yup from "yup";


function App() {
  
   
  const pran = useFormik({
    // fixed way writing intialvalues
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
   
    //to make changes in intitalvalues we have to write below code [onsubmit is predefined hook in formik]
     
    //to validate errors use below code
    validationSchema: yup.object({
      name: yup
        .string()
        .max(12, "Should be atleast 12 characters")
        .min(4, "Shouldn't contain <= 4 chars")
        .required("Name is required"),
      email: yup
        .string()
        .email("Invalid email format")
        .required("Email is mandatory"),
      password: yup
        .string()
        .min(8, "Atleast eight characters")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
        .required("Password is required"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Password must match")
        .required("Confirm password is required"),
    }),
    onSubmit: (values, {request , setRequest}) => {
      const isConfirmed = window.confirm("You are Redirecting to other URL..")
      if(isConfirmed){
        window.location.href =  'https://chat.openai.com/c/0e574a9e-c0ea-45b2-808d-933459c33b4a';
      }
      // formik handles this submission itself when clicked on button
    },
   
  });
  return (
    <div className="App grid place-content-center h-dvh">
      <form className="p-8 border-2 border-lime-500 rounded-md"onSubmit={pran.handleSubmit}>
        <div className="flex justify-between">
        <label className="font-bold">Name:</label>
        <input
          className=" px-1.5 w-48 outline-transparent border-2 border-lime-500  rounded-md after:bg-slate-300"
          type="text"
          name="name"
          value={pran.values.name}
          onChange={pran.handleChange}
          onBlur={pran.handleBlur}
        />
        </div>
        {/* Here onChange/handleChange , onBlur/handleBlur having inbuilt formik function to handle events */}
        {pran.errors.name ? <div className="before:content-['*'] w-5f8 text-red-700 pt-3 ml-20">{pran.errors.name}</div> : null}
        {/* This line used to display the error message */}
        <br />
       
        <div className="flex justify-between">
        <label className="font-bold">Email:</label> 
        <input
          className="px-1.5  outline-transparent after:bg-slate-300 w-48  border-2 border-lime-300 rounded-md"
          type="email"
          name="email"
          value={pran.values.email}
          onChange={pran.handleChange}
          onBlur={pran.handleBlur}
        />
        </div>
        {pran.errors.email ? <div className="before:content-['*'] w-5f8 text-red-700 pt-3 ml-20">{pran.errors.email}</div> : null}
        <br />
        <div className="flex justify-between">
        <label className="font-bold">Password:</label>
        <input
          className="px-1.5  outline-transparent after:bg-slate-300 w-48  border-2 border-rose-300 rounded-md "
          type="password"
          name="password"
          value={pran.values.password}
          onChange={pran.handleChange}
          onBlur={pran.handleBlur}
        />
        </div>
        {pran.errors.password ? <div className="before:content-['*'] w-5f8 text-red-700 pt-3 ml-20">{pran.errors.password}</div> : null}
        <br />
        <div className="flex justify-between">
        <label className="font-bold">ConfirmPassword:</label>
        <input
          className="px-1.5  outline-transparent after:bg-slate-300 w-48  border-2 border-rose-500 rounded-md "
          type="password"
          name="confirmPassword"
          value={pran.values.confirmPassword}
          onChange={pran.handleChange}
          onBlur={pran.handleBlur}
        />
        </div>
        {pran.errors.confirmPassword ? (
          <div className="before:content-['*'] w-5f8 text-red-700 pt-3 ml-20">{pran.errors.confirmPassword}</div>
        ) : null}
        <br/>
        <button className="border-2 p-3 border-violet-500 rounded-md " type="submit" >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;

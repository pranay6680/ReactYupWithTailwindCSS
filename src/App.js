import logo from './logo.svg';
import './App.css';
import { useFormik } from 'formik';


function App() {
  const pran = useFormik({
    // fixed way writing intialvalues
    initialValues:{
      name:'',
      email:'',
      password:"" 
    },
    //to make changes in intitalvalues we have to write below code [onsubmit is predefined hook in formik]
    onSubmit:(values)=>{
     console.log('onsubmit',values)  //ignore this command
    },
    //to validate errors use below code [validate is a predefined hook in formik]
    validate:(values)=>{       //[Here values takes the initialvalues properties]
    let errors = {};           //[Assigned a empty braces to display error message]
  console.log("console",values)
      if(!values.name){
        errors.name= "Name required"
      }
      if(!values.email){
        errors.email= "email required"
      }
      if(!values.password){
        errors.password= "password required"
      }
      return errors;
    }
  })
  return (
    <div className="App">
      <form onSubmit={pran.handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={pran.values.name} onChange={pran.handleChange} onBlur={pran.handleBlur}/> 
        {/* Here onChange/handleChange , onBlur/handleBlur are the inbuuilt formik function to handle events */}
        {pran.errors.name?<div>{pran.errors.name}</div>:null}
        <br/>
        <label>Email:</label>
        <input type="email" name="email" value={pran.values.email} onChange={pran.handleChange}/>
        {pran.errors.email?<div>{pran.errors.email}</div>:null}
        <br/>
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
}

export default App;

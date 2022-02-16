import { useState, useEffect } from "react";


function App() {

const initialValues = {
username: "", 
DOB:"",  
Gender:"",  
Class:"", 
Division:"" 
};

const [formValues, setFormValues] = useState(initialValues);
const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);


const handleChange = (e) => {
const { name, value } = e.target;
setFormValues({...formValues, [name]: value});
};

const handleSubmit = (e) => {
e.preventDefault();
setFormErrors(validate(formValues));
setIsSubmit(true);
};
 
 useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);


const validate = (values) => {
const errors = {};
if (!values.username){ errors.username = "Username is required!";}
if (!values.DOB){ errors.DOB = "DOB is required!";}

if (!values.Gender){ errors.Gender = "Gender is required!";}
if (!values.Class){ errors.Class = "Class is required!";}
if (!values.Division){ errors.Division = "Division is required!";
}

return errors;
};


    return (
     <div
    style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}
    >

{Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Submitted successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}
     <form onSubmit = {handleSubmit} >
        <label>
          Name : <input 
           type="text" 
            name ='username' 
value={formValues.username}
onChange ={handleChange}
                    />
        </label><br/><br/>

       <label>
Date of Birth : <input 
        name ='DOB'  
         type="date"
value={formValues.DOB}
onChange ={handleChange} />
       </label><br/><br/>

      <label>
      Gender : 
      <input 
     name ='Gender' 
    type="radio"  
 value="Male"
 onChange ={handleChange}
        /> Male

        <input 
   name ='Gender' 
   type="radio"  
  value="Female" 
  onChange ={handleChange}
       /> Female
        </label>
       <br/><br/>

       Class : 
      <select 
    name="Class" 
   id="selectList"
  value={formValues.Class}
  onChange ={handleChange}>
   <option value="0">Select Class</option>
   <option value="1">I</option>
   <option value="2">II</option>
<option value="3">III</option>
<option value="4">IV</option>
<option value="5">V</option>
<option value="6">V1</option>
<option value="7">V11</option>
<option value="8">V111</option>
<option value="9">1X</option>
<option value="10">X</option>
<option value="11">X1</option>
<option value="12">X12</option>
</select><br/><br/>

Division : <select name="Division" id="selectList"
value={formValues.Division}
onChange ={handleChange}>
   <option value="0">Select Division</option>
   <option value="1">A</option>
   <option value="2">B</option>
<option value="3">C</option>
</select><br/><br/>

        <input type="submit" value="Submit" />

      </form>

    </div>  
    );
 
}

export default App;




// date > = 2003 Name-alpha numeric  
// class division option > option 0
// Error msgs should be shown on the screen instead of console.log

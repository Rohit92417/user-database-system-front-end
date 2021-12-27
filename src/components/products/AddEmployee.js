import React, { useState } from "react";
import axios from 'axios'

//import { useHistory } from "react-router-dom";

const AddEmployee = () => {
  // let history = useHistory(); // Use for Navigate on Previous
  const [emp, setEmp] = useState({
    full_name: "",
    emai: "",
    age: "",
    salary: ""
  });

  const { full_name,email,age,salary} = emp;
  
  const onInputChange = e => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };
  
  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/add",emp);
    alert('Data Inserted');
    // history.push("/");
  };
  return (
    <div className="container bg-light">
      <div class="row">  
       <div className="col-sm-4 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Employee</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Employee Name"
              name="full_name"
              value={full_name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Email"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Age"
              name="age"
              value={age}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Salary"
              name="salary"
              value={salary}
              onChange={e => onInputChange(e)}
            />
          </div>
         
          <button className="btn btn-primary btn-block">Add Employee</button>
        </form>
      </div>
    </div>
  </div>  
  );
};

export default AddEmployee;

import React, { useState, useEffect } from "react";
import axios from "axios";
import {useHistory, useParams } from "react-router-dom";

const EditEmployee = () => {
  
  let history = useHistory(); //The useHistory hook gives you access to the history instance that you may use to navigate.
  const { id } = useParams();  //The useParams() hook helps us to access the URL parameters from a current route. 
  const [emp, setEmp] = useState({
    full_name: "",
    email: "",
    age: "",
    salary: ""
  });

  const { full_name,email,age,salary} = emp;
  const onInputChange = e => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/update/${id}`, emp);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8000/api/employee/${id}`);
    setEmp(result.data);
  };
  return (
    <div className="container">
     <div className="row"> 
      <div className="col-sm-5 col-offset-3 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Employee</h2>
        <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Id"
              name=""
              value={id}
              onChange={e => onInputChange(e)}
            />
          </div>
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
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Employee Email address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Employee Age "
              name="age"
              value={age}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Employee salary "
              name="salary"
              value={salary}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-secondary btn-block">Update Employee</button>
        </form>
       </div>
      </div> 
    </div>
  );
};

export default EditEmployee;

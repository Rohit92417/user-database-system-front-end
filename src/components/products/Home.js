import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [emp, setEmp] = useState([]);

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    const result = await axios.get("http://localhost:8000/api/employees");
    setEmp(result.data.reverse());
  };

  const deleteEmployee = (employeeId) =>
  {
    console.log(employeeId)
    axios.delete('http://localhost:8000/api/delete/'+employeeId)
    .then((result)=>{
      loadEmployee();
    })
    .catch(()=>{
      alert('Error in the Code');
    });
  };

  return (
    <div className="container">
      <div className="py-4">
        <h3 class="mb-3 text-center">Employee Details</h3>
        <table class="table border shadow">
          <thead class="thead-primary">
            <tr>
              <th scope="col">Employee ID</th>
              <th scope="col">Employee Name</th>
              <th scope="col">Employee Email</th>
              <th scope="col">Employee Age</th>
              <th scope="col">Employee Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {emp.map((element) => (
              <tr>
                <th scope="row">{element.id}</th>
                <td>{element.full_name}</td>
                <td>{element.email}</td>
                <td>{element.age}</td>
                <td>{element.salary}</td>
                <td>
                 <Link class=" mr-2" to={`/employee/edit/${element.id}`}>
                     <i class="fa fa-edit" aria-hidden="true"></i> 
                  </Link>
                  <Link class="" onClick={() => deleteEmployee(element.id)}>
                  <i class="fa fa-trash" aria-hidden="true"></i> 
                  </Link>
                </td>
              </tr>
             ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;

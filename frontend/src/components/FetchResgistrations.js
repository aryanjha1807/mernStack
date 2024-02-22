import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchResgistrations = () => {
  const [res, setresult] = useState([]);
  const [formdata, setformdata] = useState({
    name: '', role: '', email: '', password: ''
  });

  const FetchData = async () => {
    axios.get('http://localhost:8080/retrieve', {})
      .then((response) => {
        setresult(response.data);
        console.log(response.data);
      });
  };

  useEffect(() => {
    FetchData();
  }, []);

  const updateData = async (id) => {
    const res = await axios.put(`http://localhost:8080/users/${id}`, formdata);
    FetchData();
    console.log(res.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/users/${id}`)
      .then((response) => {
        console.log(response.data);
      });
    FetchData();
  };

  const changeHandler = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  return (
    <div><br></br><br></br>
      <center><h1><b><u><big>REGISTRATIONS</big></u></b></h1></center><br></br><br></br><br></br>
      <table border='2' align='center' border='20' style={{ borderColor: 'black' }}>
        <tr style={{ backgroundColor: 'lightblue', fontSize: '25px' }}>
          <th>Name</th>
          <th>Role</th>
          <th>Email</th>
          <th>Password</th>
          <th>Update</th>
          <th style={{ width: '200px' }}>Delete</th>
        </tr>
        {res.map((user, index) => (
          <tr key={index} style={{ backgroundColor: 'lightyellow' }}>
            <td style={{ width: '100px', textAlign: 'center' }}>{user.name}</td>
            <td style={{ width: '100px', textAlign: 'center' }}>{user.role}</td>
            <td style={{ width: '200px', textAlign: 'center' }}>{user.email}</td>
            <td style={{ width: '100px', textAlign: 'center' }}>{user.password}</td>
            <td>
              <div style={{ width: '800px', height: '50px', backgroundColor: 'lightgrey' }}>
                <input type='text' name='name'
                  placeholder='new name' onChange={changeHandler} />
                <input type='text' name='role'
                  placeholder='new role' onChange={changeHandler} />
                <input type='text' name='email'
                  placeholder='new email' onChange={changeHandler} />
                <input type='password' name='password'
                  placeholder='new password' onChange={changeHandler} />
                <button onClick={() => updateData(user._id)}>update</button>
              </div>
            </td>
            <td>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={() => handleDelete(user._id)}>Delete</button>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div >
  );
};

export default FetchResgistrations;

import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import BackButtom from '../components/BackButton'
import axios from 'axios'

const EditStudent = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [faculty, setFaculty] = useState('');
  const navigate = useNavigate();

  const id = useParams().id;
  useEffect(() => {
    axios.get(`http://localhost:8000/students/${id}`)
      .then((res) => {
        setName(res.data.name);
        setAddress(res.data.address);
        setFaculty(res.data.faculty);
      })
      .catch((error) => {
        console.log(error.message);
      })
  }, [])

  function handleUpdateStudent() {
    const data = {
      name,
      address,
      faculty
    }
    axios.put(`http://localhost:8000/students/${id}`, data)
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        console.log(error.message);
      })
  }
  return (
    <div className=''>
      <h1 className='text-center p-4 bg-blue-300 text-3xl'>Edit Student</h1>
      <div className="flex justify-end p-4">
        <BackButtom />
      </div>
      <div className='p-4'>
        <div className="mt-2">
          <label className='mr-4'>Name</label><br />
          <input type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border-b-2 border-black w-[80%] outline-none' />
        </div>
        <div className="mt-2">
          <label className='mr-4'>Address</label><br />
          <input type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className='border-b-2 border-black w-[80%] outline-none' />
        </div>
        <div className="mt-2">
          <label className='mr-4'>Faculty</label><br />
          <input type="text"
            value={faculty}
            onChange={(e) => setFaculty(e.target.value)}
            className='border-b-2 border-black w-[80%] outline-none' />
        </div>
        <button onClick={handleUpdateStudent} className='mt-4 bg-blue-500 text-white p-2 rounded-lg'>Update</button>
      </div>
    </div>
  )
}

export default EditStudent
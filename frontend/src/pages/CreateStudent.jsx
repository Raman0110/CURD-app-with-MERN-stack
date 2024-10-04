import React, { useState } from 'react'
import BackButton from '../components/BackButton'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const CreateStudent = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [faculty, setFaculty] = useState('');
  const navigate = useNavigate();
  const handleAddStudent = () => {
    const data = {
      name,
      address,
      faculty
    }
    axios.post("http://localhost:8000/students", data)
      .then(() => {
        navigate('/');
      })
      .catch(() => {
        console.log(error.message);
      })
  }
  return (
    <div className=''>
      <h1 className='text-center p-4 bg-blue-300 text-3xl'>Add Student</h1>
      <div className="flex justify-end p-4">
        <BackButton />
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
        <button onClick={handleAddStudent} className='mt-4 bg-blue-500 text-white p-2 rounded-lg'>Create</button>
      </div>
    </div>
  )
}

export default CreateStudent
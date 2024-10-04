import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton';

const ShowStudent = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [faculty, setFaculty] = useState('');
  const id = useParams().id
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
  return (
    <div>
      <h1 className='text-center p-4 bg-green-300 text-3xl'>{name}'s details</h1>
      <div className="flex m-4 justify-end">
        <BackButton />
      </div>
      <div className="flex flex-col w-[800px] justify-center border-green-500 border-2">
        <h1>Name: {name}</h1>
        <h1>Address: {address}</h1>
        <h1>Faculty: {faculty}</h1>
      </div>
    </div>
  )
}

export default ShowStudent
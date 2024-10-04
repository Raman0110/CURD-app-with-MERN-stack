import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import BackButton from '../components/BackButton';

const DeleteBook = () => {
  const navigate = useNavigate();
  const id = useParams().id;
  function handleDelete() {
    axios.delete(`http://localhost:8000/students/${id}`)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error.message);
      })
  }
  return (
    <div>
      <BackButton />
      <div className="flex flex-col items-center border-2 border-black rounded-xl w-[600px] p-8 max-auto">
        <h3 text-2xl>
          Are you sure to delete this student?
        </h3>
        <button onClick={handleDelete} className='bg-red-500 m-8 w-full text-white'>Yes Delete</button>
      </div>
    </div>
  )
}

export default DeleteBook
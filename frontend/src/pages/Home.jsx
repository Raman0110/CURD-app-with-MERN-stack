import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/students')
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      })
  }, [])
  return (
    <div>
      <h1 className='text-center p-4 bg-green-300 text-3xl'>Student List</h1>
      <div className="flex justify-end p-4">
        <Link to={'/students/create'}>
          <button className='bg-blue-500 text-white p-3 rounded-xl'>Add Student</button>
        </Link>
      </div>
      <table className='mt-4 w-full border-separate border-spacing-2'>
        <thead>
          <tr>
            <th className='border border-black rounded-md'>S.N</th>
            <th className='border border-black rounded-md'>Name</th>
            <th className='border border-black rounded-md'>Address</th>
            <th className='border border-black rounded-md'>Faculty</th>
            <th className='border border-black rounded-md'>Manage</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {
            students.map((student, index) => (
              <tr key={student._id}>
                <td className='border border-black rounded-md'>{index + 1}</td>
                <td className='border border-black rounded-md'>{student.name}</td>
                <td className='border border-black rounded-md'>{student.address}</td>
                <td className='border border-black rounded-md'>{student.faculty}</td>
                <td className='border border-black rounded-md'>
                  <Link to={`/students/view/${student._id}`}>
                    <button className='bg-green-300 p-3 rounded-md mr-1 text-white'>View</button>
                  </Link>
                  <Link to={`/students/edit/${student._id}`}>
                    <button className='bg-yellow-300 p-3 rounded-md mr-1 text-white'>Edit</button>
                  </Link>
                  <Link to={`/students/delete/${student._id}`}>
                    <button className='bg-red-500 p-3 rounded-md mr-1 text-white'>Delete</button>
                  </Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Home
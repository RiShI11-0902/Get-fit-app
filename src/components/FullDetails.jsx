import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from './Footer'

const FullDetails = () => {
  const params = useParams()
  const [data, setData] = useState([])
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c89334ff17msh32ab074cff7db3fp124129jsn65a99f4e0249',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  useEffect(() => {
    fetch(`https://exercisedb.p.rapidapi.com/exercises/exercise/${params.id}`, options)
      .then(response => response.json())
      .then(response => setData(response))
      .catch(err => console.error(err));
  }, [])
  console.log(data);
  // const [...exc] = data
  return (
    <>
    <div className='flex flex-col lg:flex-row mx-auto w-fit lg:space-x-20 mt-20'>
      <div>
        <img src={data.gifUrl} alt="Demo" className='w-[100%]' />
      </div>
      <div className='text-center w-fit ml-12'>
        <p className='text-2xl mt-10 font-extrabold'>Name: {data.name} </p>
        <p className='text-2xl mt-10'> <span>Body Part: </span>{data.bodyPart} </p>
        <p className='text-2xl mt-10'><span>Equipment: </span>{data.equipment} </p>
        <p className='text-2xl mt-10'><span>Target: </span>{data.target} </p>
      </div>
    </div>
<Footer/>
    </>
  )
}

export default FullDetails
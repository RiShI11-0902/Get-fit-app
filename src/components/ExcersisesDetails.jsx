import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ExcersisesDetails = () => {

  const [data, setData] = useState([])
  const BodyPartList = ["back", "cardio", "chest", "lower arms", "lower legs", "neck", "shoulders", "upper arms", "upper legs", "waist"]

  const [SelectPart, setSelectPart] = useState("back")

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c89334ff17msh32ab074cff7db3fp124129jsn65a99f4e0249',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  useEffect(() => {
    fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${SelectPart}`, options)
      .then(response => response.json())
      .then(response => setData(response))
      .catch(err => console.error(err));
  }, [SelectPart])
  // console.log(data);
  return (
    <>

      <div className='grid gap-6 grid-cols-2 md:grid-cols-5 mt-5  top-0 left-12   mx-auto p-5 w-fit'>
        {
          BodyPartList.map((i) => {
            return <div className=''>
              <div onClick={()=> setSelectPart(i)} className="box1 active:bg-cyan-600 stroke-cyan-600 w-fit text-center cursor-pointer hover:scale-105 rounded-3xl p-4 shadow-lg shadow-slate-400 focus:outline-double focus:outline-3 focus:outline-offset-2 ">
                <img src="" className="w-20 mx-auto" />
                <p className="mt-2 font-extrabold text-sm ">{i}</p>
              </div>
            </div>
          })
        }
      </div>
      <div className="list mt-[5rem]">
        <p className='font-medium w-fit mx-auto p-5 mt-8 underline '>Note: IT TAKES SOME TIME TO LOAD THE DEMO OF EXCERCISES</p>

        <div className='md:grid md:grid-cols-3 p-4 md:gap-4'>
        { 
            data.map((i) => {
            return <div className='flex  p-3 mt-10 rounded-lg shadow-2xl shadow-purple-400'>
              <img className='w-40' src={i.gifUrl} alt="" srcset="" />
              <div className='space-y-2'>
              <p className='font-bold'>BODY PART: { i.bodyPart}</p>
              <p className='font-extrabold '>NAME :{i.name}</p>
              <p className='font-semibold'>EQUIPMENT: {i.equipment}</p>
              <p className='font-semibold'>TARGET: {i.target}</p>
              <div>
                <Link to={`/FullDetails/${i.id}`}>
              <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Details</button>
                </Link>
             

              </div>

              </div>
            </div>
          })
        }
        </div>

        
      </div>

    </>
  )
}

export default ExcersisesDetails
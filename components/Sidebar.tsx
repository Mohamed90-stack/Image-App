import React, { useState } from 'react'
import Image from 'next/image'
import Planet1 from '../public/planet-1.png';
import { AiFillFire } from 'react-icons/ai';

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  return (
    <div>

      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-20 ml-20">
        <a href="#">
            <Image 
              className="" src={Planet1} alt="" height={100} width={100} objectFit="contain" 
              onClick={() => setShowModal(true)}
            />
        </a>
        <div className="p-2">
            <a href="#">
                <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Wolf Valleys Space Center</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Number of flights: 1596</p>
        </div>
      </div>
      {showModal ? (
        <div className="mt-10 flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto p-2">
          <Image src={Planet1} width={100} height={100} objectFit="contain" alt=""/>
          <h2 className="text-base mt-2 mx-4 text-gray-400 font-weight-600 text-center">
            May your life be filled with success and achievements.
            Congratulations!
          </h2>
          <button
            className="my-5 w-auto px-8 h-10 bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-weight:600"
            onClick={() => setShowModal(false)}
            >
            Close
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default Sidebar
import React, { useState } from 'react';
import Image from 'next/image';
import Planet1 from '../public/planet-1.png';
import { AiFillFire } from 'react-icons/ai';

const TestModals = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  return ( 
    <div className="flex md:flex-col justify-center items-center mt-40">
      <div className="flex gap-5 ">
        <button
          className="bg-blue-600 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
      font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Open First Modal <AiFillFire className="text-xl" />
        </button>
        <button
          className="border border-blue-100  text-gray-800 hover:text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
      font-bold px-6 h-12 rounded-md hover:shadow-lg outline-none focus:outline-none"
          type="button"
          onClick={() => setShowSecondModal(true)}
        >
          Open Second Modal <AiFillFire className="text-xl" />
        </button>
      </div>
      {showModal ? (
        <div className="mt-10 flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto p-2">
          <Image src={Planet1} width={100} height={100} objectFit="contain" />
          <h2 className="text-base mt-2 mx-4 text-gray-400 font-semibold text-center">
            May your life be filled with success and achievements.
            Congratulations!
          </h2>
          <button
            className="my-5 w-auto px-8 h-10 bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-semibold"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </div>
      ) : null}

      {/* second modal */}
      {showSecondModal ? (
        <div className="mt-10 flex justify-center items-center flex-col w-1/2 rounded-lg shadow-xl h-auto p-2">
          <Image src={Gift} width={100} height={100} objectFit="contain" />
          <h2 className="text-base mt-2 text-gray-400 font-semibold text-center mx-4">
            Hurry! Your USD 50,00 Gift Voucher is about to expire! Shop now the
            latest Summer-Trends.
          </h2>
          <div className="flex gap-5">
            <button
              className="my-5 w-auto px-8 h-10 bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-semibold"
              onClick={() => setShowSecondModal(false)}
            >
              Claim Now
            </button>
            <button
              className=" w-auto px-12 my-5 border border-red-100 h-10 hover:bg-red-700 hover:text-white   rounded-md text-red-600  hover:shadow-lg font-semibold"
              onClick={() => setShowSecondModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </div>
      // <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-20 pb-0">
      //     <a href="#">
      //         <Image className="w-full" src="/../public/planet-1.png" alt="" height="100" width="100" />
      //     </a>
      //     <div className="p-2">
      //         <a href="#">
      //             <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Wolf Valleys Space Center</h5>
      //         </a>
      //         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Number of flights: 1596</p>
      //     </div>
      // </div>

  )
}

export default TestModals
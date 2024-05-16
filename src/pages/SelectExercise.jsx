import React from 'react'
import logo from '../assets/Logo.png'
import { Typography } from '@material-tailwind/react'


const SelectExercise = () => {
    return (
        <>
            <div className='w-full h-screen bg-[#F1F1F1]'>
                <div className='pt-2 pl-3'>
                    <img src={logo} alt="logo" className='w-24' />
                </div>
                <div className='flex justify-center'>
                    <Typography className='poppins-bold text-8xl w-[34.5rem]'>Select your Exercise.</Typography>
                </div>
                <div class="flex mt-24 text justify-center gap-x-32">
                    <div className='w-96 h-40 bg-[#94C9D8]  rounded-[2rem] outline outline-2'>
                        <Typography className='poppins-bold text-6xl w-full h-full text-center pt-10'>Bicep Curl</Typography>
                    </div>
                    <div className='w-96 h-40 bg-[#F7813C] rounded-[2rem] outline outline-2'>
                        <Typography className='poppins-bold text-6xl w-full h-full text-center pt-5'>Goblet Squat</Typography>
                    </div>
                </div>
            </div>
        </>
      )
}

export default SelectExercise

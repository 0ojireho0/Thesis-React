import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/Logo.png"
import { Button, Typography } from '@material-tailwind/react'
import {Progress} from '@material-tailwind/react'

const Result = () => {

    const navigate = useNavigate()

    const handleBacktoMenu = () =>{
        navigate('/select_exercise')
    }

    useEffect(()=>{
        const getData = JSON.parse(localStorage.getItem('userData'))
        if(getData){
            console.log("Access granted")
        }else{
            navigate('/')
        }
    },[])

  return (
    <>
    <div className='w-full h-screen bg-[#94C9D8]'>
      <div className='flex justify-between'>
        <div className='w-full mt-2 ml-3'>
            <img src={logo} alt="" className=' w-24' />
        </div>
        <div className='mr-10 mt-3'>
            <Typography className='poppins-bold text-9xl'>Results.</Typography>
        </div>
      </div>
      <div className='ml-32'>
        <div className='mb-10'>
            <Typography className='text-white poppins-bold text-6xl'>Set</Typography>
        </div>
        <div className='flex items-center'>
            <div className='w-16 h-16 ml-5 rounded-full bg-[#D9D9D9] border-[#1C272E] border-4'>
                <Typography className='poppins-bold text-3xl pl-[1.30rem] pt-2'>1</Typography>
            </div>
            <div className='ml-20'>
                <Progress value={70} className='w-[50rem] h-7' label={<Typography className='poppins-bold'>70%</Typography>} />
            </div>
            <div className='ml-10'>
                <Typography className='poppins-bold text-white text-2xl'>7 out of 10 repetitions</Typography>
            </div>
        </div>
        <div className='vl ml-[3.1rem]'></div>
        <div className='flex items-center'>
            <div className='w-16 h-16 ml-5 rounded-full bg-[#D9D9D9] border-[#1C272E] border-4'>
                <Typography className='poppins-bold text-3xl pl-[1.30rem] pt-2'>2</Typography>
            </div>
            <div className='ml-20'>
                <Progress value={90} className='w-[50rem] h-7' label={<Typography className='poppins-bold'>90%</Typography>} />
            </div>
            <div className='ml-10'>
                <Typography className='poppins-bold text-white text-2xl'>9 out of 10 repetitions</Typography>
            </div>
        </div>
        <div className='vl ml-[3.1rem]'></div>
        <div className='flex items-center'>
            <div className='w-16 h-16 ml-5 rounded-full bg-[#D9D9D9] border-[#1C272E] border-4'>
                <Typography className='poppins-bold text-3xl pl-[1.30rem] pt-2'>3</Typography>
            </div>
            <div className='ml-20'>
                <Progress value={30} className='w-[50rem] h-7'  label={<Typography className='poppins-bold'>70%</Typography>} />
            </div>
            <div className='ml-10'>
                <Typography className='poppins-bold text-white text-2xl'>3 out of 10 repetitions</Typography>
            </div>
        </div>
      </div>
      <div className='flex justify-center items-center mt-10'>
        <Button onClick={handleBacktoMenu}>Back to main menu</Button>
      </div>
    </div>
    </>
  )
}

export default Result

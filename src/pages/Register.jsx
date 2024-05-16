import React, {useState} from 'react'
import logo from '../assets/Logo.png'
import { Input, Typography, Button, Radio } from '@material-tailwind/react'


import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {


    const [fullname, setFullname] = useState('')
    const [age, setAge] = useState(1)
    const [injury1, setInjury1] = useState("")
    const [injury2, setInjury2] = useState("")
    const [failed, setFailed] = useState("")
    const [showMsgInjury, setShowMsgInjury] = useState("")
  
  
    const navigate = useNavigate()
  
    const registerUser = async(e) =>{
      e.preventDefault();
     try {
      const resp = await axios.post("//localhost:5000/register",{
        fullname,
        age,
        injury1,
        injury2
      })
      console.log(resp)
  
      if (resp.data.success == "success"){
        navigate('/select_exercise')
      }else if(resp.data.injury == "Injuries are not allowed"){
        setShowMsgInjury(resp.data.injury)
      }
      else{
        setFailed(resp.data.failed)
      }
  
     } catch (error) {
      console.log(error)
     }
    }
  
  
    return (
      <>
        <div className='w-full h-screen bg-black bg-gradient-to-tl from-[#F7813C] to-[#FFE6D7]'>
          <div className='pt-2 pl-3'>
            <img src={logo} alt="logo" className=' w-24' />
          </div>
          <div className='pr-20'>
            <h1 className='poppins-bold text-9xl text-[#1C272E] text-end'>Register.</h1>
          </div>
          <div className='w-full bg-white h-[31.8rem] rounded-tl-[15rem] pt-20'>
            <form onSubmit={registerUser}>
              <div className='grid grid-cols-2 gap-4 place-content-between h-48 ml-[20rem] items-center'>
                <div className='w-96 '>
                <Input size="lg" label="Fullname" className='' value={fullname} onChange={(e)=>setFullname(e.target.value)} required/>
                </div>
                <div>
                  <h1 className=' text-red-900 font-bold'>{showMsgInjury}</h1>
                  <h2 className='poppins-medium text-xl mt-2'>Do you have injury? </h2>
                  <Radio name='injury1' label={<Typography>Yes</Typography>} value="yes" onChange={(e)=>setInjury1(e.target.value)} required/>
                  <Radio name='injury1' label={<Typography>No</Typography>} value="no" onChange={(e)=>setInjury1(e.target.value)} required/>
                </div>
                <div className='w-96'>
                  <Input size="lg" label="Age" className='' color='orange' type='number' value={age} onChange={(e)=>setAge(e.target.value)} required />
                  <h1 className=' text-red-900 font-bold'>{failed}</h1>
                </div>
                <div>
                  <h2 className='poppins-medium text-xl mt-2 w-96'>Do you have any underlying health conditions? </h2>
                  <Radio name='injury2' label={<Typography>Yes</Typography>} value="yes" onChange={(e)=>setInjury2(e.target.value)} required/>
                  <Radio name='injury2' label={<Typography>No</Typography>} value="no" onChange={(e)=>setInjury2(e.target.value)} required/>
                </div>
              </div>
  
              <div className='mt-10 flex justify-center'>
                <Button type='submit' className='bg-[#94C9D8] text-black w-40 h-12 rounded-full poppins-bold text-md'>Enter</Button>
              </div>
  
            </form>
          </div>
  
        </div>
  
  
  
  
      </>
    )
  
}

export default Register

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/Logo.png"
import { Button, Typography } from '@material-tailwind/react'
import happyFace from "../assets/happyFace.png"
import logoFittology from "../assets/Logo-Fittology.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons' 
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import axios from 'axios'




const Result = () => {

    const navigate = useNavigate()

    const [showSet1, setShowSet1] = useState(false)
    const [successfulset1, setSuccessfulset1] = useState(0)
    const [unsuccessfulset1, setUnsuccessfulset1] = useState(0)
    const [feedbackForResult, setFeedbackForResult] = useState("")
    const [feedbackForUnsuccessfulResult, setFeedbackForUnsuccessfulResult] = useState("")


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

        const getResult = async() =>{
            try {
                const res = await axios.post('http://127.0.0.1:5000/result')

                setSuccessfulset1(res.data[0].total_successful)
                setUnsuccessfulset1(res.data[1].total_unsuccessful)
                setFeedbackForResult(res.data[2].general_feedback)
                setFeedbackForUnsuccessfulResult(res.data[3].general_feedback_unsuccessful)

            } catch (error) {
                console.log("error")
            }
        }
        getResult()




    },[])

    const handleOpenSet1 = async() =>{
        setShowSet1(true)

        try {
            const resp = await axios.post("http://127.0.0.1:5000/get_feedback",{
                feedbackForResult,
                feedbackForUnsuccessfulResult
            })
            console.log(resp)
        } catch (error) {
            console.log("error")
        }
    }

    const handleCloseSet1 = async() =>{
        setShowSet1(false)
        
    }



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

    <div className='flex justify-center mt-10'>
        <div className='grid grid-cols-3 gap-10'>
            <div className='w-96 h-[26rem] rounded-[2rem] bg-[#F9C237]'>
                <div className='flex justify-center mt-10'>
                    <Typography className='text-white poppins-bold text-2xl'>SET 1</Typography>
                </div>
                <div className='flex justify-center mt-5'>
                    <img src={happyFace} alt="" className='w-40' />
                </div>
                <div className='flex justify-center mt-5 '>
                    <Button className='bg-[#004B60] w-40 rounded-full' onClick={handleOpenSet1}>open</Button>
                </div>
            </div>

            <div className='w-96 h-[26rem] rounded-[2rem] bg-[#F9C237]'>
                <div className='flex justify-center mt-10'>
                    <Typography className='text-white poppins-bold text-2xl'>SET 2</Typography>
                </div>
                <div className='flex justify-center mt-5'>
                    <img src={happyFace} alt="" className='w-40' />
                </div>
                <div className='flex justify-center mt-5 '>
                    <Button className='bg-[#004B60] w-40 rounded-full'>open</Button>
                </div>
            </div>

            <div className='w-96 h-[26rem] rounded-[2rem] bg-[#F9C237]'>
                <div className='flex justify-center mt-10'>
                    <Typography className='text-white poppins-bold text-2xl'>SET 3</Typography>
                </div>
                <div className='flex justify-center mt-5'>
                    <img src={happyFace} alt="" className='w-40' />
                </div>
                <div className='flex justify-center mt-5 '>
                    <Button className='bg-[#004B60] w-40 rounded-full'>open</Button>
                </div>
            </div>

        </div>
    </div>
    </div>

    {showSet1 && (
        <div className='z-10 absolute top-0 bg-[#94C9D8] w-full h-screen'>
            <div className='flex mt-5 justify-end w-full'>
                <div className=' m-auto'>
                <img src={logoFittology} alt="" className='ml-36'/>
                </div>
                <FontAwesomeIcon icon={faX} size="xl" style={{color: "#7B7B7B",}} className='cursor-pointer mr-5' onClick={handleCloseSet1}/>
            </div>
            <div className='mt-10 flex justify-center'>
                <div className='grid grid-cols-2 gap-80'>
                    <div className=''>
                        <CircularProgressbar value={successfulset1 * 10} text={(successfulset1 * 10) + '%'}  styles={buildStyles({
                            pathColor: '#085C2A',
                            textColor: '#FFFFFF',
                            trailColor: '#FFFFFF'
                        })} />
                        <div className='flex justify-center mt-4'>
                            <Typography className='poppins-bold text-white text-2xl'>SUCCESSFUL</Typography>
                        </div>
                        <div className='flex justify-center'>
                            <Typography className='text-white poppins-regular text-lg'>Percentage</Typography>
                        </div>
                    </div>
                    <div className=''>
                        <CircularProgressbar value={unsuccessfulset1 * 10} text={(unsuccessfulset1 * 10) + '%'}  styles={buildStyles({
                            pathColor: '#F60A0A',
                            textColor: '#FFFFFF',
                            trailColor: '#FFFFFF'
                        })} />
                        <div className='flex justify-center mt-4'>
                            <Typography className='poppins-bold text-white text-2xl'>UNSUCCESSFUL</Typography>
                        </div>
                        <div className='flex justify-center'>
                            <Typography className='text-white poppins-regular text-lg'>Percentage</Typography>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-10'>
                <Typography className='w-[40rem] text-center poppins-regular'>{feedbackForResult}{feedbackForUnsuccessfulResult}</Typography>
            </div>
        
        </div>
    )}
    </>
  ) 
}

export default Result

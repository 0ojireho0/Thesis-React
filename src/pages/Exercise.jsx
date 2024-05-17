import React, {useEffect, useState} from 'react'
import logo from "../assets/Logo.png"
import bicepCurl from "../gif/bicep-curl.gif"
import gobletSquat from "../gif/goblet-squat.gif"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { Button, Typography } from '@material-tailwind/react'
import axios from 'axios'


const Exercise = () => {
    
    const navigate = useNavigate()
    const [showTutorial, setShowTutorial] = useState(false)
    const [getExercises, setGetExercises] = useState("")
    const [getGIFexercises, setGetGIFexercises] = useState("")

    const showPopupTutorial = () =>{
        if (showTutorial == false){
            setShowTutorial(true)
        }
        else{
            setShowTutorial(false)
        }
    }

    const handleBack = async() =>{
        try {
            const res = await axios.post('http://127.0.0.1:5000/back_exercise')
            //console.log(res)
            navigate('/select_exercise')
        } catch (error) {
            console.log("Error deleting exercise")
        }

    }

    useEffect(()=>{
        
        const getExercise = async() =>{
            const res = await axios.post('http://127.0.0.1:5000/exercise_choosed')
            .catch((error)=>{
                console.log("error")
            })
            //console.log(res.data.exercise.exercise)
            if (res.data.exercise.exercise == "bicep_curl"){
                setGetExercises("Bicep Curl")
                setGetGIFexercises(bicepCurl)
            }else{
                setGetExercises("Goblet Squat")
                setGetGIFexercises(gobletSquat)
            }
        }
        getExercise()


    },[])

    const handleStartExercise = async() =>{
        try {
            const res = await axios.post('http://127.0.0.1:5000/start_exercise',{
                getExercises
            })
            //console.log(res)

        } catch (error) {
            console.log("error getting exercises")
        }
    }



  return (
    <>
    <div className=' bg-gradient-to-t from-[#5A7D94] to-[#1C272E] w-full h-screen'>
        <div className='pt-2 pl-3 flex w-full'>
            <img src={logo} alt="logo" className='w-24' />
            <div className='items-center flex w-full justify-center mr-64'>
                <Typography className='text-white poppins-bold text-3xl'>{getExercises}</Typography>
            </div>
        </div>
        <div className='flex'>
            <div className='mt-2 ml-6 w-3/4 h-[30rem] bg-[#D9D9D9] flex justify-center items-center'>
                <img src="http://127.0.0.1:5000/video_feed" alt="" className=' w-[70rem] h-[28rem] ' />
                
            </div>
            <div className='ml-20 mt-10 inline'>
                <div>
                    <Button className='bg-[#F7813C] poppins-bold text-xl rounded-full w-40' onClick={handleStartExercise}>Start</Button>
                </div>
                <div className='mt-12'>
                    <Button className='bg-[#F7813C] poppins-bold text-xl rounded-full w-40'>Restart</Button>
                </div>
                <div className='mt-12'>
                    <Button className='bg-[#F7813C] poppins-bold text-xl rounded-full w-40' onClick={showPopupTutorial}>Tutorial</Button>
                </div>
                <div className='mt-12'>
                    <Button className='bg-[#1C272E] poppins-bold text-xl rounded-full w-40' onClick={handleBack}>Back</Button>
                </div>
            </div>
        </div>
        <div className='flex'>
            <div className='w-3/4 h-20 bg-[#94C9D8] ml-6 mt-4'>
                <Typography className='poppins-bold text-3xl text-black ml-3 mt-1 w-full'>Feedback: </Typography>
            </div>
            <div className='w-52 h-16 bg-[#14FF00] ml-16 mt-6 text-center rounded-full pt-4 '>
                <Typography className='poppins-bold text-2xl text-white'>CORRECT</Typography>
            </div>
        </div>
    </div>

    {showTutorial && (
        <>
        <div className='flex'>
            <div className='z-10 bg-[#1C272E] w-[66.5rem] h-[30rem] absolute top-[6.3rem] ml-16'>
                <div className='bg-[#D9D9D9] w-[64rem] h-[27.5rem] ml-5 mt-5 flex justify-center items-center'>
                    <img src={getGIFexercises} alt="" />
                </div>
            </div>
            <div className='top-[21.5rem] end-[19rem] z-10 absolute '>
                <FontAwesomeIcon icon={faArrowRight} size="2xl" style={{color: "#F7813C",}} beat />
            </div>
        </div>
        </>
    )}

    </>
  )
}

export default Exercise

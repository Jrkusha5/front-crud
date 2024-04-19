import React,{useState} from 'react'
import BackButton from '../components/BackButton'
import Spinners from '../components/Spinners'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const DeleteBook = () => {
  const [loading,setLoading]=useState(false)
  const {id} =useParams();
  const navigate= useNavigate();
  const {enqueueSnackbar}=useSnackbar();
  
  const handleDeleteBook=()=>{
    setLoading(true);
    axios.delete(`http://localhost:5555/books/${id}`)
    .then(()=>{
      
      setLoading(false);
      enqueueSnackbar('Book Deleted successfully',{variant:"success"});

      navigate('/')
    })
    .catch((error)=> {
      setLoading(false);
      enqueueSnackbar('error', {variant:'error'});

      //alert('error happened')
      console.log(error)
     
    })
    
  }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className="text-3xl my-4 ">DeleteBook</h1>

      {loading ? <Spinners/> : ''}
      <div className="flex flex-col items-center border-2
       border-sky-400 rounded-xl w-[600px] p-7 mx-auto">
        <h3 className="text-2xl "> Are you sure to delete this book</h3>

        <button className='p-4 bg-red-600 text-white m-8 w-full'
        onClick={handleDeleteBook}>
          Yes, delete it
        </button>

      </div>
    </div>
  )
}

export default DeleteBook
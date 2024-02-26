import React,{useState} from 'react'
import BackButton from '../components/BackButton'
import Spinners from '../components/Spinners'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'


const DeleteBook = () => {
  const [loading,setLoading]=useState(false)
  const {id} =useParams();
  const navigate= useNavigate();
  
  const handleDeleteBook=()=>{
    
  }
  return (
    <div>DeleteBook</div>
  )
}

export default DeleteBook
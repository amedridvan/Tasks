import axios, { formToJSON } from 'axios'
import { useStore } from "../Home/Global";
import Menu from './menu'
import Footer from "./Footer";
import {  useEffect, useState } from "react";
import Container from './Container'
import Denmeme from '../Deneme';

export default  function Home (){
    const id =useStore(st=> st.id)
    const [da , setdata] =useState ({}) ;
    console.log(sessionStorage.getItem('id'))
    console.log(id)

    useEffect (()=>{
        const getdata =async ()=>{
          try{  
        const res = await axios({
            method: 'GET',
            url: `http://127.0.0.1:8000/api/v1/task/${sessionStorage.getItem("id")}`
          })
          setdata(res.data.data.task)
          console.log(da)
        }catch(err){
           console.log(err)
        }
    }
   getdata();
    },[])
       
return (
<>
<Menu />
<div className=' h-auto'>
  
 <Denmeme />
<Footer />
</div>
    </>
)
}
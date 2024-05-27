import axios, { formToJSON } from 'axios'
import { useStore } from "../Home/Global";
import Menu from './menu'
import Footer from "./Footer";
import {  useEffect, useState } from "react";
import Container from './Container'
import Denmeme from '../Deneme';

export default  function Home (){
    const id =useStore(st=> st.id)

   
return (
<>
<Menu />
<div className=' h-auto'>
  
 <Denmeme   />
<Footer />
</div>
    </>
)
}
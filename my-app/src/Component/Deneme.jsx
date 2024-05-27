import { useState ,useEffect } from "react";
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai';
import {BsCheckLg} from 'react-icons/bs';
import axios from "axios";

function Denmeme (){

const [active ,setcative]=useState("Todo")
const [edit,setEdit]=useState("1")
const [data, setdata]=useState([])
const [title, setTitle]=useState("")
const [des, setDes]=useState("")
const TodoList =[]
const InproList =[]
const DoneList =[]

const  getdata =async ()=>{

  const res = await axios({
    method: 'GET',
    url: `http://127.0.0.1:8000/api/v1/task/${sessionStorage.getItem("id")}`
  })
    if(res.status=="200"){
       setdata(res.data.data.task)
    }
   
}
useEffect (()=>{
   
 getdata();
},[])

data.map((item)=>{
   if(item.state=="Todo"){
    TodoList.push(item)
   }
   if(item.state=="Inprocess"){
     InproList.push(item)
   }
   if(item.state=="Done"){
    DoneList.push(item)
   }
})


const  updatetask = async (item,tit,des) =>{
    try{  
        const res = await axios({
            method: 'PATCH',
            url: `http://127.0.0.1:8000/api/v1/task/${item}` ,
            data:{
                title:tit,
               Description :des
            }
          })
          if(res.status=="200"){
            getdata()
            setEdit("")
          }
        }catch(err){    
           console.log(err)
        }
}
const  deletetask = async (item) =>{
    try{  
        const res = await axios({
            method: 'delete',
            url: `http://127.0.0.1:8000/api/v1/task/${item}` ,
          })
          if(res.status=="200"){
            getdata()
          }
        }catch(err){    
           console.log(err)
        }
}

const handleUpdateTitle =(tile) =>{
    setTitle(tile)
}
const handleUpdatedes =(tile) =>{
    setDes(tile)
}



return (
<> 
<div className=" bg-gray-900  text-white overflow-hidden m-3">
    <h1 className=" text-center"> Taskapp </h1>
    <div className="bg-[#353434] p-[2%] flex flex-col mx-auto mt-[3%]  overflow-y-auto shadow-3xl  ">
        <div className="flex items-center justify-center md:flex-row flex-col w-50% border-b-[#4E4E4E] border-b-[1px] pb-[25px] mb-[25px] ">

            <div className=" flex  mt-2  w-auto md:mr-6 ">
                <label htmlFor="" className=" font-bold mr-2 items-center  ">Title
                </label>
                <input className="p-[8px] bg-slate-600 border-none w-auto focus: outline focus: outline-2 focus:outline-[#00E67A]" type="text" />
                </div>
                <div className="  items-start mt-2 flex    ">
                <label htmlFor="" className=" font-bold  text-white  pr-3  ">Description
                </label>
                <input  className=" bg-slate-600 mr-[56px]    p-[8px] border-none w-auto focus: outline focus: outline-2 focus:outline-[#00E67A]" type="text" />
            </div>
            <div className=" flex flex-col items-start  mt-2">
                <button type="button" className=" bg-[#00E67A] text-white  border-none rounded-none  p-[10px] w-[70px] cursor-pointer hover:bg-[#04C46A]  " >
                    Add
                </button>
            </div>
             
        </div>
         
        <div className="mb-[15px] flex flex-row self-center " >
            <button onClick={()=> setcative("Todo")} className={active==="Todo" ? "mr-2 bg-[#00E67A] text-white border-none rounded-none mt-[25px] p-[10px] w-fit cursor-pointer"
            :"mr-2 bg-[#04C46A] text-white border-none rounded-none mt-[25px] p-[10px] w-fit cursor-pointer"
            }>Todo</button>
            <button onClick={()=> setcative("Inprocess")} className={active==="Inprocess" ? " mr-2 bg-[#00E67A] text-white border-none rounded-none mt-[25px] p-[10px] w-fit cursor-pointer"
            :" mr-2 bg-[#04C46A] text-white border-none rounded-none mt-[25px] p-[10px] w-fit cursor-pointer"
            }>Inprocess</button>
            <button onClick={()=> setcative("Done")} className={active==="Done" ? " mr-2  bg-[#00E67A] text-white border-none rounded-none mt-[25px] p-[10px] w-fit cursor-pointer"
            :" mr-2 bg-[#04C46A] text-white border-none rounded-none mt-[25px] p-[10px] w-fit cursor-pointer"
            }>Done</button>
        </div>
        {/*todo list */}

        <div  className="flex flex-col ">
        {active=="Todo"? 
             <>
             {TodoList.map((item => {
                if(item==edit){
                    return(
                        <>
                         <div className=" bg-[#414040] p-[10px] flex flex-col  ">
                                       <input  onChange={(e)=>handleUpdateTitle(e.target.value)}   type="text" className=" border-solid border-2 rounded-sm m-[5px] text-black pl-4" />
                                       
                                       <textarea   onChange={(e)=>handleUpdatedes(e.target.value)} name="" id="" className=" border-solid border-2 rounded-sm m-[5px] pl-4 text-black "></textarea>        
                                   <button onClick={()=> updatetask(item._id ,title ,des) } className=" mx-auto p-[10px] text-[16px]  w-fit bg-green-600 rounded-full mt-2 capitalize hover:bg-yellow-800  ">
                                       update
                                       
                                   </button>
                                   </div> 
                        </>
                    )
                }
                else{
                  return (
                    <>
                        <div className=" bg-[#414040] flex justify-between items-center  p-[25px] py-[10px] mb-[10px]  shadow-2xl ">
                            <div>
                                <h3 className=" text-[25px] font-bold m-0 text-[#00E67A] ">{item.title}</h3>
                                <p className=" text-[14px] mt-[8px] text-[#A1A1A1]  ">{item.Description}</p>
                            </div>
                            <div className=" ">
                                  <AiOutlineDelete
                                    className="text-[35px] cursor-pointer hover:text-red-600 "
                                    onClick={()=>deletetask(item._id)}
                                    title="Delete?"
                                  />
                                  <BsCheckLg
                                    className=" text-[25px] ml-[10px]   text-[#00E67A] cursor-pointer hover:text-[#04A96A] "
                                    
                                    title="Complete?"
                                  />
                                  <AiOutlineEdit  
                                   className=" text-[25px] ml-[10px]   text-[#00E67A] cursor-pointer hover:text-[#04A96A] "
                                    onClick={() =>setEdit(item)}
                                    title="Edit?" />
                                </div>
                                
                        </div> 
                    </>
                  )
                }
             }))}


                

                
                 </> 
               
                :
            " " }
             {active=="Inprocess"? 
             <>
             {InproList.map((item => {
                if(item==edit){
                    return(
                        <>
                         <div className=" bg-[#414040] p-[10px] flex flex-col  ">
                                       <input  onChange={(e)=>handleUpdateTitle(e.target.value)}   type="text" className=" border-solid border-2 rounded-sm m-[5px] text-black pl-4" />
                                       
                                       <textarea   onChange={(e)=>handleUpdatedes(e.target.value)} name="" id="" className=" border-solid border-2 rounded-sm m-[5px] pl-4 text-black "></textarea>        
                                   <button onClick={()=> updatetask(item._id ,title ,des) } className=" mx-auto p-[10px] text-[16px]  w-fit bg-green-600 rounded-full mt-2 capitalize hover:bg-yellow-800  ">
                                       update
                                       
                                   </button>
                                   </div> 
                        </>
                    )
                }
                else{
                  return (
                    <>
                        <div className=" bg-[#414040] flex justify-between items-center  p-[25px] py-[10px] mb-[10px]  shadow-2xl ">
                            <div>
                                <h3 className=" text-[25px] font-bold m-0 text-[#00E67A] ">{item.title}</h3>
                                <p className=" text-[14px] mt-[8px] text-[#A1A1A1]  ">{item.Description}</p>
                            </div>
                            <div className=" ">
                                  <AiOutlineDelete
                                    className="text-[35px] cursor-pointer hover:text-red-600 "
                                    onClick={()=>deletetask(item._id)}
                                    title="Delete?"
                                  />
                                  <BsCheckLg
                                    className=" text-[25px] ml-[10px]   text-[#00E67A] cursor-pointer hover:text-[#04A96A] "
                                    
                                    title="Complete?"
                                  />
                                  <AiOutlineEdit  
                                   className=" text-[25px] ml-[10px]   text-[#00E67A] cursor-pointer hover:text-[#04A96A] "
                                    onClick={() =>setEdit(item)}
                                    title="Edit?" />
                                </div>
                                
                        </div> 
                    </>
                  )
                }
             }))}


                

                
                 </> 
               
                :
            " " }

         
                {active=="Done"? 
             <>
             {DoneList.map((item => {
                if(item==edit){
                    return(
                        <>
                         <div className=" bg-[#414040] p-[10px] flex flex-col  ">
                                       <input  onChange={(e)=>handleUpdateTitle(e.target.value)}   type="text" className=" border-solid border-2 rounded-sm m-[5px] text-black pl-4" />
                                       
                                       <textarea   onChange={(e)=>handleUpdatedes(e.target.value)} name="" id="" className=" border-solid border-2 rounded-sm m-[5px] pl-4 text-black "></textarea>        
                                   <button onClick={()=> updatetask(item._id ,title ,des) } className=" mx-auto p-[10px] text-[16px]  w-fit bg-green-600 rounded-full mt-2 capitalize hover:bg-yellow-800  ">
                                       update
                                       
                                   </button>
                                   </div> 
                        </>
                    )
                }
                else{
                  return (
                    <>
                        <div className=" bg-[#414040] flex justify-between items-center  p-[25px] py-[10px] mb-[10px]  shadow-2xl ">
                            <div>
                                <h3 className=" text-[25px] font-bold m-0 text-[#00E67A] ">{item.title}</h3>
                                <p className=" text-[14px] mt-[8px] text-[#A1A1A1]  ">{item.Description}</p>
                            </div>
                            <div className=" ">
                                  <AiOutlineDelete
                                    className="text-[35px] cursor-pointer hover:text-red-600 "
                                    onClick={()=>deletetask(item._id)}
                                    title="Delete?"
                                  />
                                  <BsCheckLg
                                    className=" text-[25px] ml-[10px]   text-[#00E67A] cursor-pointer hover:text-[#04A96A] "
                                    
                                    title="Complete?"
                                  />
                                  <AiOutlineEdit  
                                   className=" text-[25px] ml-[10px]   text-[#00E67A] cursor-pointer hover:text-[#04A96A] "
                                    onClick={() =>setEdit(item)}
                                    title="Edit?" />
                                </div>
                                
                        </div> 
                    </>
                  )
                }
             }))}


                

                
                 </> 
               
                :
            " " }
              
    </div>
</div>
</div>
 </>
)
}
export default Denmeme ;
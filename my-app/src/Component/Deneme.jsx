import { useState ,useEffect } from "react";
import {AiOutlineDelete, AiOutlineEdit ,AiFillHourglass } from 'react-icons/ai';
import {BsCheckLg} from 'react-icons/bs';
import axios from "axios";

function Denmeme (){

const [active ,setcative]=useState("Todo")
const [edit,setEdit]=useState("1")
const [data, setdata]=useState([])
const [title, setTitle]=useState("")
const [des, setDes]=useState("")
const[AddDes,setAddDes]=useState("")
const[AddTitle,setAddTiltle]=useState("")
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

const handleUpdateTitle =(tile) =>{
    setTitle(tile)
}
const handleUpdatedes =(tile) =>{
    setDes(tile)
}
const handleAddTitle =(tile) =>{
    setAddTiltle(tile)
}
const handleAdddes =(tile) =>{
    setAddDes(tile)
}
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
const  updateState = async (item,state) =>{
    try{  
        const res = await axios({
            method: 'PATCH',
            url: `http://127.0.0.1:8000/api/v1/task/updatestate/${item}` ,
            data:{
                state:state
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
const AddTask = async(ti ,desc ,id)=>{
    console.log(ti)
    console.log(desc)
    console.log(id)
    try{  
        const res = await axios({
            method: 'POST',
            url: `http://127.0.0.1:8000/api/v1/task/addTask` ,
            data:{
                title:ti ,
                Description :desc ,
                user:id
            }
          })
          if(res.status=="201"){
            getdata()
          }
        }catch(err){    
           console.log(err)
        }
        setAddDes("")
        setAddTiltle("")
    
}


return (
<> 
<div className=" bg-gray-900  text-white overflow-hidden m-3">
    <h1 className=" text-center text-[40px]  "> Task App </h1>
    <div className="bg-[#353434] p-[2%] flex flex-col mx-auto mt-[3%]  overflow-y-auto shadow-3xl  ">
        <div className="flex items-center justify-center md:flex-row flex-col w-50% border-b-[#4E4E4E] border-b-[1px] pb-[25px] mb-[25px] ">

            <div className=" flex  mt-2  w-auto md:mr-6 ">
                <label htmlFor=""  className=" font-bold mr-2 items-center  ">Title
                </label>
                <input   onChange={(e)=>handleAddTitle(e.target.value)} className="p-[8px] bg-slate-600 border-none w-auto focus: outline focus: outline-2 focus:outline-[#00E67A]" type="text" />
                </div>
                <div className="  items-start mt-2 flex     ">
                <label htmlFor=""  className=" font-bold  text-white  pr-3  ">Description
                </label>
                <input  defaultValue={AddDes}  onChange={(e)=>handleAdddes(e.target.value) }  className=" bg-slate-600 mr-[56px]    p-[8px] border-none w-auto focus: outline focus: outline-2 focus:outline-[#00E67A]" type="text" />
            </div>
            <div className=" flex flex-col items-start  mt-2">
                <button onClick={()=>AddTask(AddTitle, AddDes,sessionStorage.getItem("id"))} type="button" className=" bg-[#00E67A] text-white  border-none rounded-none  p-[10px] w-[70px] cursor-pointer hover:bg-[#04C46A]  " >
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
                                       <input  onChange={(e)=>handleUpdateTitle(e.target.value)} defaultValue={item.title}  type="text" className=" border-solid border-2 rounded-sm m-[5px] text-black pl-4" />
                                       
                                       <textarea   onChange={(e)=>handleUpdatedes(e.target.value)} defaultValue={item.title}  name="" id="" className=" border-solid border-2 rounded-sm m-[5px] pl-4 text-black "></textarea>    
                                       <div className="flex flex-row self-center  ">
                                   <button onClick={()=> updatetask(item._id ,title ,des) } className="  p-[10px] text-[16px] m-2 min-w-[50px] bg-green-600 rounded-full mt-2 capitalize hover:bg-yellow-800  ">
                                       update
                                       
                                   </button>
                                   <button onClick={()=> setEdit("")} className="  p-[10px] text-[16px] m-2  w-fit bg-green-600 rounded-full mt-2 capitalize hover:bg-yellow-800  ">
                                       Exit
                                       
                                   </button>
                                   </div>
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
                            <div className=" self-end flex ">
                                  <AiOutlineDelete
                                    className="text-[30px] ml-[7px] mt-1  cursor-pointer hover:text-red-600 "
                                    onClick={()=>deletetask(item._id)}
                                    title="Delete?"
                                  />
                                  <AiFillHourglass 
                                    className=" mt-1 text-[30px] ml-[10px]  text-white  cursor-pointer hover:text-[#04A96A] "
                                    onClick={()=> updateState(item._id ,"Inprocess")}
                                    title="Inprocess?"
                                  />
                                  <AiOutlineEdit  
                                   className=" mt-1  text-[25px] ml-[10px]   text-[#00E67A] cursor-pointer hover:text-[#04A96A] "
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
                                       <input  onChange={(e)=>handleUpdateTitle(e.target.value)} defaultValue={item.title}  type="text" className=" border-solid border-2 rounded-sm m-[5px] text-black pl-4" />
                                       
                                       <textarea   onChange={(e)=>handleUpdatedes(e.target.value)} defaultValue={item.title}  name="" id="" className=" border-solid border-2 rounded-sm m-[5px] pl-4 text-black "></textarea>    
                                       <div className="flex flex-row self-center  ">
                                   <button onClick={()=> updatetask(item._id ,title ,des) } className="  p-[10px] text-[16px] m-2 min-w-[50px] bg-green-600 rounded-full mt-2 capitalize hover:bg-yellow-800  ">
                                       update
                                       
                                   </button>
                                   <button onClick={()=> setEdit("")} className="  p-[10px] text-[16px] m-2  w-fit bg-green-600 rounded-full mt-2 capitalize hover:bg-yellow-800  ">
                                       Exit
                                       
                                   </button>
                                   </div>
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
                            <div className="self-end flex ">
                                  <AiOutlineDelete
                                    className="text-[30px] mt-1 ml-1   cursor-pointer hover:text-red-600 "
                                    onClick={()=>deletetask(item._id)}
                                    title="Delete?"
                                  />
                                  <BsCheckLg
                                    className=" text-[25px] ml-[10px] mt-1  text-[#00E67A] cursor-pointer hover:text-[#04A96A] "
                                    onClick={()=> updateState(item._id ,"Done")}
                                    title="Complete?"
                                  />
                                  <AiOutlineEdit  
                                   className=" text-[25px] ml-[10px]  mt-1   text-[#00E67A] cursor-pointer hover:text-[#04A96A] "
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
                                       <input  onChange={(e)=>handleUpdateTitle(e.target.value)} defaultValue={item.title}  type="text" className=" border-solid border-2 rounded-sm m-[5px] text-black pl-4" />
                                       
                                       <textarea   onChange={(e)=>handleUpdatedes(e.target.value)} defaultValue={item.title}  name="" id="" className=" border-solid border-2 rounded-sm m-[5px] pl-4 text-black "></textarea>    
                                       <div className="flex flex-row self-center  ">
                                   <button onClick={()=> updatetask(item._id ,title ,des) } className="  p-[10px] text-[16px] m-2 min-w-[50px] bg-green-600 rounded-full mt-2 capitalize hover:bg-yellow-800  ">
                                       update
                                       
                                   </button>
                                   <button onClick={()=> setEdit("")} className="  p-[10px] text-[16px] m-2  w-fit bg-green-600 rounded-full mt-2 capitalize hover:bg-yellow-800  ">
                                       Exit
                                       
                                   </button>
                                   </div>
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
                            <div className=" self-end flex  ">
                                  <AiOutlineDelete
                                    className="text-[30px] cursor-pointer hover:text-red-600 "
                                    onClick={()=>deletetask(item._id)}
                                    title="Delete?"
                                  />
                                  <AiOutlineEdit  
                                   className=" text-[25px] ml-[10px] mt-2   text-[#00E67A] cursor-pointer hover:text-[#04A96A] "
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
import { useState } from "react";
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai';
import {BsCheckLg} from 'react-icons/bs';
function Denmeme(){

const [active ,setcative]=useState("Todo")
const [edit,setEdit]=useState(false)
const a =[1,3,4,5]
return (
<> 
<div className=" bg-gray-900  text-white overflow-hidden m-3">
    <h1 className=" text-center"> App </h1>
    <div className="bg-[#353434] p-[2%] flex flex-col mx-auto mt-[3%] max-h-[80vh] overflow-y-auto shadow-3xl  ">
        <div className="flex items-center justify-center border-b-[#4E4E4E] border-b-[1px] pb-[25px] mb-[25px] ">
            <div className=" flex flex-col items-start mr-[25px]">
                <label htmlFor="" className=" font-bold  mb-[10px]">Title
                    <input className="p-[8px] bg-slate-600 border-none w-[250px] focus: outline focus: outline-2 focus:outline-[#00E67A]" type="text" />
                </label>
                </div>
                <div className=" flex flex-col items-start  mr-[25px]">
                <label htmlFor="" className=" font-bold text-white  mb-[10px]">Description
                    <input  className=" bg-slate-600 p-[8px] border-none w-[250px] focus: outline focus: outline-2 focus:outline-[#00E67A]" type="text" />
                </label>
            </div>
            <div className=" flex flex-col items-start mr-[25px]">
                <button type="button" className=" bg-[#00E67A] text-white mb-2 ml-6  border-none rounded-none  p-[10px] w-[70px] cursor-pointer hover:bg-[#04C46A]  " >
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

        <div className="flex flex-col ">

            
            { /* 
            (active=="Todo" && edit==false) ?  
            <>
            <div className=" bg-[#414040] flex justify-between items-center  p-[25px] py-[10px] mb-[10px]  shadow-2xl ">
                <div>
                    <h3 className=" text-[25px] font-bold m-0 text-[#00E67A] ">updata from main</h3>
                    <p className=" text-[14px] mt-[8px] text-[#A1A1A1]  ">i will upating from main at 9:00</p>
                </div>
                <div className=" ">
                      <AiOutlineDelete
                        className="text-[35px] cursor-pointer hover:text-red-600 "

                        title="Delete?"
                      />
                      <BsCheckLg
                        className=" text-[25px] ml-[10px]   text-[#00E67A] cursor-pointer hover:text-[#04A96A] "
                        
                        title="Complete?"
                      />
                      <AiOutlineEdit  
                       className=" text-[25px] ml-[10px]   text-[#00E67A] cursor-pointer hover:text-[#04A96A] "
                        onClick={() =>setEdit(true)}
                        title="Edit?" />
                    </div>
            </div>
            </> 
             : <>
              <div>ahmed</div>
               </>*/}
               {(active=="Inprocess" && edit==false)? 
               <>
               <div className=" bg-[#414040] flex justify-between items-center  p-[25px] py-[10px] mb-[10px]  shadow-2xl ">
                <div>
                         <h3 className=" text-[25px] font-bold m-0 text-[#00E67A] ">updata from main</h3>
                        <p className=" text-[14px] mt-[8px] text-[#A1A1A1]  ">i will upating from main at 9:00</p>
                            </div>
                            <div className=" ">
                                  <AiOutlineDelete
                                    className="text-[35px] cursor-pointer hover:text-red-600 "
            
                                    title="Delete?"
                                  />
                                  <BsCheckLg
                                    className=" text-[25px] ml-[10px]   text-[#00E67A] cursor-pointer hover:text-[#04A96A] "
                                    
                                    title="Complete?"
                                  />
                                  <AiOutlineEdit  
                                   className=" text-[25px] ml-[10px]   text-[#00E67A] cursor-pointer hover:text-[#04A96A] "
                                    onClick={() =>setEdit(true)}
                                    title="Edit?" />
                                </div>
                        </div> 

                        <div className=" bg-[#414040] flex justify-between items-center  p-[25px] py-[10px] mb-[10px]  shadow-2xl ">
                <div>
                         <h3 className=" text-[25px] font-bold m-0 text-[#00E67A] ">updata from main</h3>
                        <p className=" text-[14px] mt-[8px] text-[#A1A1A1]  ">i will upating from main at 9:00</p>
                            </div>
                            <div className=" ">
                                  <AiOutlineDelete
                                    className="text-[35px] cursor-pointer hover:text-red-600 "
            
                                    title="Delete?"
                                  />
                                  <BsCheckLg
                                    className=" text-[25px] ml-[10px]   text-[#00E67A] cursor-pointer hover:text-[#04A96A] "
                                    
                                    title="Complete?"
                                  />
                                  <AiOutlineEdit  
                                   className=" text-[25px] ml-[10px]   text-[#00E67A] cursor-pointer hover:text-[#04A96A] "
                                    onClick={() =>setEdit(true)}
                                    title="Edit?" />
                                </div>
                        </div> 

               </>  


               : ""}
               {(active=="Inprocess" && edit==true)? 
               <>
                       <div className="">
                        <div className=" bg-[#414040] p-[10px] flex flex-col justify-center  ">
                            <input type="text" className=" border-solid border-2 rounded-sm m-[5px]   " />
                            <textarea name="" id="" className=" border-solid border-2 rounded-sm m-[5px]   "></textarea>
                        </div>
                        <button onClick={()=> setEdit(false) } className=" mx-auto  self-center p-[10px] text-[16px]  w-fit  ">
                            update
                            
                        </button>
                        </div>
               </>
               :
               ""}
            

        
    </div>
</div>
</div>
 </>
)
}
export default Denmeme ;
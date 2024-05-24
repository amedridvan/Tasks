import axios from "axios";
import { useEffect ,useState } from "react";
function del ({id}){
    console.log(id)
}
function Container  ({data}) {
    const [id,setIw] =useState(1)
    console.log(data)
    const to =[];
    const done =[];
    const pr=[] ;
    useEffect (()=>{
  del(2)
    } ,[id])
    Object.values(data).map(item =>{
     if(item.state=="Todo"){
        to.push(item)
     }
     else if(item.state=="done"){
        done.push(item)
     }
     else{
        pr.push(item)
     }
    })  
    
    
return(
    <>
    <div className="felx justify-center pt-1 mt-2  w-3/4">
    <h1 className="  justify-center flex ">Todo</h1>
        <div className="felx flex-col  border-2  border-red-950 p-2 mt-2 mb-3  bg-slate-200    ">
        {to.map(item =>
           <div key={item._id} className=" w-auto border-2 border-green-500 mt-2 flex-col mb-3 justify-between px-4 flex items-center rounded-md   "> 
            <div>
            <h1 className=" capitalize pb-3 pt-2">
                {item.title }
            </h1>
            </div>
            <div className="mb-2 mx-3 flex flex-row  justify-between  w-full  ">
            <div>
            <button  className="  ml-2 w-20 hover:bg-yellow-700 mr-2 rounded-lg border-red-500   bg-red-500 border-2  ">Delete </button>
            <button className="  ml-2 w-20 hover:bg-yellow-700 mr-2 rounded-lg  border-gray-600   bg-gray-600 border-2  ">Update</button>
            </div>
            <p className="  text-white mr-3 capitalize bg-red-600 border-1 border-red-600  rounded-lg  w-16 md:w-[60px] flex justify-center    ">{item.state}</p>
            </div>
            </div>
        )}     
        </div>
           
        <h1 className="  justify-center flex  capitalize ">In-Progress</h1>
        <div className="felx flex-col  border-2 border-zinc-500 p-2 mt-2 mb-3  bg-slate-200    ">
        {pr.map(item =>
           <div  key={item._id} className=" w-auto border-2 border-yellow-500 mt-2 flex-col mb-3 justify-between px-4 flex items-center rounded-md   "> 
            <div>
            <h1 className=" capitalize pb-3 pt-2">

                {item.title }
            </h1>
            </div>
            <div className="mb-2 mx-3 flex flex-row  justify-between  w-full  ">
            <div>
            <button  className="  ml-2 w-20 hover:bg-yellow-700 mr-2 rounded-lg border-red-500   bg-red-500 border-2  ">Delete </button>
            <button className="  ml-2 w-20 hover:bg-yellow-700 mr-2 rounded-lg  border-gray-600   bg-gray-600 border-2  ">Update</button>
            </div>
            <p className="  text-white mr-3 capitalize   ">{item.state}</p>
            </div>
            </div>
        )}     
        </div>
        <h1 className="  justify-center flex ">done</h1>
        <div className="felx flex-col  border-2 border-rose-950  p-2 mt-2 mb-3  bg-slate-200    ">
        {done.map(item =>
           <div key={item._id} className=" w-auto border-2 border-blue-500 mt-2 flex-col mb-3 justify-between px-4 flex items-center rounded-md   "> 
            <div>
            <h1 className=" capitalize pb-3 pt-2">
                {item.title }
            </h1>
            </div>
            <div className="mb-2 mx-3 flex flex-row  justify-between  w-full  ">
            <div>
            <button onClick={()=> console.log(item._id )} className="  ml-2 w-20 hover:bg-yellow-700 mr-2 rounded-lg border-red-500   bg-red-500 border-2  ">Delete </button>
            <button className="  ml-2 w-20 hover:bg-yellow-700 mr-2 rounded-lg  border-gray-600   bg-gray-600 border-2  ">Update</button>
            </div>
            <p className="  text-white mr-3 capitalize   ">{item.state}</p>
            </div>
            </div>
        )}     
        </div>
    </div>
    
    </>
)
}

export default Container ;
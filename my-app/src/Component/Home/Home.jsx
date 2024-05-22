import { useForm } from "react-hook-form"
import { json, useNavigate ,useParams} from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2'
import { useStore } from "../Home/Global";



export default  function Home (){
    const id =useStore(st=> st.id)
    
function on() {
   
console.log(sessionStorage.getItem('id'))
console.log(id)
}
return (
<>
<button className="" type="submit" onClick={on}> 
    add
</button>
    </>
)
}
import  { FaPen , FaTimes,FaRegCircle } from "react-icons/fa";
function Icon({name}){
        if(name==="cross"){
            return <FaTimes />
        }else if(name ==="circle"){
            return <FaRegCircle />
        }else{
            return <FaPen />
        }
}
export default Icon;
import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer(){

    const [inputType,setInputType]=useState("password");
    const [value,setValue]=useState("");
    const navigate = useNavigate("/",);
    function handleFormSubmit(event) {
        event.preventDefault();
        if(value){
           navigate(`/Play`,{state : {wordSelected:value}});
        }
        console.log("Form Submitted")
    }
    function handleTextInputChange(event) {
        console.log("Text Input changed");
        setValue(event.target.value);

    }
    function handleShowHideClick(){
        if(inputType==="password"){
            setInputType("text");
        }else{
            setInputType("password");
        }
    }
    return(

    <TextInputForm 
    handleFormSubmit={handleFormSubmit}
    handleTextInputChange ={
        handleTextInputChange
    }
    inputType={inputType}
    handleShowHideClick={handleShowHideClick}
    />
    )
}
export default TextInputFormContainer;
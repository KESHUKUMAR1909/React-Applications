import getButtonStyle from "./getButtonstyle";
function Button({text,onClickHandler,color,styleType ="primary",type="button"}){
    return(
        <>
            <button style={{backgroundColor:color}} type={type} onClick={onClickHandler} className={` text-white ${getButtonStyle(styleType)}  px-4 rounded-md py-[2px]`}>{text}</button>
        </>
    )
}

export default Button;
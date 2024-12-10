import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
function TextInputForm({handleFormSubmit,handleTextInputChange,handleShowHideClick,inputType}) {
   
    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <TextInput
                    label={"Enter a word or phrase "}
                    placeholder="Enter a word or phrase here..."
                    onChangeHandler={handleTextInputChange}
                    type={inputType}
                />
            </div>
            <div>
                <Button
                    styleType="warning"
                    text={inputType==="password"?"Show":"Hide"}
                    onClickHandler={handleShowHideClick}
                  

                />
            </div>
            <div>
                <Button
                    styleType="primary"
                    text={"Submit"}
                    type="submit"



                />
            </div>
        </form>
    )
}
export default TextInputForm;
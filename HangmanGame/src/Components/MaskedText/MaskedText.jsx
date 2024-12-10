import { getMaskedStrings } from "./MaskingUtility"

function MaskedText({text,guessedLetters}){
    const maskedString = getMaskedStrings(text,guessedLetters);

    return(
        <>
            {maskedString.map((element,index)=>
                <span className="mx-1" key={index}>{element}</span>
            )}
        </>
    )
}
export default MaskedText;
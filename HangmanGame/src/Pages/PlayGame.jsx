import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import MaskedText from "../Components/MaskedText/MaskedText";

function PlayGame() {
    // const [{searchParams}] =useSearchParams();  //query params example 

    // const {text} = useParams();
    // path params example

    // Both above are the part of the react router dom


    const { state } = useLocation();

    return (
        <>
            <h1>PlayGame Page {state.wordSelected}  </h1>
            <MaskedText text={state.wordSelected} guessedLetters={["H","U","E"]} />
            <Link to="/" className="text-blue-500" >Start Game Link </Link>
        </>
    )
}
export default PlayGame;
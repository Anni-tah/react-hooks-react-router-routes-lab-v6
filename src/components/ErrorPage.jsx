import { useRouteError } from "react-router-dom";
import NavBar from "./NavBar";

function ErrorPage(){
    const error=useRouteError();
    console.error(error);

    return(
        <>
        <header>
            <NavBar/>
        </header>
        <main>
            <h1>Oops! Looks like something went wrong.</h1>
        </main>

        </>
    )

}
export default ErrorPage;
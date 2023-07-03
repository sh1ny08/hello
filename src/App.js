import { useState } from "react";
import "./App.css";
import Employee from "./components/Employee";

function App() {
    const [role, setRole] = useState();
    const showEmployees = true;
    return ( <
        div className = "App" > { " " } {
            showEmployees ? ( <
                >
                <
                input type = "text"
                onChange = {
                    {} => {
                        console.log(e.target.value)
                    }
                }
                /> <
                Employee name = "Pardhu"
                role = "intern" / >
                <
                Employee name = "Harsha" / >
                <
                Employee name = "Vivek" / >
                <
                />
            ) : ( <
                p > You cannot see the employees < /p>
            )
        } { " " } <
        /div>
    );
}

export default App;
import React from "react";
import Flightdata from "./Components/Flightdata";
import Header from "./Components/Header";

class App extends React.Component{
    render(){
        return(
            <div>
                 <Header/>
                 <Flightdata/>
            </div>
                    )
    }
}
export default App;
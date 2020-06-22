import React from "react"
import { BrowserRouter, Switch, Route} from "react-router-dom"

import Home from "./pages/Home"
import Detail from "./pages/Detail"

export default function Routes({ toggleTheme }){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact 
                    render={props => <Home toggleTheme={toggleTheme}/>} toggleTheme={toggleTheme}
                />
                <Route path="/details" 
                render={props => <Detail toggleTheme={toggleTheme}/>} toggleTheme={toggleTheme}
                />
            </Switch>
        </BrowserRouter>
    )
}
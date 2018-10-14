import React from "react"
import { HashRouter, Route, Link } from "react-router-dom"
import { CusLink } from "../CusLink"
import { Hello } from "../Hello"

class Main extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul>
                        <CusLink to="/hello/GQSM" name="用component渲染組件" />
                        <CusLink to="/hey/GQSM" name="用render渲染組件" />
                    </ul>
                    <hr />
                    <Route path="/hello/:userName" component={Hello} />
                    <Route path="/hey/:userName" render={props => <h1>Hey！{props.match.params.userName}</h1>} />
                </div>
            </HashRouter>
        )
    }
}


export { Main }
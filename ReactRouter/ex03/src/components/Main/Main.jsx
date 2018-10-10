import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import { Title } from "../Title"
import { Home } from "../Home"
import { About } from "../About"

class Main extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Title title="功能選單" />
                    <ul>
                        <li><Link to="/">回到首頁</Link></li>
                        <li><Link to="/about">關於我們</Link></li>
                    </ul>
                    <hr />
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                </div>
            </BrowserRouter>
        )
    }
}

export { Main }
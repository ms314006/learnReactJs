import React from "react"
import { Route, Link } from "react-router-dom"

class About extends React.Component {
    render() {
        console.log(this.props.match)
        return (
            <div>
                <h2>關於我們選單</h2>
                <ul>
                    <li><Link to={`${this.props.match.url}`}>理念介紹</Link></li>
                    <li><Link to={`${this.props.match.url}/his`}>歷史沿革</Link></li>
                </ul>
                <Route exact path={`${this.props.match.path}`} component={introd} />
                <Route path={`${this.props.match.path}/his`} component={his} />
            </div>
        )
    }
}

class introd extends React.Component {
    render() {
        return <p>這裡是理念介紹</p>
    }
}

class his extends React.Component {
    render() {
        return <p>這裡是歷史沿革</p>
    }
}

export { About }
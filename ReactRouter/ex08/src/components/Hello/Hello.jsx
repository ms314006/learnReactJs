import React from "react"

class Hello extends React.Component{
    render(){
        return <h1>Hello！{this.props.match.params.userName}！</h1>
    }
}

export {Hello}
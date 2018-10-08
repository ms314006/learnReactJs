import React from "react"
import {MessageList} from "../MessageList"
import {InputMessage} from "../InputMessage"

class Main extends React.Component{
    render(){
        return (
            <div>
                <InputMessage />
                <MessageList />
            </div>
        )
    }
}

export {Main}
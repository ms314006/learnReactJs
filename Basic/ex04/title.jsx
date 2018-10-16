import React from 'react';
import ReactDOM from 'react-dom';

class TodoList extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        let arrLists = ['打文章','寫程式','耍廢']

        let lists = arrLists.map((list) => <List list={list} />)

        return (
            <ul>
                {lists}
            </ul>
        )
    }
}

class List extends React.Component{
    render(){
        return (
            <li>{this.props.list}</li>
        )
    }
}

ReactDOM.render(<TodoList />,document.getElementById('root'))
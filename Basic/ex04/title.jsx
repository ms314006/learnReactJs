import React from 'react';
import ReactDOM from 'react-dom';

class TodoList extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        let arrLists = ['打文章','寫程式','耍廢']

        let lists = arrLists.map((list) => <li>{list}</li>)

        return (
            <ul>
                {lists}
            </ul>
        )
    }
}

ReactDOM.render(<TodoList />,document.getElementById('root'))
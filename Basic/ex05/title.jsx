import React from 'react';
import ReactDOM from 'react-dom';

class TodoList extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        //這裡一樣用map把陣列中每個元素都找出來
        let lists = this.props.objLists.map((list) => 
        /*key值的資料就給唯一值id指定*/
        <li key={list.id}>{list.list}</li>)

        return (
            <ul>
                {lists}
            </ul>
        )
    }
}

//假設我們拿到的陣列中，有每一個資料的物件
let objLists = 
[{id:'a',list:'打文章'},{id:'b',list:'寫程式'},{id:'c',list:'耍廢'}]

//將該陣列用props的方式傳入class中處理
ReactDOM.render(<TodoList objLists={objLists} />,document.getElementById('root'))
import React from 'react';
import ReactDOM from 'react-dom';

class EasyForm extends React.Component {
    constructor(props) {
        super(props)
        this.submitForm = this.submitForm.bind(this)
        this.changeState = this.changeState.bind(this)
        //這是待辦事項的清單，id是唯一值、listName為事項、check為是否完成
        this.state = ({lists :
                        [{id:'01',listName:'寫文章',check:false},
                        {id:'02',listName:'打程式',check:false},
                        {id:'03',listName:'耍廢',check:true}]})
    }
    
    //傳進index是為了知道目前點選的事項是在陣列中的哪個位置
    changeState(index){
        //修改時先將this.state.lists指定給一個變數
        let arrLists = this.state.lists
        
        //確認清單中的該事項目前狀態是不是已完成
        if(arrLists[index].check)
            //原本是true的話這時候會變false
            arrLists[index].check = false
        else
            //原本是false的話這時候會變true
            arrLists[index].check = true
            
        //改完後用setState將lists重新設定為arrLists
        this.setState({lists:arrLists})

    }

    submitForm(event) {
        let status = "目前做了："
        
        //將陣列中check為true的事項都列出來，代表完成
        this.state.lists.map((list)=>{(list.check) ? status += `${list.listName} `:''})

        console.log(status)
        event.preventDefault()
    }

    render() {
        //使用map跑迴圈，將結果給lists，map的第二個參數index為目前是第幾個索引
        let lists = this.state.lists.map((list,index)=>(
            /*既然使用迴圈，就要設key對吧！*/
            <div key={list.id}>
                {/*這裡將checked屬性設定成清單中的check，true就打勾、false就沒勾
                onChange中代入第二個參數index，是為了辨別變動的是第幾個索引的事項
                最後因為是迴圈，所以要記得設key對吧！*/}
                <input type="checkbox" 
                        checked={list.check} 
                        onChange={this.changeState.bind(this,index)}
                        key={list.id} />
                <label>{list.listName}</label>
            </div>
        ));

        return (
            <form onSubmit={this.submitForm}>
                <div>
                    <label>每日待辦清單：</label>
                    {/*直接將剛剛跑完迴圈的變數放進來*/}
                    {lists}
                </div>
                <input type="submit" value="送出表單" />
            </form>
        )
    }
}

ReactDOM.render(<EasyForm  />, document.getElementById('root'))
import React from 'react';
import ReactDOM from 'react-dom';

class EasyForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            introduction: '',
            gender: 'M'
        }
        this.changeState = this.changeState.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    changeState(event) {
        /*因為所有的組件改變時都會呼叫這個function
        所以這裡就不能像一開始一樣寫死的*/

        //首先要去抓目前發生改變的組件的name
        let changeName = event.target.name
        //再把他目前的value拿去更改state
        this.setState({ [changeName]: event.target.value })
    }

    submitForm(event) {
        console.log(`現在輸入的名字是：${this.state.name}`)
        console.log(`現在選擇的性別是：${(this.state.gender == 'M')?'男':'女'}`)
        console.log(`現在輸入的介紹內容是：${this.state.introduction}`)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <div>
                    <label>姓名：</label>
                    <input type="text" id="name" name="name"
                        value={this.state.name}
                        onChange={this.changeState} />
                </div>
                {/*需注意的是，textarea和select也是使用value屬性來綁定state*/}
                <div>
                    <label>性別：</label>
                    <select id="gender" name="gender"
                        value={this.state.gender}
                        onChange={this.changeState} >
                        <option value="M">男</option>
                        <option value="W">女</option>
                    </select>
                </div>
                <div>
                    <label>自我介紹：</label><br />
                    <textarea id="introduction" name="introduction"
                        value={this.state.introduction}
                        onChange={this.changeState}></textarea>
                    <br />
                </div>
                <input type="submit" value="送出表單" />
            </form>
        )
    }
}

ReactDOM.render(<EasyForm />, document.getElementById('root'))
import React from 'react';
import ReactDOM from 'react-dom';

class EasyForm extends React.Component {
    constructor(props) {
        super(props)
        this.submitForm = this.submitForm.bind(this)
        
        //使用React.createRef()建立一個物件給filebox
        this.filebox = React.createRef()
    }
    submitForm(event) {
        /*在function內就可以直接取用
        React.createRef()建立的this.filebox來取得對應設定ref的組件*/
        console.log(`選擇檔案為：${this.filebox.current.files[0].name}`)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <div>
                    <label>上傳檔案：</label>
                    <input type="file"
                        /*這裡將用React.createRef的filebox指定給該組件的ref屬性
                        讓class內的function可以依照ref取得組件*/
                        ref={this.filebox} />
                </div>
                <input type="submit" value="送出表單" />
            </form>
        )
    }
}

ReactDOM.render(<EasyForm />, document.getElementById('root'))
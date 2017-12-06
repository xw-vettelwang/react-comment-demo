import * as React from "react";
import inputStyle from "./css/input.css";

export default class CommentInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            comment: ''
        };
        this.addComment = this.addComment.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    }

    componentWillMount() {
        const user = localStorage.getItem('user');
        if (user) {
            this.setState(
                {
                    user: user
                }
            );
        }
    }

    componentDidMount() {
        this.textarea.focus();
    }

    addComment() {
        if (this.state.user === "" || this.state.comment === "") {
            alert('请先填写用户名和评论内容!!!');
            return false;
        }
        this.props.onAdd({user: this.state.user, comment: this.state.comment, createTime:+new Date()});
        this.setState(
            {
                user: '',
                comment: ''
            }
        );
    }

    handleInputChange(e) {
        this.setState(
            {
                user: e.target.value
            }
        );
    }

    handleInputBlur(e) {
        let user = e.target.value;
        localStorage.setItem('user', user);
    }

    handleTextAreaChange(e) {
        this.setState(
            {
                comment: e.target.value
            }
        );
    }

    render() {
        return (
            <div className={inputStyle.inputMain}>
                <div className={inputStyle.col}>
                    <label>用户名:</label>
                    <input value={this.state.user} onChange={this.handleInputChange} onBlur={this.handleInputBlur}/>
                </div>
                <div className={inputStyle.col}>
                    <label>评论内容：</label>
                    <textarea value={this.state.comment} onChange={this.handleTextAreaChange} ref={(textarea) => this.textarea = textarea}></textarea>
                </div>
                <div className={inputStyle.col}>
                    <button onClick={this.addComment}>发 布</button>
                </div>
            </div>
        );
    }
}
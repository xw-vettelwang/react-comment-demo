import * as React from "react";
import {CommentList} from "../CommentList/CommentList";
import CommentInput from "../CommentInput/CommentInput";
import "../../common/css/main.css";
import appStyle from "./css/app.css";

export default class CommentApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            commentList : []
        };
        this.handleAddComment = this.handleAddComment.bind(this);
        this.handleDeleteComment = this.handleDeleteComment.bind(this);
    }

    componentWillMount(){
        const list = JSON.parse(localStorage.getItem('commentList'));
        if (list){
            this.setState(
                {
                    commentList :list
                }
            );
        }
    }

    handleAddComment(info){
        const commentList = this.state.commentList.concat([info]);
        this.setState(
            {
                commentList : commentList
            }
        );
        localStorage.setItem('commentList',JSON.stringify(commentList));
    }

    handleDeleteComment(num){
        const commentList = this.state.commentList.slice(0,this.state.commentList.length);
        commentList.splice(num,1);
        this.setState(
            {
                commentList : commentList
            }
        );
        localStorage.setItem('commentList',JSON.stringify(commentList));
    }

    render(){
        return (
            <div className={appStyle.main}>
                <CommentInput onAdd={this.handleAddComment}/>
                <CommentList commentList={this.state.commentList} onDeleteComment={this.handleDeleteComment}/>
            </div>
        );
    }
};
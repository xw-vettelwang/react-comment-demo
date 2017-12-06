import * as React from "react";
import CommentItem from "../CommentItem/CommentItem";
import listStyle from "./css/list.css";

export const CommentList = (props) => {
    const list = props.commentList.map((item, index)=>{
        return (<CommentItem item={item} key={index} num={index} deleteComment={props.onDeleteComment}/>);
    });
    return (
        <div className={listStyle.list}>
            {list}
        </div>
    );
};
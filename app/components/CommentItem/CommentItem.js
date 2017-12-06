import * as React from "react";
import itemStyle from "./css/item.css";

export default class CommentItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          timeString : ''
        };
        console.log(this.props.item);
        this._updateTime = this._updateTime.bind(this);
        this.handleDeleteComment = this.handleDeleteComment.bind(this);
    }

    componentWillMount(){
        this._updateTime();
    };

    _updateTime(){
        const duration = (+Date.now() - this.props.item.createTime) / 1000;
        this.setState({
            timeString: duration > 60
                ? `${Math.round(duration / 60)} 分钟前`
                : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }

    handleDeleteComment(){
        this.props.deleteComment(this.props.num);
    }

    componentDidMount()
    {
        this.timer = setInterval(this._updateTime,30000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){
        return (
            <div className={itemStyle.item}>
                <label className={itemStyle.user}>{this.props.item.user}:</label>
                <p className={itemStyle.content}>{this.props.item.comment}</p>
                <span className={itemStyle.btn} onClick={this.handleDeleteComment}>X</span>
                <span className={itemStyle.time}>{this.state.timeString}</span>
            </div>
        );
    }
}
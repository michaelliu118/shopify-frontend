import React from 'react';
import Card from '../card';
import './story.css';
import Heart from 'react-animated-heart';
import PopUp from '../popup/popup';

class Story extends React.Component {

    constructor(props){
        super(props);
        this.state = {url: props["url"], explanation: props["explanation"], title: props["title"], date: props["date"], click:false, seen: false}
        console.log(props.url)
    }
    
    render(){
        return (
        <Card>
            <div className="content-container">
                <img className="the-image" src={this.state.url}></img>
                <h2 className="title">{this.state.title}</h2>
                <h4 className="date">{this.state.date}</h4>
                <p>{this.state.explanation}</p>
            </div>
            <div className="operation-container">
                <div className="button-container">
                    <Heart isClick={this.state.click} onClick={()=>this.setState({click: !this.state.click})}/>
                </div>
                <div className='share-link-container'>
                    <button className="share-button" onClick={()=>{this.setState({seen: !this.state.seen})}}>Share</button>
                    {this.state.seen ? <PopUp url={this.state.url} toggle={()=>{this.setState({seen: !this.state.seen})}} /> : null}
                </div>
            </div>
        </Card>)
    }
}
export default Story;
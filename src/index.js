import React from "react";
import ReactDOM from "react-dom";
import ApprovalCard from '../Components/ApprovalCard'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = { lat: null, errorMessage: ''};

        window.navigator.geolocation.getCurrentPosition(
            position =>{
                this.setState({lat: position.coords.latitude});
            },
            err => {
                this.setState({errorMessage: err.message});
            }
        );
    }

    render(){
        if(this.state.lat && !this.state.errorMessage){
            return(
                <ApprovalCard name="Controllah" location={this.state.lat} >
                <div>Latitude:{this.state.lat}</div>
                </ApprovalCard>)
        }else if(!this.state.lat && this.state.errorMessage){
            return <div> Error:{this.state.errorMessage} </div>;
            
        }else{
            return(
                <ApprovalCard name="Controllah" location={this.state.lat} >
                <div>Waiting PLease Be Patient</div>
                </ApprovalCard>)
        }
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"))
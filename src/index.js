import React from "react";
import ReactDOM from "react-dom";
import ApprovalCard from './ApprovalCard';
import SeasonDisplay from "./seasonDisplay";





class App extends React.Component{
    
    state = { lat: null, errorMessage: ''};
    componentDidMount(){
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
                <div>
                <ApprovalCard name="Controllah" location={this.state.lat}>
                <SeasonDisplay lat = {this.state.lat}></SeasonDisplay>
                </ApprovalCard>
                </div>);
        }else if(!this.state.lat && this.state.errorMessage){
            return <div> Error:{this.state.errorMessage} </div>;
            
        }else{
            return(
                <ApprovalCard name="Waiting PLease Be Patient" location={this.state.lat} />)
                
        }
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"))
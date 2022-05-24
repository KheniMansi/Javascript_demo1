import React from "react"

export default class ClassComp extends React.Component{
    constructor(props) {
        super(props);
        // console.log(props)
        this.state = { 
            count: 0,
            name: ''
        };
    }
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    }
    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 });
    }
    componentDidMount(){
        this.setState({
            name: "aaaa"
        })
    }
    render(){
        return(
            <>
                <div className="">
                    <h1>{this.state.count}</h1>
                    <h2>Name: {this.state.name}</h2>
                    <button type="button" onClick={this.handleIncrement}>Increment</button>
                    <button type="button" onClick={this.handleDecrement}>Decrement</button>
                </div>
            </>
        )
    }
}
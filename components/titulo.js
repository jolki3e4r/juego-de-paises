import React, { Component } from 'react';
class Titulo extends Component {
    //state = {}
    render() {
        const { title } = this.props



        return (
            <div className="mx-5 mt-5 block">
                <h1 className="mx-5">What's the capital of {title}?</h1>
            </div>
        );
    }
}

export default Titulo;
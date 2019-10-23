import React, { Component } from 'react';

class Button extends Component {

    render() {
        const { countries } = this.props;
        const resultado = countries.map(capital => {
            return <button type="button" className="btn btn-outline-success btn-lg btn-block mt-2"
            >{capital.capital}</button>
        })
        return (
            <div>{resultado}</div>
        );
    }
}

export default Button;

import React, { Component } from 'react'
import GlassItem from './GlassItem';

export default class GlassesList extends Component {

    renderGlassesList = () => {
        const {arrGlass} = this.props;
        return arrGlass.map((glassesItem, index) => {
            return <GlassItem glassesItem={glassesItem} changeGlasses={this.props.changeGlasses} />
        })
    }
    
    render() {
        return (
            <div className="bg-light container text-center mt-5 d-flex justify-content-center p-5">
                {this.renderGlassesList()}
            </div>
        )
    }
}

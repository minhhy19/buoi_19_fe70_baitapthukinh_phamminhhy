import React, { Component } from 'react'

export default class GlassItem extends Component {
  render() {
    const {glassesItem} = this.props;
    return (
        <img onClick={()=>{ this.props.changeGlasses(glassesItem) }} className="ml-2 p-2 border border-width-1" style={{ width: '110px', cursor: 'pointer' }} src={glassesItem.url} />
    )
  }
}

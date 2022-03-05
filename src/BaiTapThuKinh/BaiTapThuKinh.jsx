import React, { Component } from 'react';
import dataGlasses from '../Data/dataGlasses.json';
import GlassesList from './GlassesList';

export default class BaiTapThuKinh extends Component {


    state = {
        glassesCurrent: {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }

    changeGlasses = (newGlasses) => {
        this.setState({
            glassesCurrent:newGlasses
        })
    }

    render() {

        const keyFrame = `@keyframes animChangeGlasses${Date.now()} {
            from {
                width: 0;
                transform: rotate(45deg);
                opacity:0;
            }
            to {
                width:150px;
                opacity:0.7;
                transform: rotate(0deg);

            }
        }`;
        
        const styleGlasses = {
            width: '150px',
            top: '75px',
            right: '70px',
            opacity: '0.7',
            transform: 'rotate(0deg)',
            animation: `animChangeGlasses${Date.now()} 2s`
        }

        const infoGlasses = {
            width: '250px',
            top: '200px',
            left: '270px',
            paddingLeft: '15px',
            backgroundColor: 'rgba(255,127,0,.5)',
            textAlign: 'left',
            height: '105px'
        }


        return (
            <div style={{ backgroundImage: 'url(./glassesImage/background.jpg)', backgroundSize: '2000px', minHeight: '2000px' }}>
                <style>
                    {keyFrame}
                </style>

                <div style={{ backgroundColor: 'rgba(0,0,0,.8)', minHeight: '2000px' }}>
                    <h3 style={{ backgroundColor: 'rgba(0, 0 ,0,.3)' }} className="text-center text-light p-5">TRY GLASSES APP ONLINE</h3>
                    <div className="container">
                        <div className="row mt-5 text-center">
                            <div className="col-6">
                                <img style={{ width: '250px' }} src="./glassesImage/model.jpg" alt='model.jpg' />
                            </div>
                            <div className="col-6">
                                <div className="position-relative">
                                    <img className="position-absolute" style={{ width: '250px' }} src="./glassesImage/model.jpg" alt='model.jpg' />
                                    <img style={styleGlasses} className="position-absolute glassesStyle" src={this.state.glassesCurrent.url} />
                                    <div style={infoGlasses} className="position-relative ">
                                        <span style={{ color: '#AB82FF', fontSize: '17px' }} className="font-weight-bold">{this.state.glassesCurrent.name}</span> <br />
                                        <span style={{ fontSize: '14px', paddingRight: '5px', fontWeight: '400' }}>{this.state.glassesCurrent.desc}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <GlassesList arrGlass={dataGlasses} changeGlasses={this.changeGlasses} />
                </div>
            </div >
        )
    }
}

import React, {Component} from 'react';
import './App.css';
import ReactJWPlayer from 'react-jw-player';

export class CustomJwPlayer extends Component{

    render() {
        return (
            <div className="full-height" >
                <ReactJWPlayer
                    className="single-player"
                    playerId='my-unique-id'
                    playerScript='https://content.jwplatform.com/libraries/4hK3AT2X.js'
                    file='https://streaming.cnnbrasil.com.br/cnndigital_mainOutput3.m3u8'
                    customProps={{
                        controls: false,
                        repeat: true,
                        defaultBandwidthEstimate: 400000,
                        stretching: 'fill',
                        preload: 'auto',
                        volume: 100,
                        width: '100%',
                        height: '100%',
                    }}
                />
            </div>
        );
    }
}
export default CustomJwPlayer;

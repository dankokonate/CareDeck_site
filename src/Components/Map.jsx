import React, {Component} from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 48.633333,
            lng:  2.450000
        },
        zoom: 11
    };

    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{key:"AIzaSyBtnB_afwe9NdIP-DVOj0gRHGj9hkU6e-Q"}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={48.633333}
                        lng={2.450000}
                        text="Map"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}


export default Map;
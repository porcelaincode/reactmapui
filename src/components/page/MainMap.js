import React, { useRef } from 'react'
import { connect } from "react-redux";
import { Map, TileLayer } from "react-leaflet";

import OutlineMap from "../extras/OutlineMap";
import countries from "../../resources/countries.json";

import { centroid } from "@turf/turf";

let geoJsonFile = countries.features
var centerPoint = {lat: 0.187542867288492, lng: 0.53097734781862}
const ZOOM_LEVEL = 3;

function MainMap(props) {
    const mapRef = useRef();
    var returningArray = {};

    try {
        // getting country Code
        const lastItem = props.countryCode[props.countryCode.length - 1]
        console.log(lastItem)
        const cntryCode = lastItem.countryName

        // gets boundries of country
        geoJsonFile.map(countryArray => {
            if(countryArray.properties.ISO_A3 === cntryCode){
                // console.log(countryArray)
                returningArray = countryArray
                var centerOfBoundry = centroid(countryArray)
                var countryBoundry = centerOfBoundry.geometry.coordinates
                console.log(countryBoundry)
                var newLatLong = {
                    lat: countryBoundry[1],
                    lng: countryBoundry[0]
                }
                const { current = {} } = mapRef;
                const { leafletElement:map } = current;
                map.flyTo(newLatLong, 4, {
                    duration: 2,
                })
            }
        })
    }
    catch(err) {
        console.log("Error occured in Map file my dude: "+err.message)
    }

    return (
        <>
            <Map ref={mapRef} center={centerPoint} zoom={ZOOM_LEVEL}>
                <TileLayer
                attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {props.countryCode.length !== 0 && <OutlineMap outlineData={returningArray}/>}
            </Map>
        </>
    )
}

const mapStateToProps = (state) =>({
    countryCode: state.countryNames.data,
});

export default connect(mapStateToProps)(MainMap)

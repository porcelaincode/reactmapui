import React from 'react'
import { GeoJSON } from "react-leaflet";

function OutlineMap({outlineData}) {
    // boundry styles
    const countryStyle = {
        fillColor: "pink",
        color:"purple",
        weight: 2,
    }
      
    return (
        <GeoJSON style={countryStyle} data={outlineData}/>
    )
}

export default OutlineMap

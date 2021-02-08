import React from 'react'
import { connect } from "react-redux";

import resultInfo from "../../resources/resultInfo.json";
import InfoCard from '../extras/InfoCard';

const resultInfoFile = resultInfo.features


function RegionInfo(props) {
    var resultArray = {};

    try{
        // getting country code
        const lastItem = props.countryCode[props.countryCode.length - 1]
        console.log(lastItem)
        const cntryCode = lastItem.countryName

        // gets resultInfo of that country
        resultInfoFile.map(countryArray => {
            if(countryArray.properties.COUNTRY_CODE === cntryCode){
                resultArray = countryArray;
                console.log(resultArray)
            }
        })
    }
    catch(error){
        console.log("Error occurred in regionInfo my dude: "+ error)
    }

    return (
        <div className="infoContainer" id="infoContainer">
            {props.countryCode.length !== 0 && <InfoCard inputData={resultArray}/>}
        </div>
    )
}

const mapStateToProps = (state) =>({
    countryCode: state.countryNames.data,
});

export default connect(mapStateToProps)(RegionInfo)

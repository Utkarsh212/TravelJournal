import React from 'react'
import { MdLocationOn } from 'react-icons/md'

export default function Travel(props){
    console.log(props)
    return (
        <div className="travel-card">
            <img src={props.place.coverImg} className="card-image" />
            <div className="card-info">
                <div className="card-info--map">
                    <MdLocationOn  className="map-locationIcon"/>
                    <p className="map-country">{props.place.country.toUpperCase()}</p>
                    <a href={props.place.location} target="_blank" className="map-location"><u>View On Google Maps</u></a>
                </div>
                <h1  className="card-place">{props.place.place}</h1>
                <p className="card-date"><b>{props.place.date}</b></p>
                <p className="card-description">{props.place.description}</p>
            </div>
        </div>
    )
}
import React, {useContext, useEffect, useState} from 'react';
import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';
import {AppContext} from "../../context/context";
import {Icon} from "leaflet";

export function Map() {

    const {ipInfo} = useContext(AppContext);
    const [center, setCenter] = useState([51.505, -0.09]);

    const customIcon = new Icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
        iconSize: [38, 38],
        iconAnchor: [19, 38],
        popupAnchor: [0, -38],
    });

    useEffect(() => {
        if (ipInfo.latitude && ipInfo.longitude) {
            setCenter([ipInfo.latitude, ipInfo.longitude]);
            console.log(center)
        }
    }, [ipInfo])

    function SetViewOnClick({coords}) {
        const map = useMap();
        map.setView(coords, map.getZoom());
        return null;
    }

    return (
        <div className="map-container">
            <MapContainer transform3DLimit={10}
                          center={center} zoom={10} doubleClickZoom={true}
                          style={{height: "100%", width: "100%"}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={center} icon={customIcon}>
                    <Popup>
                        this person from <br/> {ipInfo.city_name} <br/> {ipInfo.country_name}
                    </Popup>
                </Marker>
                <SetViewOnClick coords={center}/>
            </MapContainer>
        </div>
    );
}

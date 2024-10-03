import './App.css';
import { Header } from "./components/Header/header";
import { Map } from "./components/Map/map";
import { InfoPanel } from "./components/InfoPanel/infoPanel";
import {AppContext} from "./context/context";
import {useState} from "react";

function App() {

    const [ipInfo , setIpInfo] = useState(
        {
            ip: "",
            country_code: "",
            country_name: "",
            region_name: "",
            city_name: "",
            latitude: 0,
            longitude: 0,
            zip_code: "",
            time_zone: "",
            asn: "",
            as: "",
            is_proxy: false
        }
    )



    return (
        <div className="App">
            <AppContext.Provider value={{ipInfo, setIpInfo}}>
                <Header />
                <InfoPanel/>
                <Map/>
            </AppContext.Provider>
        </div>
    );
}

export default App;
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import "./searchBar.css";
import {getApiData} from "../../data/data";
import {useAppContext} from "../../context/context";
import Swal from "sweetalert2";


export function SearchBar() {
    const [addressIp, setAddressIp] = useState("")
    const {setIpInfo} = useAppContext();

    const updateContext = () => {
        if (!isPiValide(addressIp)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please enter a valid IP address!",
            });
            return;
        }

        getApiData(addressIp).then(data => {
            console.log(data)
            setIpInfo({
                ip: data.ip,
                country_code: data.country_code,
                country_name: data.country_name,
                region_name: data.region_name,
                city_name: data.city_name,
                latitude: data.latitude,
                longitude: data.longitude,
                zip_code: data.zip_code,
                time_zone: data.time_zone,
                asn: data.asn,
                as: data.as,
                is_proxy: data.is_proxy,
            })
        })
    }

    const isPiValide = (ip) => {
        const regExp = new RegExp('^((25[0-5]|2[0-4][0-9]|[01]?[0-9]{1,2})\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9]{1,2})$');
        return regExp.test(ip);
    }
    return (
        <>
            <div className="searchBar">
                <input type="text" value={addressIp}
                       onChange={(e) => setAddressIp(e.target.value)}>
                </input>
                <button onClick={() => {
                    updateContext()
                }}>
                    <FontAwesomeIcon icon={faChevronRight}/>
                </button>
            </div>
        </>
    )
}
import {createContext, useContext} from "react";


export const AppContext = createContext({
    ipInfo: {
        ip: "196.112.180.253",
        country_code: "MA",
        country_name: "Morocco",
        region_name: "Tanger-Tetouan-Al Hoceima",
        city_name: "Asilah",
        latitude: 35.46502,
        longitude: -6.0348,
        zip_code: "90050",
        time_zone: "+01:00",
        asn: "36925",
        as: "Meditelecom",
        is_proxy: false
    },
    setIpInfo: () => { }
});


export function useAppContext() {
    const {ipInfo, setIpInfo} = useContext(AppContext);
    if (!ipInfo) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return {ipInfo, setIpInfo};
}
import './infoPanel.css';
import { useAppContext} from "../../context/context";


export function InfoPanel() {


    const {ipInfo} = useAppContext();

    return (
        <>
            <div className="container">
                <div className="infoPanel">
                    <div className="info">
                        <div className="infoTitle">IP ADDRESS</div>
                        <div className="infoData">{ipInfo.ip}</div>
                    </div>
                    <div className="divider"></div>
                    <div className="info">
                        <div className="infoTitle">LOCATION</div>
                        <div className="infoData">{ipInfo.country_name}</div>
                    </div>
                    <div className="divider"></div>
                    <div className="info">
                        <div className="infoTitle">TIMEZONE</div>
                        <div className="infoData">{ipInfo.time_zone}</div>
                    </div>
                    <div className="divider"></div>
                    <div className="info">
                        <div className="infoTitle">ISP</div>
                        <div className="infoData">{ipInfo.as}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
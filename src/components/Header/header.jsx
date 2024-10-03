import './Header.css' ;
import { SearchBar } from '../SearchBar/searchBar';
export function Header() {
    return (
        <>
            <div className="container">
                <div className="header">
                    <div id="title">IP Address Tracker</div>
                    <div className="searchBar">
                        <SearchBar />
                    </div>
                </div>
            </div>


        </>
    )
}
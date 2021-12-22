import React, { useState } from "react"
import '../App.css'
import AppsIcon from '@mui/icons-material/Apps';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddIcon from '@mui/icons-material/Add';
import { useLocation, Link } from 'react-router-dom';
/**
 * Component: Header Component
 * Description: Header
 * @param {*} props 
 * @returns 
 */

const HeaderComp = ({ callAction }) => {
    const location = useLocation();
    const [listView, setListView] = useState(true);
    const [searchResult, setSearchResult] = useState('');

    const handleClick = (param, type) => {
        callAction(param, type)
        if (type == 'VIEW' && param == 'LIST') {
            setListView(false)
        }
        if (type == 'VIEW' && param == 'CARD') {
            setListView(true)
        }

    }
    const handleSearch = (event) => {
        if (searchResult) {
            callAction(searchResult, 'SEARCH')
        }

    }
    const handOnChange = (event) => {
        setSearchResult(event.target.value)
    }

    return (
        <>
            <div class="topnav">
                <a className="logo" href="#">
                    Zensar Technology
                </a>
                {location.pathname == '/' &&
                    (
                        <>
                            <a href="#" title="View">

                                {listView ? <FormatListBulletedIcon onClick={() => handleClick('LIST', 'VIEW')} /> : <AppsIcon onClick={() => handleClick('CARD', 'VIEW')} />}

                            </a>
                            <a href="#" onClick={() => handleClick('NEW', 'ADDENTRY')} >
                                <AddIcon />
                            </a>
                            <a href="#" title="Search">
                                <input type="text" placeholder="Search by title" onChange={handOnChange} />
                                <button onClick={handleSearch}>Search</button>
                            </a>
                        </>
                    )
                }
                <Link className="logo" to="/">Home</Link>
                <Link className="logo" to="/about">About Us</Link>
                

            </div>

        </>
    )
}

export default HeaderComp;
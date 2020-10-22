import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom'

function sortFolders() {

}

function Sidebar(props) {
    console.log(props);

    return(
        <div className='sidebar'>

            <div className='folders'>
                {props.folders.map((name, index) => (
                    <Link to={'/folders/' + name.id} key={index}>{name.name}</Link>
                ))}
            </div>

            <button>Add Folder</button>
            
        </div>
    );
}

export default Sidebar;
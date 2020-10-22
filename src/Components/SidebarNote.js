import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom'

function SidebarNote(props) {
    console.log(props);

    return (
        <div className='sidebar'>

            <div className='folders'>
                <Link to='/'>
                    <button>
                        Back
                    </button>
                </Link>
            </div>

        </div>
    );
}

export default SidebarNote;
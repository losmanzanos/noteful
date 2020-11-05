import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

import NoteContext from './context';

function SidebarNote() {

    return (
        <NoteContext.Consumer>
            {function renderProp() {
                return (
                    <div className='sidebar'>

                        <div className='folders'>
                            <Link to='/'>
                                <button>Back</button>
                            </Link>
                        </div>

                    </div>
                );
            }

            }
        </NoteContext.Consumer>
    );
}

export default SidebarNote;
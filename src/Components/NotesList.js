import React from 'react';
import NoteItem from './NoteItem';
import { Link } from 'react-router-dom';
import './NotesList.css';

function NotesList(props) {
    const notes = props.notes.filter(note => note.folderId == props.match.params.id || !props.match.params.id)

    return(
        <div>
            <div className='notes'>
                {notes.map((name, index) => (
                    <div className='notesitems'>
                    <Link to={'/notes/' + name.id} key={name.index}>{name.name}</Link>
                    <br />
                    <p>{name.modified}</p>
                    <button>Delete Note</button>
                    <br />
                    </div>
                ))}
            </div>
        <button className='addnote'>Add Note</button>
        </div>
    );
}

NotesList.defaultProps = {
    match: {
        params: {}
    }
}

export default NotesList;
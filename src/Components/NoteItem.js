import React from 'react';
import NoteContext from './context';
import Note from './Note';
import PropTypes from 'prop-types';

function NoteItem(props) {

    return (
        < NoteContext.Consumer >
            { function renderProp(value) {
                const note = value.notes.find(note => note.id === props.match.params.id) || {}
                return (
                    <div>
                        <Note note={note} handleDeleteNote={value.handleDeleteNote} history={props.history} />
                        <p>{note.content}</p>
                    </div>
                );
            }
            }
        </NoteContext.Consumer >
    );
}

Note.propTypes = {
    match: PropTypes.shape( {
        params: PropTypes.shape({
            id: PropTypes.string,
        })
    }),
}

export default NoteItem;
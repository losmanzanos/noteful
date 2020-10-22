import React from 'react';


function NoteItem(props) {
    const note = props.notes.find(note => note.id == props.match.params.id) || {} 
    console.log(props);
    return(
        
            <div>
                <div className='noteitem'>
                
    <h3>{note.name}</h3>
                    
                    <p>Date Modified: {note.modified}</p>
                    <button>Delete Note</button>

                </div>
                <p>{note.content}</p>
            </div> 
       
    );
}

export default NoteItem;
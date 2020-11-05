import React from 'react';
import './AddFolder.css';
import NoteContext from './context';

class NewFolder extends React.Component {
    static contextType = NoteContext;
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            error: null,
        }
        this.folderName = React.createRef();
    }

    updateName(folderName) {
        this.setState({ name: folderName });
    }

    handleSubmit(event) {
        event.preventDefault();

        fetch('http://localhost:9090/folders', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then((result) => result.json())
            .then((info) => { this.context.getData() })
            .catch(error => {
                this.setState({
                    error: error.message,
                })
            })
    }

    render() {
        return (
            <form className='addfolder' onSubmit={e => this.handleSubmit(e)} >
                <div className='form-group'>
                    <label htmlFor="folder">Folder Name:</label>
                    <input type="text" className="foldername"
                        name="folder" id="folder"
                        ref={this.state.name}
                        placeholder='Name'
                        // defaultValue='Name'
                        required
                        onChange={e => this.updateName(e.target.value)} />
                </div>

                {this.state.error}
                <button type='submit' className='foldersubmit'>Submit</button>
            </form>
        );
    }
}

export default NewFolder;
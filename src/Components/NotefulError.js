import React from 'react';
import './NotefulError.css';

export default class NotefulError extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <h2 className='error'>Shoot, something went wrong... <br /><br />
                💩</h2>
            );
        }
        return this.props.children;
    }
}
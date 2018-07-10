import React, {Component} from 'react';

import './Github.css'

class Github extends Component{
    state = {
        userName: '',
    }

    handleChange = (ev) => {
        this.setState({userName: ev.target.value});
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.props.history.push(`/github/${this.state.userName}`);
    }

    render(){
        return(
            <div className="Github">
                <img
                    src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png"
                    alt="GitHub"
                    className="logo"
                />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" value={this.state.userName} onChange={this.handleChange} required autoFocus />
                    </div>
                    <div>
                        <button type="submit">
                            Look up GitHub user
                        </button>
                     </div>
                </form>
            </div>
        )
    }

}

export default Github;
import React, { Component, PropTypes } from 'react';

class Pane extends Component {
    static propTypes = {
        children: PropTypes.node,
    };

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Pane;

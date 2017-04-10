import React, { Component, PropTypes } from 'react';

class Tabs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: parseInt(sessionStorage.getItem(`${this.props.id}CurrentTab`)) || 0
        }
    }

    static propTypes = {
        id: PropTypes.string,
        children: PropTypes.node
    };

    static defaultProps = {
        id: '',
        children: {}
    };

    handleClick(index, event) {
        event.preventDefault();
        this.setState({
            selected: index
        });
        sessionStorage.setItem(`${this.props.id}CurrentTab`, index);
    }

    _renderTitles() {
        function labels(child, index) {
            let activeTab = ((this.state.selected === index) ? 'active' : '');
            return (
                <li key={index} className="tab">
                    <a href="#" onClick={this.handleClick.bind(this, index)} className={`${activeTab} tab-label ${child.props.label.toLowerCase()}`}>
                        {child.props.label}
                    </a>
                </li>
            );
        }
        return (
            <ul className="tabs-labels">
                {this.props.children.map(labels.bind(this))}
            </ul>
        );
    }

    _renderContent() {
        return (
            <div className={`tabs-content tab-${this.props.children[this.state.selected].props.label.toLowerCase()}`}>
                {this.props.children[this.state.selected]}
            </div>
        );
    }

    render() {
        return (
            <div className="tabs">
                {this._renderTitles()}
                {this._renderContent()}
            </div>
        )
    }
}

export default Tabs;

import React, {Component} from 'react';
import { connect } from 'react-redux';

class TestSelected extends Component {

    render() {

        if (!this.props.selected) {
            return <div>Select item</div>
        }

        return (
            <did>
                TEST SELETCTED
                <h1>{this.props.selected.title}</h1>
                <p>{this.props.selected.year}</p>
                {JSON.stringify(this.props.selected)}
            </did>
        )
    }

}

function mapStateToProps (state) {
    return {
        selected:state.selected
    }
}

export default connect(mapStateToProps)(TestSelected);
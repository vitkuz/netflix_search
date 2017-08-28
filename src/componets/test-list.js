import React, {Component} from 'react';
import { connect } from 'react-redux';
import {selectItem} from '../actions/actions';
import { bindActionCreators } from 'redux';

class TestList extends Component {

    renderList() {
        return this.props.list.map((item) => {
            return (
                <div key={item.title} onClick={()=>this.props.selectItem(item)}>
                    {item.title}
                </div>
            )
        })
    }

    render() {
        return (
            <did>
                {this.renderList()}
            </did>
        )
    }

}

function mapStateToProps (state) {
    return {
        list:state.list
    }
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators({selectItem:selectItem},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(TestList);
import _ from 'lodash';
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import { ListItem } from './ListItem';

import { employeesFetch } from '../actions';

class EmployeeList extends Component {
    componentDidMount() {
        employeesFetch();
    }

    keyExtractor = item => item.uid;

    renderRow({ employee }) {
        return <ListItem employee={employee.item} />;
    }

    render() {
        return (
            <FlatList
                data={this.props.employees}
                renderItem={this.renderRow}
                keyExtractor={this.keyExtractor}
            />
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });

    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
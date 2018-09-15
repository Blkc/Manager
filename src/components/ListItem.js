import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { library } = this.props;

        return (
            <CardSection>
                <Text style={{ flex: 1 }}>
                    {library.item.description}
                </Text>
            </CardSection>
        );
    }

    render() {
        const { titleStyle } = styles;
        const { item } = this.props.library;
        
        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(item.id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{item.title}</Text>
                    </CardSection>
                    {this.props.expanded ? this.renderDescription() : null}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.item.id;
    
    return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);

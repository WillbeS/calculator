import React from 'react';
import toastr from 'toastr';
import { connect } from 'react-redux';

import { create } from '../itemActions';
import CreateItemView from './CreateItemView';
import ItemValidRules from '../ItemValidRules';
import FormHelper from '../../../../core/utils/FormHelper';
import actionTypes from '../../../constants/actionTypes';

class CreateItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            item: {
                title: '',
                calories: 0,
                portion: 100,
            },
            errors: [],
        }

        this.changeHandler = this.changeHandler.bind(this);
        this.blurHandler = this.blurHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.error) {
            toastr.error(newProps.error);
        }

        if (newProps.remote === actionTypes.ITEM_CREATED) {
            this.props.history.push('/');
        }
    }

    changeHandler(event) {
        FormHelper.handleInputChange.bind(this)(event, 'item');
    }

    blurHandler(event) {
        FormHelper.handleValidation.bind(this)(event, ItemValidRules);
    }


    submitHandler(event) {
        event.preventDefault();

        try {
            FormHelper.checkRequiredFileds.bind(this)(this.state.item, ItemValidRules);
            this.props.create(this.state.item);
        } catch (error) {
            toastr.error(error);
        }
    }

    render() {
        return (
            <CreateItemView
                item={this.state.item}
                errors={this.state.errors}
                changeHandler={this.changeHandler}
                submitHandler={this.submitHandler}
                blurHandler={this.blurHandler} />
        )
    }
}

function mapStateToProps(state) {
    return {
        remote: state.item.remote,
        error: state.item.error,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        create: (data) => dispatch(create(data)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateItem);
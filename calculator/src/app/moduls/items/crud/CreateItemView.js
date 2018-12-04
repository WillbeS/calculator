import React from 'react';
import Input from '../../../components/ui/forms/Input';
import Submit from '../../../components/ui/forms/Submit';

const CreateItemView = (props) => {
    return (
        <div className='row'>
            <div className='col-md-5 offset-md-3'>
                <h1>Create New Food Item</h1>
                <p>Please fill in this form to create an account.</p>
                <form>
                    <div>{props.errors.title}</div>
                    <Input
                        name='title'
                        placeholder='Title'
                        value={props.item.title}
                        changeHandler={props.changeHandler}
                        blurHandler={props.blurHandler} />

                    <div>{props.errors.calories}</div>
                    <Input
                        name='calories'
                        placeholder='Calories'
                        value={props.item.calories}
                        changeHandler={props.changeHandler}
                        blurHandler={props.blurHandler} />

                    <div>{props.errors.portion}</div>
                    <Input
                        name='portion'
                        placeholder='Portion'
                        value={props.item.portion}
                        changeHandler={props.changeHandler}
                        blurHandler={props.blurHandler} />

                    <Submit
                        value='Add'
                        submitHandler={props.submitHandler} />
                </form>
            </div>
        </div>
    );
}

export default CreateItemView;
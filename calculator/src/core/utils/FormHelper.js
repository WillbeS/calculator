import { isValid, isRequired } from '../validation/Validator';

class FormHelper {
    static handleInputChange(event, stateField) {
        const target = event.target;
        const field = target.name;
        let value = target.value;

        if (value !== '' && !isNaN(value)) {
            value = Number(value);
        }

        const state = this.state[stateField];
        state[field] = value;
        this.setState({ stateField: state });
    }

    static handleValidation(event, rules) {
        const target = event.target;
        const field = target.name;
        let value = target.value;

        const result = isValid(field, value, rules[field]);

        if (!result.isValid) {
            const errors = this.state.errors;
            errors[field] = result.message;
            this.setState(errors);
        } else {
            const errors = this.state.errors;
            if (errors.hasOwnProperty(field)) {
                delete errors[field];
            }

            this.setState(errors);
        }
    }

    static checkRequiredFileds(obj, rules) {
        for (const field in obj) {
            if (rules[field].isRequired) {
                const result = isRequired(field, obj[field]);

                if(!result.isValid) {
                    const errors = this.state.errors;
                    errors[field] = result.message;
                    this.setState(errors);
                }
            }
        }

        if(Object.keys(this.state.errors).length > 0) {
            throw new Error('You have errors in your form. Please check all fields and try again.');
        }
    }
}

export default FormHelper;
export function isValid(field, value, rules) {
    for (const rule in rules) {
        const result = validate[rule](field, value, rules[rule]);
        if(!result.isValid) {
            return result;
        }
    }

    return {
        isValid:  true,
        message: '',
    };
}

export function isRequired(field, value) {
    return validate.isRequired(field, value);
}

const validate = {
    isRequired: (field, value) => {
        return {
            isValid:  value !== '',
            message: `<${field}> field cannot be empty.`,
        };
    },
    minLength: (field, value, min) => {
        
        return {
            isValid:  value.length >= min,
            message: `<${field}> must be at least ${min} symbols long.`,
        };
    },
    maxLength: (field, value, max) => {
        return {
            isValid:  value.length <= max,
            message: `<${field}> cannot be longet than ${max} symbols.`,
        };
    }
}
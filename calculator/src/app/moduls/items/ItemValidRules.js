const ItemValidRules = {
    title: {
        isRequired: true,
        minLength: 3,
        maxLength: 20
    },
    calories: {
        isRequired: true,
    },
    portion: {
    }
}

export default ItemValidRules;
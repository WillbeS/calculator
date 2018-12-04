const UserValidRules = {
    username: {
        isRequired: true,
        minLength: 3,
        maxLength: 20
    },
    password: {
        isRequired: true,
        minLength: 3,
        maxLength: 20
    },
    repeatPassword: {
        isRequired: true,
        minLength: 3,
        maxLength: 20
    }
}

export default UserValidRules;
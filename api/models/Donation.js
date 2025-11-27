module.exports = {
    attributes: {
        date: {
            type: 'ref',
            columnType: 'datetime',
            required: true,
            unique: false,
        },
        amount: {
            type: 'number', // Changed from Number to 'number'
            required: true,
            unique: false
        },
        description: {
            type: 'string',
            required: false,
            unique: false
        },
        owner:{
            model: 'user'
        }
    }
} 
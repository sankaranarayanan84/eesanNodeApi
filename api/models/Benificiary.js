module.export = {
    attributes : {
        benificiary_name: {
            type: 'string',
            required: true,
            unique: false
        },
        benificiary_request_date: {
            type: 'ref',
            columnType: 'datetime',
            required: true,
            unique: false,
        },
        benificiary_amount: {
            type: 'number', // Changed from Number to 'number'
            required: true,
            unique: false
        },
        benificiary_description: {
            type: 'string',
            required: false,
            unique: false
        },
        benificiary_status: {
            type: 'string',
            isIn: ['new', 'approved', 'completed'], // allowed values
            defaultsTo: 'new'
        }
    }
}
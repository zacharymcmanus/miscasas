const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rentals');

var UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, 'Please enter a first name.'],
            minlength: [2, 'First name must be at least 2 characters long.']
        },
        lastName: {
            type: String,
            required: [true, 'Please enter a last name.'],
            minlength: [2, 'Last name must be at least 2 characters long.']
		},
		phone: {
            type: Number,
            required: [true, 'Please enter a phone number.'],
            minlength: [10, 'Phone number must contain at least 10 digits.']
        },
        email: {
            type: String,
            unique: true,
            required: [true, 'Please enter an email.'],
            minlength: [3, 'Email address must be at least 3 characters in length.']
        },
        password: {
            type: String,
            required: [true, 'Password is required.'],
            minlength: [8, 'Password must be at least 8 characters in length.']
        },
        posted_properties: {
            type: [PropertySchema]
        },
    },
    {
        timestamps: true
    }
);

var PropertySchema = new mongoose.Schema(
    {
        address: {
            type: String,
            required: [true, 'Please enter an address.']
        },
        propertyType: {
            type: String,
            required: [true, 'Please enter a property type.'],
        },
        unit: {
            type: String,
		},
        rentPrice: {
            type: Number
        },
        description: {
            type: String
        },
        securityDeposit: {
            type: String
        },
        dateAvailable: {
            type: Date
        },
        leaseDuration: {
            type: String
        },
        leaseTerms: {
            type: String
        },
        beds: {
            type: Number
        },
        baths: {
            type: Number
        },
        squareFeet: {
            type: Number
        }
    },
    {
        timestamps: true
    }
);

mongoose.model('User', UserSchema);
mongoose.model('Property', PropertySchema);

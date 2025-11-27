var bcrypt = require('bcryptjs');

module.exports = {
  attributes: {
    firstname: {
      type: 'string',
      required: true,
      unique: false,
    },
    lastname: {
      type: 'string',
      required: true,
      unique: false,
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
    },
    phone: {
      type: 'integer',
      required: true,
      unique: true,
    },
    password: {
      type: 'string',
      required: true,
    },
    donations: {
      collection: 'donation',
      via: 'owner'
    },
    type: {
      type: 'string',
      isIn: ['admin', 'beneficiary', 'sponsor'], // allowed values
      defaultsTo: 'sponsor'                 // default if not provided
    }

    // Add other user attributes as needed
  },
  beforeCreate: function(valuesToSet, proceed) {
    // Hash the password with a salt
    bcrypt.genSalt(10, function(err, salt) { // 10 salt rounds is a good default
      if (err) return proceed(err);

      bcrypt.hash(valuesToSet.password, salt, function(err, hash) {
        if (err) return proceed(err);

        valuesToSet.password = hash; // Update the password field with the hash
        return proceed(); // Continue with the creation process
      });
    });
  },
  // You might also want a beforeUpdate hook if users can change their password
  beforeUpdate: function(valuesToSet, proceed) {
    if (valuesToSet.password) { // Only hash if the password field is being updated
      bcrypt.genSalt(10, function(err, salt) {
        if (err) return proceed(err);

        bcrypt.hash(valuesToSet.password, salt, function(err, hash) {
          if (err) return proceed(err);

          valuesToSet.password = hash;
          return proceed();
        });
      });
    } else {
      return proceed(); // No password change, continue
    }
  },
  /**
   * customToJSON()
   *
   * This method is called each time a User record is serialized to JSON.
   *
   * @returns {object} The sanitized user record.
   */
  customToJSON: function() {
    // Return a shallow copy of this record with the password removed.
    return _.omit(this, ['password']);
  }
};
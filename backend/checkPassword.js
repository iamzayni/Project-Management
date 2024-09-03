const bcrypt = require('bcryptjs');

// Your plain text password (the one you used during signup)
const password = 'zain12345'; // Replace this with the actual password you used during signup

// The hashed password from the database
const hashedPassword = '$2a$10$TCCYk0S/NgD1oI5DRFGsW.6.Ur1ql3mBJ1tCjsQ87EoKYV1VYoal2'; // Replace this with the hashed password from your database

bcrypt.compare(password, hashedPassword, function(err, isMatch) {
    if (err) throw err;
    console.log('Password comparison result:', isMatch); // Should print true if matched
});

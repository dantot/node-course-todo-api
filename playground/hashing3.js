const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// });

var hashedPassword = '$2a$10$leB62tZNr3Wft/r.gb2FBebQKYlN53LnJzfbT/VpDzgnTsFtnr44G';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});

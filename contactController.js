// contactController.js
// Import contact model
Contact = require('./contactModel');
// Handle index actions
exports.index = function (req, res) {
    Contact.get(function (err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: contacts
        });
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var contact = new Contact();


    contact.name = req.query.name ? req.query.name : contact.name;
    contact.gender = req.query.gender;
    contact.email = req.query.email;
    contact.phone = req.query.phone;
// save the contact and check for errors
    contact.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New contact created!',
            data: contact
        });
    });
};
// Handle view contact info
exports.view = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: contact
        });
    });
};
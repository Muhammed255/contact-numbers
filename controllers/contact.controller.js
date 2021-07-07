import Contact from "../models/contact.model";


export default {
    async create_contact(req, res, next) {
        try {
            const {name, phone, address, notes} = req.body;
            const newContact = new Contact({
                name, phone, address, notes
            });
            const contact = await newContact.save();
            res.status(200).json({msg: "success", contact});
        } catch (err) {
            res.status(500).json({error: err});
        }
    }
}
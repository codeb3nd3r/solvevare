import contactModel from "./contact_model.js";


const saveForm = async(req, res) => {
    const {name, email, message} = req.body;

    try {
        const response = await contactModel.create({
            name, email, message
        })
        console.log(response)
        res.status(201).send({message: "created"})
    } catch(error) {
        console.log("Error in saving the form", error);
    }
}


export default saveForm;
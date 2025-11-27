/**
 * DonationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    async create(req, res) {
        try{
            const newDonation = await Benificiary.create(req.body).fetch()
            return res.status(201).json(newDonation);
        }catch (err){
            return res.serverError(err)
        }
    },
    async getBenificiary(req, res) {
        try{
            const benificiary = await Benificiary.find();
            return res.status(200).json(benificiary);
        }catch (err){
            return res.serverError(err)
        }
    },
    // async getDonationsByUser(req, res) {
    //     try {
    //         const userId = req.params.userId;
    //         const donations = await Donation.find({ owner: userId }).populate('owner');
    //         return res.status(200).json(donations);
    //     } catch (err) {
    //         return res.serverError(err);
    //     }
    // }

};

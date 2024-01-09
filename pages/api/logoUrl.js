import { dbConnect } from '@/lib/mongoose';
import LogoModel from '@/models/logoModel';

dbConnect();
export default async function handler(req, res) {
    if (req.method === 'PUT') {
        try {
            const updatedLogo = await LogoModel.findOneAndUpdate({}, { imageUrl: req.body.imageUrl }, { new: true });
            return res.status(200).json(updatedLogo);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    } else if (req.method === 'GET') {
        try {
            const logo = await LogoModel.findOne({}).sort({ _id: -1 });
            return res.status(200).json(logo);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}
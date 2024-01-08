import { dbConnect } from '@/lib/mongoose';
import TextModel from '@/models/textModel';

dbConnect();

export default async function handler(req, res) {
    if (req.method === 'PUT') {
        try {
            const updatedText = await TextModel.findOneAndUpdate({}, { buttonText: req.body.buttonText }, { new: true });
            return res.status(200).json(updatedText);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    } else if (req.method === 'GET') {
        try {
            const text = await TextModel.findOne({});
            return res.status(200).json(text);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}
import { dbConnect } from '@/lib/mongoose';
import EmailModel from '@/models/emailModel';

dbConnect();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
       
            const newEmail = new EmailModel({ email: req.body.email });
            await newEmail.save();

            return res.status(201).json(newEmail);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}
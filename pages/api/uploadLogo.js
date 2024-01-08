import multiparty from 'multiparty';
import cloudinary from 'cloudinary';
import { dbConnect } from '@/lib/mongoose';
import LogoModel from '@/models/logoModel';

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handle(req, res) {
    await dbConnect();

    const form = new multiparty.Form();
    const { files } = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) reject(err);
            resolve({ files });
        });
    });

    const logoFile = files.file[0];

    if (!logoFile) {
        return res.status(400).json({ error: 'No file provided' });
    }

    try {
        const result = await cloudinary.v2.uploader.upload(logoFile.path, {
            folder: 'logos',
            public_id: `logo_${Date.now()}`,
            resource_type: 'auto',
        });

        const logoUrl = result.secure_url;


        const logo = new LogoModel({ imageUrl: logoUrl });
        await logo.save();

        return res.status(201).json({ logoUrl });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const config = {
    api: { bodyParser: false },
};
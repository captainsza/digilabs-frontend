import mongoose from 'mongoose';

const LogoSchema = new mongoose.Schema({
    imageUrl: { type: String, required: true },
});

const LogoModel = mongoose.models.Logo || mongoose.model('Logo', LogoSchema);

export default LogoModel;
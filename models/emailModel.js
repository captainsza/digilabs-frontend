import mongoose from 'mongoose';

const EmailSchema = new mongoose.Schema({
    email: { type: String, required: true },
});

const EmailModel = mongoose.models.Email || mongoose.model('Email', EmailSchema);

export default EmailModel;
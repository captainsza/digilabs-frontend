import mongoose from 'mongoose';

const TextSchema = new mongoose.Schema({
    buttonText: { type: String, required: true },
});

const TextModel = mongoose.models.Text || mongoose.model('Text', TextSchema);

export default TextModel;
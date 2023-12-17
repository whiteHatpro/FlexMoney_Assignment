import mongoose from 'mongoose';

const batchSchema = new mongoose.Schema({
  batchNumber: {
    type: String,
    required: true
  },
  timing: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
},{
  timestamps: true
});

export default mongoose.model('Batch', batchSchema);
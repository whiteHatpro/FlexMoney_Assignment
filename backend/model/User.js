import mongoose from 'mongoose';
const userSchema = mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  age:{
    type: Number,
    required: true
  },
  batches: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Batch'
  }]
},{
  timestamps: true
});

export default mongoose.model('User', userSchema);
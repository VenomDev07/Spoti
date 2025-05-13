import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://venomdev07:mammipapa%402003@cluster0.yae4t.mongodb.net/spotify');
    console.log('Connected to MongoDB Atlas successfully!');
  } catch (err) {
    console.error('Error connecting to MongoDB Atlas:', err.message);
  }
};

connectDB();
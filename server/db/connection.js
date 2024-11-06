import mongoose from 'mongoose';

const uri = 'mongodb+srv://fullstack:mongodbPass@data.ditziev.mongodb.net/employees?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Optional, can set a custom timeout
    });
    console.log("Successfully connected to MongoDB!");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit the process with an error if the connection fails
  }
};

export default connectDB;

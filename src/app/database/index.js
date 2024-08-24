import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionUrl = process.env.MONGODB_URI;

  if (!connectionUrl) {
    throw new Error("MONGODB_URI is not defined in .env file");
  }

  try {
    await mongoose.connect(connectionUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Blog database connection is successful");
  } catch (error) {
    console.log("Database connection failed:", error);
    throw error;
  }
};

export default connectToDB;

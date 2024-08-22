import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://kanishka:kanishka@23@atlascluster.tgmmi.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster";
  mongoose
    .connect(connectionUrl)
    .then(() => console.log("Blog database connection is successfull"))
    .catch((error) => console.log(error));
};

export default connectToDB;

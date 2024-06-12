import mongoose from "mongoose";

export const connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
    });
    // console.log(await mongoose.connect(process.env.MONGO_URL));
    console.log(`mongodb is connected",${conn.connection.host}`);
  } catch (error) {
    console.log(`error:${error.message}`);
  }
};

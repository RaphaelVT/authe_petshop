import mongoose from "mongoose";

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const name = process.env.DB_NAME;
const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${user}:${password}@cluster0.ubya0.mongodb.net${name}}`
    );
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB", error);
  }
};

connectDB();

export default mongoose;

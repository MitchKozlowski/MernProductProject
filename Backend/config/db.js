import mongoose from 'mongoose';
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
                    // For this to work you need the Tilda key back tick, not and appostrophie
    } catch(error){
        console.error(`Error: ${error.message}`);
        process.exit(1); // 1 code mean an error
    }
};
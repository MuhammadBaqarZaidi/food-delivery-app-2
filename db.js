import { MongoClient } from 'mongodb';

const uri =
  'mongodb+srv://BaqarZaidi:Naseem.786@cluster0.ny8poex.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function connectToDatabase() {
  try {
    await client.connect();
    return client.db('Cluster0');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
}

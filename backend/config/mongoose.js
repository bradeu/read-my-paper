import mongoose from 'mongoose';

const mongoDBUri = 'mongodb+srv://read-my-paper:Benmatthew24@read-my-paper.p0allm4.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoDBUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to DB.');
});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected.');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose connection disconnected due to app termination.');
    process.exit(0);
  });
});

export default mongoose;

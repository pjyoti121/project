const mongoose = require('mongoose');
const mongoURI = 'mongodb://gofood:gofood789@ac-kqduqfd-shard-00-00.glygqou.mongodb.net:27017,ac-kqduqfd-shard-00-01.glygqou.mongodb.net:27017,ac-kqduqfd-shard-00-02.glygqou.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-9bvre4-shard-0&authSource=admin&retryWrites=true&w=majority';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log('Connected to MongoDB');

    const fetchedData = await mongoose.connection.db.collection('food_items').find({}).toArray();
    console.log('Fetched data:');
    console.log(fetchedData);

    const foodCategory = await mongoose.connection.db.collection('foodCategory').find({}).toArray();
    console.log('Fetched food categories:');
    console.log(foodCategory);

    global.food_items = fetchedData;
    global.foodCategory = foodCategory;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = mongoDB;

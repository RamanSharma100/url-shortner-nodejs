const mongoose = require('mongoose');
// const url =
//   'mongodb+srv://ramansharma:Krantivir100@cluster0-hicpo.mongodb.net/my_portfolio?retryWrites=true&w=majority';
const url = 'mongodb://localhost:27017/my_portfolio';

const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('database is connected Successfully');
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;

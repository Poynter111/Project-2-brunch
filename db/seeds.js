const mongoose  = require('mongoose');
mongoose.Promise = require('bluebird');


const { databaseURI } = require('../config/environment');
mongoose.connect(databaseURI);

const Post = require('../models/post');
const User = require('../models/user');

Post.collection.drop();
User.collection.drop();


User
  .create([
    {
      username: 'kenny',
      email: 'kenny@ga.co',
      password: 'p',
      passwordConfirmation: 'p'
    },
    {
      username: 'billy',
      email: 'billy@ga.co',
      password: 'p',
      passwordConfirmation: 'p'
    },
    {
      username: 'tom',
      email: 'tom@ga.co',
      password: 'p',
      passwordConfirmation: 'p'
    },
    {
      username: 'Alice',
      email: 'Alice@ga.co',
      password: 'p',
      passwordConfirmation: 'p'
    },
    {
      username: 'kate',
      email: 'kate@ga.co',
      password: 'p',
      passwordConfirmation: 'p'
    },
    {
      username: 'Greg',
      email: 'greg@ga.co',
      password: 'p',
      passwordConfirmation: 'p'
    }
  ])
  .then(users => {
    console.log(`${users.length} users were created.`);

    return Post.create([
      {
        name: 'Caravan',
        location: 'Kings-cross',
        date: new Date(2015, 07, 15),
        photo: 'https://lh6.googleusercontent.com/-b0q2IGJX_WI/USIZDOR6v4I/AAAAAAAAFLw/sFNDy6qyI_k/s720/caravan+%286+of+8%29.jpg',
        rating: 4,
        service: 4,
        price: 4,
        food: 4,
        user: users[0]._id
      },{
        name: 'Breakfast-Club',
        location: 'Soho',
        date: new Date(2016, 09, 23),
        photo: 'http://www.oubruncher.com/photos1/1456_1.jpg',
        rating: 4,
        service: 4,
        price: 4,
        food: 4,
        user: users[1]._id
      },{
        name: 'Notes',
        location: 'Kings-cross',
        date: new Date(2015, 08, 02),
        photo: 'https://s3-media2.fl.yelpcdn.com/bphoto/7NKgygXE45a_BkdZuV0BqQ/348s.jpg',
        rating: 4,
        service: 4,
        price: 4,
        food: 4,
        user: users[1]._id
      },{
        name: 'Notes',
        location: 'Kings-cross',
        date: new Date(2015, 08, 02),
        photo: 'https://s3-media2.fl.yelpcdn.com/bphoto/7NKgygXE45a_BkdZuV0BqQ/348s.jpg',
        rating: 4,
        service: 4,
        price: 4,
        food: 4,
        user: users[2]._id
      },{
        name: 'Notes',
        location: 'Kings-cross',
        date: new Date(2015, 08, 02),
        photo: 'https://s3-media2.fl.yelpcdn.com/bphoto/7NKgygXE45a_BkdZuV0BqQ/348s.jpg',
        rating: 4,
        service: 3,
        price: 1,
        food: 5,
        user: users[2]._id
      },{
        name: 'Notes',
        location: 'Kings-cross',
        date: new Date(2015, 08, 02),
        photo: 'https://s3-media2.fl.yelpcdn.com/bphoto/7NKgygXE45a_BkdZuV0BqQ/348s.jpg',
        rating: 4,
        service: 3,
        price: 1,
        food: 5,
        user: users[3]._id
      },{
        name: 'Notes',
        location: 'Kings-cross',
        date: new Date(2015, 08, 02),
        photo: 'https://s3-media2.fl.yelpcdn.com/bphoto/7NKgygXE45a_BkdZuV0BqQ/348s.jpg',
        rating: 4,
        service: 3,
        price: 1,
        food: 5,
        user: users[4]._id
      },{
        name: 'Notes',
        location: 'Kings-cross',
        date: new Date(2015, 08, 02),
        photo: 'https://s3-media2.fl.yelpcdn.com/bphoto/7NKgygXE45a_BkdZuV0BqQ/348s.jpg',
        rating: 4,
        service: 3,
        price: 1,
        food: 5,
        user: users[2]._id
      },{
        name: 'Notes',
        location: 'Kings-cross',
        date: new Date(2015, 08, 02),
        photo: 'https://s3-media2.fl.yelpcdn.com/bphoto/7NKgygXE45a_BkdZuV0BqQ/348s.jpg',
        rating: 4,
        service: 3,
        price: 1,
        food: 5,
        user: users[4]._id
      },{
        name: 'Notes',
        location: 'Kings-cross',
        date: new Date(2015, 08, 02),
        photo: 'https://s3-media2.fl.yelpcdn.com/bphoto/7NKgygXE45a_BkdZuV0BqQ/348s.jpg',
        rating: 4,
        service: 3,
        price: 1,
        food: 5,
        user: users[4]._id
      },{
        name: 'Notes',
        location: 'Kings-cross',
        date: new Date(2015, 08, 02),
        photo: 'https://s3-media2.fl.yelpcdn.com/bphoto/7NKgygXE45a_BkdZuV0BqQ/348s.jpg',
        rating: 4,
        service: 3,
        price: 1,
        food: 5,
        user: users[5]._id
      },{
        name: 'Notes',
        location: 'Kings-cross',
        date: new Date(2015, 08, 02),
        photo: 'https://s3-media2.fl.yelpcdn.com/bphoto/7NKgygXE45a_BkdZuV0BqQ/348s.jpg',
        rating: 4,
        service: 3,
        price: 1,
        food: 5,
        user: users[2]._id
      },{
        name: 'Notes',
        location: 'Kings-cross',
        date: new Date(2015, 08, 02),
        photo: 'https://s3-media2.fl.yelpcdn.com/bphoto/7NKgygXE45a_BkdZuV0BqQ/348s.jpg',
        rating: 4,
        service: 3,
        price: 1,
        food: 5,
        user: users[3]._id
      },{
        name: 'Notes',
        location: 'Kings-cross',
        date: new Date(2015, 08, 02),
        photo: 'https://s3-media2.fl.yelpcdn.com/bphoto/7NKgygXE45a_BkdZuV0BqQ/348s.jpg',
        rating: 4,
        service: 3,
        price: 1,
        food: 5,
        user: users[4]._id
      },{
        name: 'Notes',
        location: 'Kings-cross',
        date: new Date(2015, 08, 02),
        photo: 'https://s3-media2.fl.yelpcdn.com/bphoto/7NKgygXE45a_BkdZuV0BqQ/348s.jpg',
        rating: 4,
        service: 3,
        price: 1,
        food: 5,
        user: users[0]._id
      }
    ])
  })
  .then(posts => {
    console.log(`${posts.length} posts were created.`);
  })
  .catch(err => console.log(err))
  .finally(()=> mongoose.connection.close());






// Post.create([{
//   name: 'Caravan',
//   location: 'Kings-cross',
//   date: new Date(2015, 07, 15),
//   photo: 'https://lh6.googleusercontent.com/-b0q2IGJX_WI/USIZDOR6v4I/AAAAAAAAFLw/sFNDy6qyI_k/s720/caravan+%286+of+8%29.jpg',
//   rating: 4
// },{
//   name: 'Breakfast-Club',
//   location: 'Soho',
//   date: new Date(2016, 09, 23),
//   photo: 'http://www.oubruncher.com/photos1/1456_1.jpg',
//   rating: 5
// },{
//   name: 'Notes',
//   location: 'Kings-cross',
//   date: new Date(2015, 08, 02),
//   photo: 'https://s3-media2.fl.yelpcdn.com/bphoto/7NKgygXE45a_BkdZuV0BqQ/348s.jpg',
//   rating: 3
// }])

// .then((photos) => {
//   return Album.create({
//     name: 'Holidays in NYC',
//     location: 'New York City',
//     year: new Date(2015, 07, 15),
//     photos: photos.map(photo => photo._id)
//   })
// })
// .then(photos => console.log(`${photos.length} created`))

// .catch(err => console.log(err))
// .finally(()=> mongoose.connection.close())

const db = require('../config/connection');
const { User, Reviews, CreditCards } = require('../models');
const userSeeds = require('./userseeds.json');
const reviewSeeds = require('./reviewseeds.json');
const creditcardseeds = require("./creditcardseeds.json");

db.once('open', async () => {

  try {
    await Reviews.deleteMany({});
    await User.deleteMany({});
    await CreditCards.deleteMany({});

    const madeCC =[];
    const madeUsers =[];

    for (let i = 0; i < userSeeds.length; i++) {
      const { _id, username} = await User.create(userSeeds[i]);
      madeUsers.push(username)
    }


    for (let i = 0; i < creditcardseeds.length; i++) {
      const { _id, ccName} = await CreditCards.create(creditcardseeds[i]);
      madeCC.push(ccName)
      const user = await User.findOneAndUpdate(
        { username: madeUsers[Math.floor(Math.random()*madeUsers.length)] },
        {
          $addToSet: {
            savedCC: _id,
          },
        }
      );
    }

    for (let i = 0; i < reviewSeeds.length; i++) {
      const { _id, reviewAuthor } = await Reviews.create(reviewSeeds[i]);
      const user = await CreditCards.findOneAndUpdate(
        { ccName: madeCC[Math.floor(Math.random()*madeCC.length)] },
        {
          $addToSet: {
            reviews: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

    
 

  console.log('all done!');
  process.exit(0);
});

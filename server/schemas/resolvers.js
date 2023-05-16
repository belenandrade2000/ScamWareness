const { AuthenticationError } = require('apollo-server-express');
const { User, Review, CreditCards } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('users');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('users');
    },
    creditCards: async () => {
      return CreditCards.find();
    },
    creditCard: async (parent, { creditCardId }) => {
      return CreditCards.findOne({ _id: creditCardId }).populate("creditcards");
    },
    reviews: async () => {
      return User.find().populate('reviews');
    },
    review: async () => {
      return User.find().populate('reviews');
    },
    
   
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addReview: async (parent, { reviewText }, context) => {
      if (context.user) {
        const review = await Review.create({
          reviewText,
          reviewAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { reviews: review._id } }
        );

        return review;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addSavedCC: async (parent, {CreditCardId}, context)=> {
      if (context.user) {
        const user = await User.findOneAndUpdate(
          // find user and update their profile with a cc
          { _id: context.user._id },
          { $addToSet: { savedCC: CreditCardId} }
        );
        return user;
      }
      throw new AuthenticationError('You need to be logged in!');
    }
   
   
   
  },
};

module.exports = resolvers;

// add addSavedCC to mutations
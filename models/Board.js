const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const boardSchema = new Schema(
  {
    boardTitle: { type: String, required: true },
    list: [
      {
        listTitle: 'Not Started',
        listCards: [
          {
            cardComment: 'This Project',
          },
        ],
      },
      {
        listTitle: 'In Progress',
        listCards: [
          {
            cardComment: 'Last Project',
          },
        ],
      },
      {
        listTitle: 'Closed',
        listCards: [
          {
            cardComment: 'Not This Project',
          },
        ],
      },
    ],
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);

module.exports = model('Board', boardSchema);

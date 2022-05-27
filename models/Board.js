const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const boardSchema = new Schema(
  {
    boardTitle: { type: String, required: true },
    list: [
      {
        type: new Schema(
          {
            listTitle: { type: String, required: true },
            listCards: [
              {
                type: new Schema({
                  cardComment: { type: String, required: true },
                }),
              },
            ],
          },
          {
            timestamps: {
              createdAt: true,
              updatedAt: true,
            },
          }
        ),
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

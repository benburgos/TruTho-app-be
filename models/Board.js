const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const boardSchema = new Schema(
  {
    boardTitle: { type: String, required: true },
    list: [
      {
        type: new Schema(
          {
            listTitle: String,
            listCards: [
              {
                type: new Schema({
                  cardComment: String,
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

```javascript
const pipeline = [
  {
    $lookup: {
      from: "collectionB",
      localField: "_id",
      foreignField: "foreignKey",
      as: "results"
    }
  },
  {
    $unwind: "$results" //This is where the error may occur
  }
];

await collectionA.aggregate(pipeline).toArray();
```
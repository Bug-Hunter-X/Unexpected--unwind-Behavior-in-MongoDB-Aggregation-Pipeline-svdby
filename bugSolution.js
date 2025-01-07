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
    $unwind: {
      path: "$results",
      preserveNullAndEmptyArrays: true
    }
  },
  {
    $project:{
        _id:1,
        results:{$ifNull: ["$results", {}]} //Handles cases where results is null
    }
  }
];

await collectionA.aggregate(pipeline).toArray();
```
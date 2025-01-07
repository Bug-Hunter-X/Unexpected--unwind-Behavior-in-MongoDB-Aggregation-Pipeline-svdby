# MongoDB Aggregation $unwind Issue

This repository demonstrates an uncommon error encountered when using the `$unwind` stage in MongoDB aggregation pipelines after a `$lookup`.  Specifically, the issue arises when no documents match in the `$lookup` stage.

The problem is that `$unwind` may not handle the absence of matched documents gracefully, leading to unexpected results or silent failures.  The provided example shows a solution to this issue.

## How to Reproduce

1. Clone this repository.
2. Set up a MongoDB instance.
3. Create the collectionA and collectionB as defined in `bug.js`
4. Run `bug.js`. Observe the unexpected behavior.
5. Run `bugSolution.js` to see the corrected behavior

## Solution

The `bugSolution.js` demonstrates a solution using `$unwind` in conjunction with the `$ifNull` operator to improve handling of the case where no documents are found in the lookup.
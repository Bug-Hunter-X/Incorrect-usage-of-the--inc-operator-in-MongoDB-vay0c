```javascript
//Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("650000000000000000000001")},{$inc:{'counter':1}});
//To handle cases where the field does not exist, use $inc with $setOnInsert
db.collection('myCollection').updateOne({"_id":ObjectId("650000000000000000000001")},{$inc:{'counter':1},$setOnInsert:{'counter':0}});
```
exports.handler = async function (event, context, callback) {
  //console.log('Received event:', JSON.stringify(event, null, 2));
  console.log("value1 =", event.key1);
  console.log("value2 =", event.key2);
  console.log("value3 =", event.key3);
  callback(null, event.key1); // Echo back the first key value
};

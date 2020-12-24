
module.exports.getDate = getDate;

function getDate() {

  var today = new Date();

  var options = { weekday: 'long', month: 'long', day: 'numeric' };
  var today  = new Date();

  var day = today.toLocaleDateString("en-Us", options);

  return day;
}


const millisecondsToString = (time) => {
   return  `${("0" + Math.floor((time / 3600000) % 24)).slice(-2)} : ${("0" + Math.floor((time / 60000) % 60)).slice(-2)} : ${("0" + Math.floor((time / 1000) % 60)).slice(-2)}`
}

module.exports = { millisecondsToString }
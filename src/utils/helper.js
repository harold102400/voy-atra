const formatTimeStamp = (timeStamp) => {
  return new Date(timeStamp.seconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const firstCharToUpper = (string) => {
  const sentence = string.toLowerCase().split(' ');
  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  sentence.join(' ');
  return sentence.toString().replaceAll(',', ' ');
};

const getSiteFromEmail = (string) => {
  const regEx = new RegExp('(?<=@).*(?=....)');
  return string.match(regEx)[0];
};

const Helper = {
  formatTimeStamp,
  firstCharToUpper,
  getSiteFromEmail
};

export default Helper;

const formatTimeStamp = (timeStamp) => {
  return new Date(timeStamp.seconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const Helper = {
  formatTimeStamp
};

export default Helper;

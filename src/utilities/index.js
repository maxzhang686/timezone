export function parseDuration(ms) {
  // const seconds = Math.floor(ms/1000);
  //let second = (""+(Math.floor(ms/ 1000) % 60)).slice(-2);
  const seconds = ("" + (Math.floor(ms / 1000) % 60)).slice(-2);

  const minutes = Math.floor(ms / 1000 / 60);

  return { seconds, minutes };
}

export function padLeft(number) {
  if (number < 10) {
    return `0${number}`;
  }
  return `${number}`;
}

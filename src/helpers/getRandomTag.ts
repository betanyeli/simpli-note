const getRandomTag = (arr: any) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex].tagName;
  return item;
};

export default getRandomTag;

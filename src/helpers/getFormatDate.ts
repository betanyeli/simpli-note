const getFormatDate = (date: string) => {
  const parsedDate = new Date(date);
  const day = parsedDate.getDate();
  const month = parsedDate.getMonth() + 1;
  const year = parsedDate.getFullYear();
  const formattedDate = `${day.toString().padStart(2, '0')} / ${month
    .toString()
    .padStart(2, '0')} / ${year}`;
  return formattedDate;
};

export default getFormatDate;

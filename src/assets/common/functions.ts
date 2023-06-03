export const capitalizeWords = (str: string) => {
  return str.replace(/\b\w/g, function (match: string) {
    return match.toUpperCase();
  });
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};

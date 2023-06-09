export const capitalizeWords = (str: string) => {
  return str.replace(/\b\w/g, function (match: string) {
    return match.toUpperCase();
  });
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
  };

  if (date.getFullYear() !== currentYear) {
    options.year = "numeric";
  }

  return date.toLocaleDateString("en-US", options);
};

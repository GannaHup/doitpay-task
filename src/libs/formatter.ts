const formatter = {
  cardNumber: (value: string) => {
    const digitsOnly = value.replace(/\D/g, "").slice(0, 16);
    return digitsOnly.replace(/(\d{4})(?=\d)/g, "$1-");
  },
  dateMMYYYY: (date: string) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "2-digit",
      year: "numeric",
    }).format(new Date(date));
  },
  maskCardNumber: (cardNumber: string) => {
    return cardNumber
      .slice(-4)
      .padStart(cardNumber.length, "*")
      .replace(/(.{4})/g, "$1 ")
      .trim();
  },
};

export default formatter;

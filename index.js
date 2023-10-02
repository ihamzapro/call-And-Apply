const PIA = {
  airline: "PIA",
  tCode: "HA",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.tCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.tCode} ${flightNum}`,
      name,
    });
  },
};
PIA.book(435, "Hamza Khan");
const Emirates = {
  airline: "Emirates",
  tCode: "KH",
  bookings: [],
};
const book = PIA.book;
book.call(Emirates, 42, "Umar Khan");
console.log(Emirates);

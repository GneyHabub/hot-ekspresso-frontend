import dayjs from "dayjs";
import { Booking } from "../utils/types";

export async function fetchBookings(authToken: string): Promise<Booking[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: "AAA",
          price: 300,
          flights: [{
            from: "KZN", 
            to: "GSV", 
            departure: dayjs().startOf("month").toDate(), 
            arrival: dayjs().startOf("month").add(1, "hour").toDate(),
            carrier: "RedWings"
          }]
        },
        {
          id: "BBB",
          price: 700,
          flights: [
            {
              from: "GSV", 
              to: "KZN", 
              departure: dayjs().startOf("month").add(10, "day").toDate(), 
              arrival: dayjs().startOf("month").add(10, "day").add(1, "hour").toDate(),
              carrier: "RedWings"
            },
            {
              from: "KZN", 
              to: "DME", 
              departure: dayjs().startOf("month").add(10, "day").add(3, "hour").toDate(), 
              arrival: dayjs().startOf("month").add(10, "day").add(4, "hour").toDate(),
              carrier: "Pobeda"
            }
          ]
        }
    ]);
    }, 300);
  });;
}
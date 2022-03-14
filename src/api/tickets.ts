import axios from "axios";
import getEnv from "../utils/getEnv";
import { Airport, Booking } from "../utils/types";

export async function fetchBookings(authToken: string): Promise<Booking[]> {
  const {data} = await axios.get(`${getEnv("BACKEND_URL")}/proxy/attractions/types`,
  {
    headers: { Authorization: `Bearer ${authToken}` },
  });
  return data;
}

export async function fetchAirports(authToken: string): Promise<Airport[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          city: "Moscow",
          name: "Domodedovo",
          iata: "DME"
        },
        {
          city: "Moscow",
          name: "Vnukovo",
          iata: "VKO"
        },
        {
          city: "Kazan",
          name: "Kazan",
          iata: "KZN"
        },
        {
          city: "Saratov",
          name: "Gagarin",
          iata: "GSV"
        }
    ]);
    }, 300);
  });;
}
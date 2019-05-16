import { sortJobs } from "./helper";
import { PRICE_ASC } from "../store/actions";

let jobs = [
  {
    id: 1,
    origin: "Jakarta",
    destination: "Surabaya",
    date: 1555110000,
    price: 4000000
  },
  {
    id: 2,
    origin: "Malang",
    destination: "Yogyakarta",
    date: 1555330000,
    price: 1500000
  },
  {
    id: 3,
    origin: "Bandung",
    destination: "Semarang",
    date: 1554700000,
    price: 3000000
  },
  {
    id: 4,
    origin: "Aceh",
    destination: "Palembang",
    date: 1554100000,
    price: 5000000
  },
  {
    id: 5,
    origin: "Padang",
    destination: "Medan",
    date: 1554450000,
    price: 5000000
  }
];


let jobsPriceAscending = [
  {
    id: 2,
    origin: "Malang",
    destination: "Yogyakarta",
    date: 1555330000,
    price: 1500000
  },
  {
    id: 3,
    origin: "Bandung",
    destination: "Semarang",
    date: 1554700000,
    price: 3000000
  },
  {
    id: 1,
    origin: "Jakarta",
    destination: "Surabaya",
    date: 1555110000,
    price: 4000000
  },
  {
    id: 4,
    origin: "Aceh",
    destination: "Palembang",
    date: 1554100000,
    price: 5000000
  },
  {
    id: 5,
    origin: "Padang",
    destination: "Medan",
    date: 1554450000,
    price: 5000000
  }
]

describe("Test suite for helper function", () => {
  test("Sort jobs with ascending price", () => {
    let sortedJobs = sortJobs(jobs, PRICE_ASC)
    expect(sortedJobs).toStrictEqual(jobsPriceAscending)
  });
});

import { PRICE_ASC, PRICE_DESC, DATE_ASC, DATE_DESC } from '../store/actions'


// https://stackoverflow.com/a/14428340
export function formatMoney(number) {
  return `Rp${number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&.")}`;
}

export function formatDate(date) {
  return new Date(date).toString();
}

export function sortJobs(jobs, sort) {
  switch (sort) {
    case PRICE_ASC:
      return [...jobs].sort((a, b) => a.price - b.price)
    case PRICE_DESC:
      return [...jobs].sort((a, b) => b.price - a.price)
    case DATE_ASC:
      return [...jobs].sort((a, b) => a.date - b.date)
    case DATE_DESC:
      return [...jobs].sort((a, b) => b.date - a.date)
    default:
      return jobs
  }
}
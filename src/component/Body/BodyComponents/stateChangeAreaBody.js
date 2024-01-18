import axios from "axios";

export const url =
  "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";

export const uriEURODAte =
  "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=EUR&date=20240118&json";

export default async function clickUrl() {
  let result = await axios.get(url);
  return result;
}

async function consoleAPI() {
  let res = await clickUrl();
  console.log("Result api : ", res.data);
}

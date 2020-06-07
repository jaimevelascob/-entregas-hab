import config from "./config";
const axios = require("axios").default;
// Guardar api key
const apiKey = config.apiKey;

// Guardamos la ulr de la api

// App url
const BASE_URL = "https://ws.audioscrobbler.com/";

// Artist url
const URL_GEO =
  "2.0/?method=geo.gettopartists&country=spain&api_key=" +
  apiKey +
  "&format=json";

// Tracks url
const URL_TRACKS =
  "/2.0/?method=geo.gettoptracks&country=spain&api_key=" +
  apiKey +
  "&format=json";

// Tags url
const URL_TAGS =
  "/2.0/?method=chart.gettoptags&api_key=" + apiKey + "&format=json";

// GET ARTISTS
async function getArtists() {
  try {
    const response = await axios.get(`${BASE_URL}${URL_GEO}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

//GET TOP TAGS
async function getTopTags() {
  try {
    const response = await axios.get(`${BASE_URL}${URL_TAGS}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

//GET TOP TRACKS
async function getTopTracks() {
  try {
    const response = await axios.get(`${BASE_URL}${URL_TRACKS}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default {
  getArtists,
  getTopTags,
  getTopTracks,
};

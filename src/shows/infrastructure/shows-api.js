import axios from "axios";

/**
 * shows-api.js
 * This module provides functions to interact with the TV shows API.
 * It uses axios to make HTTP requests to fetch shows and their headlines.
 */
const showApiUrl = import.meta.env.VITE_SHOWS_API_URL;
const showsEndpoint = import.meta.env.VITE_SHOWS_ENDPOINT_PATH;
const showsHeadlinesEndpoint = import.meta.env.VITE_SHOWS_HEADLINES_ENDPOINT_PATH;

/**
 * Axios instance configured with the base URL for the shows API.
 * @type {axios.AxiosInstance}
 */
const http = axios.create({
    baseURL: showsEndpoint
})

/**
 * ShowsApi class to getSources and getShowsForSourceID.
 */
export class ShowsApi {
    getSources() {
        return http.get(`${showsEndpoint}`);
    }

    getShowsBySource(query = "golden girls") {
        const response =  axios.get(`${showApiUrl}?q=${query}`);
        return response.data; // TVMaze devuelve un array de { score, show }
    }
}
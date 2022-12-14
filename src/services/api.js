import axios from 'axios';

import apiConstants from '../constants/api';

export default class Api {
    static request(options = {}) {
        if (!options.without_token) {
            if (!options.headers) {
                options.headers = {};
            }

            options.headers.Authorization = `Bearer ${Api.getToken()}`;
        }

        return axios.create({
            baseURL: apiConstants.url,
            ...options
        });
    }

    static getToken() {
        return localStorage.getItem('token');
    }
}

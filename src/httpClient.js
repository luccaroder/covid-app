import axios from 'axios';
const instance = axios.create({
    headers: {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
	    "x-rapidapi-key": "368b5774cdmsh49652e7812ec09ep1beb2cjsn91efcbe4e5e3"
    },
    baseURL: 'https://covid-193.p.rapidapi.com'
});
export default instance;
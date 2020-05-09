import axios from 'axios';
const instance = axios.create({
    headers: {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
	    "x-rapidapi-key": "368b5774cdmsh49652e7812ec09ep1beb2cjsn91efcbe4e5e3"
    },
    baseURL: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus'
});
export default instance;
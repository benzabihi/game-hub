import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd796af475ee84d458320e5d9a33b696d'
    }
})
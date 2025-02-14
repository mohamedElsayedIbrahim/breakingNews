import axios from "axios";

const AxiosInstans = axios.create({
    'baseURL':"https://newsapi.org/v2/",
    headers:{
        "Authorization":"Bearer 39d169aa700b43c9b77e901d8af2b46f"
    }
});


export default AxiosInstans;
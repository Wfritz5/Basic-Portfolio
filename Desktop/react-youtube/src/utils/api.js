import axios from "axios";
const apiKey = "AIzaSyAYvnHlTGjzTzBycHWB8eoVdcWzzNTEyK4";


//group all API calls
export default {
    searchYouTube: function (term) {
        return axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
                part: "snippet",
                q: term,
                type: "video",
                key: apiKey,
                maxResults: 3
            }
        })
    }
}
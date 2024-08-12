const clientID = "29dc24ac48504306a222532a0f52a87e";
const clientSecret = "87c281ce149a42b0bfb1cfd2d3967008";
// console.log(clientID)

const spotifyDivs=document.getElementById("track-title");
const APIController = (function() {
    
    // Function to get access token
    const getToken = async () => {
        try {
            const result = await fetch("https://accounts.spotify.com/api/token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": "Basic " + btoa(clientID + ":" + clientSecret)
                },
                body: "grant_type=client_credentials"
            });
            const data = await result.json();
            return data.access_token;
        } catch (error) {
            console.error('Error getting token:', error);
        }
    }

    // Function to get track information
    const getTrack = async (token, trackEndPoint) => {
        try {
            const result = await fetch(trackEndPoint, {
                method: "GET",
                headers: {"Authorization": "Bearer " + token}
            });
            const data = await result.json();
            return data;
        } catch (error) {
            console.error('Error getting track:', error);
        }
    }

    // Public method to initialize and fetch data
    const init = async () => {
        const token = await getToken();
        if (token) {
            const trackEndPoint = "https://api.spotify.com/v1/tracks/0CTGevl6CkWHYXg3Cw3JLe";
            const trackData = await getTrack(token, trackEndPoint);
            console.log(trackData);

            const card=document.createElement("div");
            card.className="card";

            const trackTitle=document.createElement("p");
            trackTitle.textContent=trackData.name;

            spotifyDivs.appendChild(card);
            card.appendChild(trackTitle);
        }
    }

    // Expose the init method
    return {
        init
    };

})();


document.addEventListener('DOMContentLoaded', () => {
    APIController.init();
});
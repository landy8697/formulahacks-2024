const { initBaseAuth } = require('@propelauth/node');



function propel_init(){
    const {
        validateAccessTokenAndGetUser,
        fetchUserMetadataByUserId,
        // ...
    } = initBaseAuth({
        authUrl: AUTH_URL_HERE,
        apiKey: API_KEY_HERE, 
    });
}
async function make_request(authorizationHeader2){
    const authorizationHeader = authorizationHeader2; // Get the Authorization header from an HTTP request
    try {
        const user = await validateAccessTokenAndGetUser(authorizationHeader);
        console.log(`Got request from user ${user.userId}`);
    } 
    catch (err) {
        // You can return a 401, or continue the request knowing it wasn't sent from a logged-in user
        console.log(`Unauthorized request ${err}`);
    }
}
// function create_user(){ auth.createUser (what is auth)
//      return initBaseAuth.createUser({
//         email: "test@example.com",
//         emailConfirmed: false,
//         sendEmailToConfirmEmailAddress: false,
        
//         password: "hxjV6A0zcp",
//         askUserToUpdatePasswordOnLogin: false,
        
//         username: "airbud3",
//         firstName: "Buddy",
//         lastName: "Framm",
//         properties: {
//             favoriteSport: "basketball",
//         }
//     })
// }

module.exports = {
    propel_init,
    make_request
}
# this api is built with Node JS and Express

![API] This application provides a URL shortener service,
the user enters a URL and gets a short URL in return.

## Imporrtant
run npm install 
to install the dependencies

use postman for testing the api
and gestting the results

results are displayed as JSON objects.
///

 POST /api/urls/ => create a short url and return it to the user
 /// for example the  post request body in post man is in this form {"orglUrl":"http://qertyuiopasdfghhjklzxcvbnmm"} 
 /// ie the orginal url sent by the user to be shortened
 
 GET /api/urls/ => get all the URLs shortened
 PUT  or PATCH /api/urls/[id]/ => update the original URL given its ID
 DELETE /api/urls/[id]/ => delete the shortened URL given its ID

# marsrover-frontend
The frontend UI to initiate consuming the NASA Mars Rover API

## Cloning and Building

If you have not, please refer to <https://github.com/paulasyn/marsrover> in order to expose the backend.

This guide assumes that you have the Spring Boot backend up and running.

Clone the repo using `git clone https://github.com/paulasyn/marsrover-frontend.git`

Navigate to the directory within marsrover-frontend

In the terminal, pull the dependencies by running `<npm install>`

Now that you have pulled all the dependencies, you can run `<npm start>` and the project will run by default on `localhost:3000` .

In the UI there will be a button to kickoff the API request to download the photos to your local.

Click the button and see the output in your IDE console.

After running the project, photos pulled using the NASA API can be found in `marsrover/nasa-pic/photos`
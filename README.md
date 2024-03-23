## Github
This repo is a copy our actual repo after we realized there were some security issues with API keys.

## Inspiration
We were inspired by Formula One Racing. As kids, all four of us have always been interested in racing, and wanted to create something that combines racing with a social aspect to it. Therefore, we came up with First: Mobile Racing.

## What it does
First: Mobile Racing tracks your runs, your bikes, and your drives with GPS and location tracking software, providing informative data about your travel, regardless of how you take it. Furthermore, common routes have a leaderboard, a friendly competition between users to score the lowest time on a run.

## How we built it
We used MongoDB to store information about our users, including their run history, username, email, and more information due to the ease of access and its security. We connected to our MongoDB through a node.js server running on a VPS through a dockerized container. Finally, our front end, created through react native, communicates to our backend through this API, integrating our minimalist UI with a robust database. We also used PropelAuth for secure authentication into our client, storing user's data securely.

## Challenges we ran into
3 of us are novice hackers, while our 4th member has been to one hackathon, so this experience was quite new for all of us. Furthermore, we wanted to do a mobile app but didn't have too much prior experience with React native, and our unfamiliarity with this app led to a lot of issues that we eventually sorted out.

## Accomplishments that we're proud of
We are proud to have successfully deployed a working prototype of our project. We integrated many different systems, including Mongo, Google Maps API, Propel Auth, and more in order to make our final product, something that we are proud of.


## What we learned
Alongside learning about so many different tools, we learned how even what seems like enough time is never enough as this past 24 hours have flew by.

## What's next for First: Mobile Racing
We wish to make our app display more statistics data after runs, and for a more seamless user experience with animations and transitions. 


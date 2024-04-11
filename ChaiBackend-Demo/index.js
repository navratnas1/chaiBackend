require('dotenv').config()
const express = require("express");

const app = express();
//app is a variable with multiple functionality using app.__ just like Math.__

const port = 3000;
const githubData = {
  "login": "navratnas1",
  "id": 18040188,
  "node_id": "MDQ6VXNlcjE4MDQwMTg4",
  "avatar_url": "https://avatars.githubusercontent.com/u/18040188?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/navratnas1",
  "html_url": "https://github.com/navratnas1",
  "followers_url": "https://api.github.com/users/navratnas1/followers",
  "following_url": "https://api.github.com/users/navratnas1/following{/other_user}",
  "gists_url": "https://api.github.com/users/navratnas1/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/navratnas1/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/navratnas1/subscriptions",
  "organizations_url": "https://api.github.com/users/navratnas1/orgs",
  "repos_url": "https://api.github.com/users/navratnas1/repos",
  "events_url": "https://api.github.com/users/navratnas1/events{/privacy}",
  "received_events_url": "https://api.github.com/users/navratnas1/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Navratna sharma",
  "company": "Baazi Games",
  "blog": "",
  "location": "New Delhi",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2016-03-23T22:45:46Z",
  "updated_at": "2024-04-03T18:30:33Z"
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/github',(req,res)=>{
  res.json(githubData)
})

app.get('/twitter',(req,res)=>{
    res.send("nuvrtn")
})

app.get('/login', (req,res)=>{
    res.send('<h1>please login at chai aur code')
})

app.get('/youtube',(req,res)=>{
  res.send('Navratna.com')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});

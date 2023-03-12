# Portfolio made with [React](https://reactjs.org/docs/create-a-new-react-app.html) and [Chakra UI](https://chakra-ui.com/)

## Info

[App dashboard](https://dashboard.heroku.com/apps/beomus-portfolio) and
[Website](https://beomus-portfolio.herokuapp.com/) **DEPRECATED**

Unfortunately, Heroku has suspended their free-tier, which I was using to host
this website.

## Screenshots

Here's what it looks like because nobody will clone and build and run this.

### Gallery

![whitemode](./assets/whitemode.png)

![darkmode](./assets/darkmode.png)

### Contact

![contactwhite](./assets/contactwhite.png)

![contactwhite](./assets/contactdark.png)

Docker command for running inside an iamge on my raspberry pi

```bash
docker container run \
    --rm \
    --detach \
    --publish 3000:3000 \
    --name portfolio-dev \
    portfolio:dev
```

For some reasons, this is automatically published under my other domain
[`thatshau.com/portfolio`](https://www.thatshau.com/portfolio) which is another instance of `gh-pages`, either way,
I'm not complaining about free hosting.

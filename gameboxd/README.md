# Gameboxd

An app that has users, games and reviews. You create an account, you can add a game that you've played and also
leave a review. There's also a feed of reviews and games added.

## Giantbomb - Game fetching API

We need to fetch the data regarding games from an external resource. We will use [Giantbomb API](https://www.giantbomb.com/api/documentation)

This [page](https://www.giantbomb.com/api/) shows the API's restrictions and limits. It also shows the API key if
you are logged in.

We primarily need this in order to:

1. Provide a `search game` functionality.
2. Show data regarding each game.
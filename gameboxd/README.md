# Gameboxd

An app that has users, games and reviews. You create an account, you can add a game that you've played and also leave a review. There's also a feed of reviews and games added.

## Giantbomb - Game fetching API

We need to fetch the data regarding games from an external resource. We will use [Giantbomb API](https://www.giantbomb.com/api/documentation)

This [page](https://www.giantbomb.com/api/) shows the API's restrictions and limits. It also shows the API key if you are logged in.

We primarily need this in order to:

1. Provide a `search game` functionality.
2. Show data regarding each game before a user submits.

### Terminology

1. **User** - A person that lands on our website
2. **User Event** - Any action within the app might produce an Event. Some examples are:

   - A user adds a game in their _games played_ list
   - A user leaves a review in a game

3. **Feed**- A list of User Events
4. Digital **Game** - Self explain
5. Game **Review**
6. Review **Comments**

### Notes

1. Public browsing: Users of the app can browser the feed without needing to log in

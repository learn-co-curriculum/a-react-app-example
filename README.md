# A React App Example

## Overview

Before we dive in and start working on specific parts and the concepts involved
in React project, let's take a look at a simple React app so we can understand
it at a high level.

In this lesson, we will start up a basic React app, look at the file and
folder structure and gain a better understanding of how these apps are built.

## Objectives

- See an example of a basic React app
- Gain an overhead view of how the files interact
- Practice writing in your first React component

#### A Note For In-Browser IDE Users

In order to work on React apps, we create a temporary server in the terminal
that displays the app in your browser. This server will not work if you are
using the in-browser Learn IDE. If you are currently using the in-browser IDE,
you will need to begin using your computer's local environment. If you are using a Mac, you can follow [these instructions][setup] for setting everything up locally.

## Starting Up a React App

This lesson has all the necessary parts of a fully working React app. To check
the app out, fork and clone this lesson onto your computer, navigate into the
lesson in the terminal and run:

```sh
npm install
```

This will get and install all the required dependencies for React.

Next, we need to start up a server for the app to run on:

```sh
npm start
```

This will host the app and open a browser window to display it. If the browser
doesn't open, but the server started correctly, you can use the links that
appear in the terminal to access the app.  They should look something like the
following:

```sh
Local:            http://localhost:3000/
On Your Network:  http://192.168.1.5:3000/
```

You can use the `Local` link to open the app in your own browser. The second is
for any _other_ computers on your network that you want to display your app on.

If everything has worked correctly, you should see a page with the exact time it
was loaded, along with a small amount of text and a GIF.

With our server running, if we make any changes to the content, the server will
'hot reload,' and update the app in the browser. If there are app breaking
errors in your code, the browser will display those errors instead.

## Reading `App.js`

In the folders of this lesson, open `src/App.js` in a text editor. This file
contains a section of code that looks _very much_ like HTML:

```html
<div className="App">
  <header className="App-header">
    {moment().format('MMMM Do YYYY, h:mm:ss a')}
  </header>
  <p className="App-intro">
    In React apps, we write JSX - it looks like HTML, and uses a lot HTML syntax.
JSX lets us include JavaScript functions right along with the HTML, and also
allows us to add in components, which are separate, self-contained chunks of of JSX.
  </p>
  <ExampleComponent />
</div>
```

It also has some _JavaScript_ code in it, `moment().format('MMMM Do YYYY,
h:mm:ss a')`. Well, it turns out, this is actually _all_ JavaScript. This is
called JSX. It lets us write code that looks nearly identical to HTML, but
allows us to mix in functions and other neat things.

Reading through the JSX code, we've got one `div` that contains three child
elements, `header`, `p` and `ExampleComponent` (hmm...). In your browser, _these_
are the elements being displayed! The `header` is a timestamp of the exact time
the app was loaded. The `p` section includes the brief text on JSX.

The `ExampleComponent` contains the sunglasses GIF.  In the `src` folder, take a
look at `ExampleComponent.js`. You'll see a file very similar to `App.js`, but
it contains `img` and `p` elements. By including `<ExampleComponent />` in the
JSX of `App.js`, we are able to add in JSX content from the _other_ file. If you
copy and paste `<ExampleComponent />` so it is listed two times in a row, _two_
GIFs will appear on the page.

What about the rest of `App.js`, though? Moving out from the middle, we see this
JSX code is the _return_ value of a function, `render()`. This function is
contained within a `class`:

```js
class App extends Component {
  render() {

    return (
      ...
    );
  }
}
```


We will go into greater depth on things like `extends Component`, but for
now, the key thing to understand is that all the _visible content_ of our app is
contained within this App class.

We've already seen that it is possible to have multiple files that contain
visible content, App and ExampleComponent. ExampleComponent, however, is used
within App. App is at the top most level, the _parent component_ of all visible
content.

## Importing, Exporting and the Chain

There are two other things in the `App.js` file we haven't touched on:

```js
import React, { Component } from 'react';
import moment from 'moment';
import ExampleComponent from './ExampleComponent'
import TestComponent from './TestComponent'
...

export default App;
```

`react` and `moment` are both npm packages, so what is happening here? `App.js`
is _pulling in_ specific content from these two packages! You can see in the App
class that `Component` and `moment` are both being used. They are being
_imported_ in from the `node_modules` folder.

The imports for `ExampleComponent` and `TestComponent` are slightly different. In this case, `App.js`
is pulling in other files in the same directory, like `./ExampleComponent`, which
allows it to use `<ExampleComponent />` as we saw earlier.

Then, what is happening with `export`? By including the `export` line, we are
allowing _other_ files to _import_ this `App.js` file. If you take a look at one
of the other JS files, `index.js`, you can see that at the top of the file, it
is _importing_ `App.js` (the `.js` is not included, but still implied):

```js
import App from './App';
```

This structure of importing and exporting allows for files to 'chain' together.
`ExampleComponent.js` has an `export` statement as well, and is imported
into `App.js`. `App.js` is imported into `index.js`.

The `index.js` file doesn't have an export. It is the 'top' of this chain.
Inside `index.js` is some regular JavaScript, `document.getElementById('root')`.
Even though React is a modern, complex framework, it still relies on a regular
`index.html` file! The file can be found in the `public` folder.

## Deliverables

There are three tests to pass in this lesson. They are all related to the
content within `App.js`.

1. Replace the contents of the `header` element so that instead of a time, it just says 'Now'
2. Make sure to include `<ExampleComponent />` (if you have removed it)
3. Add in a _new_ component, `<TestComponent />`, just below ExampleComponent

You can open two terminals tabs to both run `npm start` _and_ test the lab using
`learn`.

## Conclusion

There is a lot still we haven't touched on, and we will go into greater depth on
how things work throughout the following lessons. Almost all of our work,
however, will be done within `App.js` and child components of it. This is where
all of our creative energy will be spent.

This file structure is used by Facebook, the creators of React, in its tool,
`create-react-app`.  Using this structure, a lot of set up is abstracted away.
We do not need to deal with writing the HTML document or connecting it with
JavaScript, as it is always the same `index.html` and `index.js` file content.

## Resources

- [Mac OSX Environment Set Up](http://help.learn.co/workflow-tips/local-environment/mac-osx-manual-environment-set-up)

[setup]: http://help.learn.co/workflow-tips/local-environment/mac-osx-manual-environment-set-up

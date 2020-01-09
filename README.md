This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<h1 align="center">
  Slider Nav
</h1>

Objective of application is to create a simple, minimalist navigation bar that indicates a selected item, and that sliding indication bar resizes itself to match the width of the selected item text. Additionally, on click of a navigation item, a new message will appear that displays the time of the selected city. Time is calculated based on users local time.

## 🛠 Build Approach

---

The goal was to keep library usage to a minimum, so the technologies used for this small feature/app were [React](https://github.com/facebook/react/) and [Sass](https://github.com/sass).

**NOTE:** This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

1. Configure project (React Components, Sass)

2. Build navigation list based on local `navigation.json` file

3. Work through navigation component State based on user interaction

4. Discovery time on how to determine sliding indication bar position

5. Include React ConText system for selected city time

6. Work on second iteration. Goal is to refactor code in existing Components, and modularize Components further. For example, new component list may have the following files: `App.js`, `Navigation.js`, `NavItem.js`, `SelectedCityTime.js`.

## 🗺 **Project Challenges**

---

During project build (v1), the sliding indication bar was one of the main challenges. aside from running into some obstacles with [React Refs](https://reactjs.org/docs/refs-and-the-dom.html). Initially, I attempted to render the navigation list items within a method in the Navigation Class Component. Fell into the rabbit hole about [Forwarding Refs](https://reactjs.org/docs/forwarding-refs.html), but for the sake of time - I chose to refactor my code and save it for my second iteration.

Issue: My `navItemRef` object values were not coming out as expected, with values being `undefined` or `null`.

```
  renderNavigationData() {
    const { cities } = navigationData;
    return cities.map(city => {
      return (
        <NavListItem
          key={city.section}
          city={city}
          activeCity={this.state.activeCity}
          onNavItemClick={this.onNavItemClick}
          ref={newRefExample}
        />
      );
    });
  }
```

My `ref` issue above prevented me from using the `Element.getBoundingClientRect()` since I could not get the proper coordinates for each navigation item.

_Side note_ - I was lucky enough to discover the `Element.getBoundingClientRect()` method a few weeks ago when I wanted to figure out the size of such element and its position relative to its parent. With `DOMRect` object, I was able to determine the `left` and `right` properties of each navigation item.

https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

Lastly, the selected city functionality could be done more optimally and will be refactored during the next iteration.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

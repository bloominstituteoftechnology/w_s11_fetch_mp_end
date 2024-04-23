# Fetch Module Project

## ✨ Requirements

1. Node >= 18.x
2. Git Bash (Windows users)

## ✨ Usage

1. Fork and clone repo
2. Run `npm install`
3. Run `npm run dev`
4. Load app in `http://localhost:3003`

## ✨ Prototype

[Link to a working prototype.](https://bloominstituteoftechnology.github.io/W_S11_Fetch_Project)

## ✨ Instructions

Welcome to your Module Project! In this module you learned to obtain JSON from a web service, using the browser's native fetch. Make sure to code alongside your Guided Project before attempting this challenge!

In this project you will work on a Dog Shelter application. This app has two screens: a list of dogs, and a form to create/edit dogs. You will use React Router to toggle between screens, and the native fetch to GET, POST, PUT and DELETE dogs. You will also use a GET request to dynamically populate the options in a dropdown!

### 🥷 Tasks

**❗ Preliminary notes about your tasks:**

- Watch the first minutes of the **Solution Video** if you need help getting situated.
- There is no need to install any extra NPM dependencies. **Do NOT use Axios nor RTK Query!**
- You will make changes to three files - roughly in this order:
  1. [App.js](./frontend/components/App.js)
  2. [DogsList.js](./frontend/components/DogsList.js)
  3. [DogForm.js](./frontend/components/DogForm.js)

#### 👉 TASK 1 - Study the prototype

The general functionality of the app will match the one in [this prototype](https://bloominstituteoftechnology.github.io/W_S11_Fetch_Project).

You can see the network requests playing out in the Network Tab of Chrome Devtools.

#### 👉 TASK 2 - Study the API with Postman

When your app is running it exposes an API on `http://localhost:3003/api/dogs` with the endpoints below. You should test them out in Postman to understand how they work. The data on the server will reset automatically every time you make changes to your code.

1. GET `/dogs` **returns all dogs from the server**

2. POST `/dogs` **posts a new dog to the server**
    - Request body: expects a JSON object with "name" (string), "breed" (string) and "adopted" (boolean)

3. DELETE `/dogs/:id` **removes a dog from the server**
    - ID parameter: expects an actual dog ID at the end of the URL

4. PUT `/dogs/:id` **updates the dog by the given ID**
    - ID parameter: expects an actual dog ID at the end of the URL
    - Request body: expects a JSON object with at least one update ("name", "breed", "adopted")

5. GET `/dogs/breeds` **returns the breeds to use in the dropdown of the form**

#### 👉 TASK 3 - Structure your application

Decide what state you need, where to put it, and where perform your fetching

You have many options in regards to structuring your state and your network calls. Have fun architecting!

The only requirements are to **use fetch** for all networking, and to **match the functionality of the mock** site

As a suggestion, when successfully POSTing a new dog, PUTing an existing dog or DELETing a dog, **trigger a new GET** to obtain the latest dogs.

#### 👉 TASK 4 - Watch the Solution Video

This step is only required if you need help getting started or get stuck at any point. HAVE FUN!

## FAQ

<details>
  <summary>I feel very stuck. What can I do?</summary>

Redo the Guided Project for the module, or check out the Solution Video for this project. In these recordings, an industry expert walks you through their thinking in detail, while they solve the tasks.

</details>

<details>
  <summary>I am getting errors when I run npm install. What is going on?</summary>

This project requires Node >= V18 correctly installed in order to work. Sometimes Node can be misconfigured. Try deleting `node_modules` and running `npm install`. If this fails, try deleting both `node_modules` and `package-lock.json` before reinstalling. If all fails, please request support!

</details>

<details>
  <summary>Do I need to install extra libraries with NPM?</summary>

No. Everything you need should be installed already.

</details>

<details>
  <summary>Can I edit the HTML or the CSS?</summary>

You can edit the CSS of the project to give it a personal touch so you can add it to your portfolio, but only after you've finished your tasks!

</details>

<details>
  <summary>My page does not work! How do I debug it?</summary>

Remember to use console.logs and breakpoints to troubleshoot your code. Do not panic if you see errors in the console, just read them carefully looking for clues.

</details>

<details>
  <summary>How do I run tests against my code?</summary>

There are no automatic tests in this project. Feel free to write some, though! All necessary libraries are installed.

</details>

<details>
  <summary>I messed up and want to start over! How do I do that?</summary>

Do NOT delete your repository from GitHub! Instead, commit frequently as you work. This in practice creates restore points. If you find yourself in a mess, use git reset --hard to simply discard all changes to your code since your last commit. If you are dead-set on restarting the challenge from scratch, you can do this with Git as well. Research how to reset --hard to a specific commit.

</details>

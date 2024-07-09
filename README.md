# React_Proj

[React Docs(https://react.dev/)

- [React Crash Course 2024 - Traversy Media](https://www.youtube.com/watch?v=LDB4uaJ87e0&list=WL&index=13)
- [React 18 Tutorial and Projects Course - 2024 Edition - John smilga](https://www.udemy.com/course/react-tutorial-and-projects-course/?couponCode=LETSLEARNNOWPP)
- [MERN 2024 Edition - MongoDB, Express, React and NodeJS - John smilga](https://www.udemy.com/course/mern-stack-course-mongodb-express-react-and-nodejs/?couponCode=OF52424)
- [Mastering Next.js - Build Airbnb Clone from Scratch (2024) - John smilga](https://www.udemy.com/course/mastering-nextjsbuild-an-airbnb-clone-from-scratch-2024/?couponCode=OF52424)


- npx create-react-app .
- JS Library because more flexible as compared to angular framework.
- svelte and vue.js are more easier and straight forward compared to react.


## Virtual DOM(lightweight copy of actual DOM)
- Whenever a state of the component is changed react compares the virtual and actual DOM and if there is a change it re-renders that part.
- Later in v19 compiler will replace the virtual DOM to make things faster.
    

## Components

- Reusable piece of code
- can be thought of as custom html elements
- can be either classes(older) and functional
- can get props passed in and can hold their own state


## State

- represents the data that a component manages internally.
- input data, fetched data, UI related data like if a modal is open/close.
- useState hook can be used to define state in the functional component.
- there is also global state, as a whole not related to single component. (Context API, state management(redux))

- External state management library like redux avoids the problem of prop driling, which can also be avoided by using context api for react but not take care of mulitple context or global states. useReducer hook solves this problem.


## Hooks

- allows us to use state and other react features within functional components without writing a class(they used to have lifecycle methods).
- useState, useEffect, useRef, useReducer
- useContext, useMemo, useCallback will be phased out in v19

## JSX(JavaScript Syntax Extension)

- output of component.
- An HTML like syntax within JS(Components)

## Types of application

- SPA - Load a single HTML file and JS loads the entire UI including routes.
- SSR -  Server sends the fully rendered page to client. You can fetch data and load it as well (Nextjs)
- SSG - framework generates static HTML files at build time. These are very fast(Gatsby, Astro)

- instead of using create-react-app, we use vite(npm create vite@latest)
`npm create vite@latest .`
git branch --move master main
- react developer tools in browser

- difference in create react app and create vite@latest?
## Starting

- npm create vite@latest .
- vite.config - server:{[
    port:5000
]}

- npm install
- npm run dev


#### SPA (File Explanation)

- index.html is the single page and everything else load using js.
- there is a div inside the index.html file with id of root and in main jsx file we bring it in.
- index.html - main.jsx - App.jsx 
- delete app.css
- In main.jsx it is including the index.css file

- use ES7 + react snipet extension in vscode
- delete content of App.jsx - create a functional component(rafce) react arrow function component export, (rafc, rfc)


## Tailwind CSS Setup
[Install Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite)
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p

- In tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily:{
            sans: ['Roboto', 'sans-serif']
        },
        gridTemplateColumns: {
            '70/30':'70% 28%'
        }
    },
  },
  plugins: [],
}
```

- In index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## JSX

- every react component is going to return JSX.
- it can only return a single element(one parent element).

```jsx
return(
    <>//Fragment (empty html tag)
        <div className="text-5xl">App</div>
    <>
)
```

- if you want to add dynamic variable
- if we want condition inside the jsx we can use ternary

```jsx
const App = ()=>{
    const names = ['John', 'Jane']
    const loggedIn = true;
    return(
        <>//Fragment (empty html tag)
            <div className="text-5xl">App</div>
            <ul>
                {names.map((name, index)=>( //using map we return jsx
                   // <li>{name}</li> // Whenever we create a list, this element must have unique key prop.
                     <li key={ index}>{name}</li>
                ))}

                {
                    if() // we cannot have if statement in here as it has to be a one line expression.
                    loggedIn ? <h1> Hello Member </h1> : <h1> Hello Guest</h1>
                    loggedIn ? <h1> Hello Member </h1> : '' // If you dont want to show anything
                    loggedIn && <h1> Hello Member </h1> // If you dont want to handle the other case , works with js as well
                }

            </ul>
        <>
    )
}
export default App
```

- we can have different returns with conditions
- inline styling

```jsx

const App = ()=>{
    const loggedIn = true;
    const styles  = {
        color:'red',
        fontSize:'55px' // not font-size like in css
    }

    if(loggedIn){
        return <h1 style={{ color:'red', fontSize:'24'}}> Hello Member</h1>
    }

    return(
        <h1 style={styles}> Hello Guest</h1>
    )
}
export default App
```

## Project

### create components

- create file src/components/Navbar.jsx
- import Navbar from "./components/Navbar"
- <Navbar />
- Visulaize structure in a page as components.
  - Navbar
  - Hero
  - HomeCards // Wrapper component for Card
  - Card
  - JobListings // Wrapper component for Listing
  - JobListing
 
```jsx
//app.jsx
<>
    <Navbar />
    <Hero />
    <HomeCards />
    <JobListings />
    <ViewAllJobs /> // href="/jobs"
<>

```

### passing props in a component

```jsx
//app.jsx
<>
    <Navbar />
    <Hero title="Test Title" subtitle="This is the subtitlt" />
<>

//Hero.jsx
const Hero = (props)=>{ // destructure it ({title = 'Become a dev', subtitle="Find react job"}) adding default
    return(
        { props.title }
        { props.subtitle }
    )
}

```

### wrapper component

```jsx
//app.jsx
import HomeCards from './components/HomeCards'
<HomeCards />

// HomeCards.jsx
import Card from './components/Card'

<Card> // basically its the div with class wrapper
    ...contains html
</Card>

<Card bg='bg-indigo-100'> // basically its the div with class wrapper
    ...contains html
</Card>


//Cards.jsx

const Card = ({children, bg = 'bg-gray-100'})=>{
    return <div className = {`wrapper ${bg}`}>{children}</div>
}

```
### Displaying job lisings
//Actual api
{
    jobs:[{},{}]
}

// jobs json
[{},{}]

- Create a wrapper JobListings component and in this import the jobs json
- console ninja extension vscode
  
```js
return (
    <section>
        ...html
        {jobs.map((job)=>(
            <JobListing key={job.id} job = {job}/>  
        ))}
    </section>
)

const JobListing=({job})=>{
    return(
        ...html // single parent
        {job.type}
        <a href={`/job/${job.id}`}>  
    )
}



```
### State and Events

- 2 types of state - component level, app level(pass down to components)

#### Component Level

```js
import {useState} from 'react'

const JobListing = ({job})=>{
    const [showFullDescription, setShowFullDescription] = useState(false) //default value
    let description = job.description
    if(!showFullDescription){
        description = description.substring(0, 90) + '...'
    }
    return(
         ...html // single parent
        {job.type}
        <a href={`/job/${job.id}`}>
        {description}
        // <button onClick={setShowFullDescription(!showFullDescription)}>{showFullDescription ? 'Less' : 'More'}</button> // Cant do this as it will run the function
        // <button onClick={()=> setShowFullDescription(!showFullDescription)}>{showFullDescription ? 'Less' : 'More'}</button> // There is a better way than this
        <button onClick={()=> setShowFullDescription((prevState)=>!prevState)}>{showFullDescription ? 'Less' : 'More'}</button> // similar behaviour can be used in several places like hamburger menu wherever toggling of UI is required.
    )
}

```

### Prop Drilling - Sending data to parent from child component


```jsx

function Parent(){
    const [userData, setUserData]= useState('')
    const handleData = (data)=>{
        setUserData(data)
    }
    return (
        <>
            <h1>Data from Child Component: {userData}</h1>
            <Child setData={handleData}/>
        <>
    )
}

function Child({setData}){
    const handleChange = (e)=>{
        setData(e.target.value)
    }
    return (
        <>
            <input onChange={handleChange} />
        <>
    )
}



```

### React icons

- [React icons docs](https://react-icons.github.io/react-icons/icons/fa/)
- npm i react-icons
- import {FaMapMarker} from 'react-icons/fa'
- <FaMapMarker />

### Tailwind css
- [Tailwind css docs](https://tailwindcss.com/docs/utility-first)


### React router (separate package)

- Remix framework is build on top of react router.
- used to add separate pages and links between them.
- npm i react-router-dom


```jsx
// App.jsx
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"
const router = createBrowserRouter(
    createRoutesFromElements(<Route index element={<h1>My App</h1>} />)
    // createRoutesFromElements(<Route path="/about" element={<h1>My App</h1>} />)
)

const App = () =>{
    return <RouterProvider router={router} />
}

```

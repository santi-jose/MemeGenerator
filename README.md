# Meme Generator

## About

This is a Meme Generator web application using Vite. 
The App component contains two subcomponents, Header and Meme. 
The Header component is used to render the header on the webpage. 
The Meme component consists of two text inputs, a button input, 
and an image. 

The two text input values and image src property are managed by a React state composed of an object. Each input has its own property defined in the meme object: "topText" for the top text input, "bottomText" for the bottom text input, and "randomImage" for the image. 

The button labeled "Get a new meme image" triggers the getMemeImage() function that sets our meme's randomImage state to a new meme image from our allMemes array. The allMemes array is retrieved from the imgflip API via the useEffect hook. Also used the useQuery hook to request data from API 

The two text inputs have the onChange event listener that trigger whenever the text input changes. When the text input changes, the handleChange() function is triggered and updates our "topText" and "bottomText" values accordingly.

## Technologies

1. **IDE**: VSCode
2. **Markup Languages**: Markdown
4. **Programming Languages**: JSX
5. **Style Sheet Languages**: CSS 
6. **UI Framework**: React
7. **Local Development Server**: Vite
8. **Version Control System**: Github
9. **Terminal**: powershell

## Getting Started
The dynamic elements of the app include:
1.  The image displayed on the web page is randomized with the click of the button. 
2. The text inputs labeled "Top Text" and "Bottom Text" are used to display text on the meme image and create your own meme. 

## Installation
1. Make a directory to clone this repository into\
`C:\PATH> mkdir MemeGenerator`
2. Move into directory\
`C:\PATH> cd MemeGenerator`
3. Clone repository\
`C:\PATH\MemeGenerator> git clone https://github.com/santi-jose/MemeGenerator.git`
4. Start the server\
`C:PATH\MemeGenerator> npm start`
5. Go to [port 5173](http://localhost:5173/) to view the Meme Generator! Here you can press the button to generate a random meme and input your own text to make your own meme. 

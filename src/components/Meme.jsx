import React from "react"
import memesData from "../memesData"

export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                randomImage: url
            }
        });
    }

    function handleChange(event){
        const {name, value} = event.target;

        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return(
        <main>
            <div className="form">
                <div>
                    <label htmlFor="topText" className="form--label">Top text</label>
                    <input 
                        type="text"
                        className="form--input"
                        name="topText"
                        placeholder="One does not simply"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </div>
                <div>
                    <label className="form--label">Bottom text</label>
                    <input 
                        type="text"
                        className="form--input"
                        name="bottomText"
                        placeholder="Stroll into mordor"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </div>
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image
                </button>
            </div>
            
            <div className="meme">
                <img 
                    className="meme--image" 
                    src={meme.randomImage}
                />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            
        </main>
    );
}
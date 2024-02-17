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

    return(
        <main>
            <div className="form">
                <div>
                    <label className="form--label">Top text</label>
                    <input 
                        type="text"
                        placeholder="Shut up"
                        className="form--input"
                    />
                </div>
                <div>
                    <label className="form--label">Bottom text</label>
                    <input 
                        type="text"
                        placeholder="And take my money"
                        className="form--input"
                    />
                </div>
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image
                </button>
            </div>
            
            <img 
                className="meme--image" 
                src={meme.randomImage}
            />
            
        </main>
    );
}
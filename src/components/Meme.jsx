import React from "react"

export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(
        function(){
            async function getMemes(){
                const res = await fetch("https://api.imgflip.com/get_memes");
                const data = await res.json();
                setAllMemes(data.data.memes);
            }
            getMemes();
        }, []);

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
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
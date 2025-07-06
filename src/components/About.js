import React,{useState} from "react";


export default function About() {

    const [theme,settheme] = useState({
        color : 'black',
        backgroundColor : 'white'
    })

    const [btntext, setbtntext] = useState("Enable dark mode")

    const toggletheme = () => {
        if (theme.color === 'black'){
            settheme({
                color : 'white',
                backgroundColor : 'black'
            })
            setbtntext('white mode')
        }
        else {
            settheme({
                color : 'black',
                backgroundColor : 'white'
            })
            setbtntext('Dark mode')
        }
    }

    return (
        <>
            <div className="card bg-base-100 w-96 shadow-sm mx-4 my-4" style={theme}>
                <div className="card-body">
                    <h2 className="card-title">Sameer kadyan</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={toggletheme}>{btntext}</button>
                    </div>
                </div>
            </div>
        </>
    );
}
import React, {useState, useEffect} from 'react'
import {getVideogames} from './apiCore'
import Cardx from './Cardx'

const Home = (req, res) => {


    const [videogames, setVideogames] = useState([])
    const [error, setError] = useState(false)


    // const loadVideoGame = () => {
    //     getVideogames().then(data => {
    //         if(data.error) {
    //             setError(data.error)
    //         } else {
    //             setVideogames(data)
    //             console.log(data);
    //         }
    //     })
    //   }

    
    const loadVideoGame = async () => {
        const red = await  getVideogames()
        setVideogames(red)
        console.log(red);
      }
        

    useEffect(() => {
        loadVideoGame()
    }, [])

    return (
        <div>
            <div className="container-fluid mt-4">
                <div className="row justify-content-between">
                    {videogames.map((e_videogame, i) => (
                        <div key={i} >
                            <Cardx e_videogame={e_videogame} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home

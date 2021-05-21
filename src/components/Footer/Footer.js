import React, { Component } from 'react'
import './Footer.css';

export class Footer extends Component {

    

    render() {
        return (
            <footer>
                <p className="logo">VALFGG</p>
                <p className="copyright">Valf.GG isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Valorant. 
                    Valorant and Riot Games are trademarks or registered trademarks of Riot Games, Inc. Valorant © Riot Games
                </p>
                <p className="contact">Contact me on Discord: Chris#9370
                </p>
            </footer>
        )
    }
}

export default Footer

import React from 'react';
import {Grid,Cell} from 'react-mdl';

class LandingPage extends React.Component{
    render(){
        return(
            <div className="landingPage" style={{width:'100%', margin:'auto'}}>
                <Grid>
                    <Cell col={12}>
                        <img src="https://www.advanceinnovationgroup.com/shop/admin/img/advisor/1542950755_Avatar%20-%20Female%20Consultant.png" 
                         alt="avataar"
                         width="25%"
                         height="300px" 
                         />
                         <div className="banner">
                         <h1>Full Stack Web Developer</h1>
                         <hr/>
                         <p>HTML/CSS | Bootstrap | Javascript | React | NodeJS | MongoDB</p>
                         <div className="socialLinks">
                           <a href="http://www.twitter.com" target='_blank' rel="noopener noreferrer"><img src="https://images.vexels.com/media/users/3/137419/isolated/preview/b1a3fab214230557053ed1c4bf17b46c-twitter-icon-logo-by-vexels.png" alt="twitter" /></a>
                           <a href="http://www.instagram.com" target='_blank' rel="noopener noreferrer"><img src="https://images.vexels.com/media/users/3/137198/isolated/preview/07f0d7b69ef071571e4ada2f4d6a053a-instagram-icon-colorful-by-vexels.png" alt="instagram"/></a>
                           <a href="http://www.facebook.com" target='_blank' rel="noopener noreferrer"><img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png" alt="facebook"/></a>  
                         </div>
                         </div>
                        
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;
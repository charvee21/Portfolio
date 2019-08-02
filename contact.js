import React from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends React.Component{
    render(){
        return(
            <div className="contact-page">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2 style={{fontFamily:'Anton'}}>Charvee Sharma</h2>
                        <img
                        src="data:image/png;base64,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"
                        alt="avatar"
                        style={{paddingTop:'2em'}}
                        />
                        <p style={{paddingTop:'3em', margin:'auto',width:'80%', fontFamily:'Oxygen',fontWeight:'bold'}}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2 style={{fontFamily:'Anton'}}>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'20px', fontFamily:'anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    +91-1234567890
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'20px', fontFamily:'anton'}}>
                                    <i className="fa fa-fax" aria-hidden="true"/>
                                    +91-1234567890
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'20px', fontFamily:'anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    charvee21@gmail.com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'20px', fontFamily:'anton'}}>
                                    <i className="fa fa-skype" aria-hidden="true"/>
                                    MySkypeId
                                </ListItemContent>
                            </ListItem>
                        </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;
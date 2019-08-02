import React from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends React.Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                    <div style={{textAlign:"center"}}>
                    <img src="https://www.advanceinnovationgroup.com/shop/admin/img/advisor/1542950755_Avatar%20-%20Female%20Consultant.png" 
                    alt="avatar"
                    height="200px"
                    />
                    </div>
                    <h2>Charvee Sharma</h2>
                    <h4 style={{color:'grey'}}>Programmer</h4>
                    <hr style={{borderTop:'3px solid blue',width:'50%'}} />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <hr style={{borderTop:'3px solid blue',width:'50%'}} />
                    <h3>Address</h3>
                    <p>Megapolis Splendour, Pune</p>
                    <h3>Phone</h3>
                    <p>(+91) 1234567890</p>
                    <h3>Email</h3>
                    <p>charvee21@gmail.com</p>
                    <h3>Web</h3>
                    <p>mywebsite.com</p>
                    <hr style={{borderTop:'3px solid blue',width:'50%'}} />
                    </Cell>
                    <Cell col={8} style={{background:'black', color:'white',padding:'2em'}}>
                        <h2>Education</h2>
                        <Education startYear={2010} endYear={2012}
                        schoolName="Sophia" schoolDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                        <Education startYear={2012} endYear={2016}
                        schoolName="UCE" schoolDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                        <hr style={{borderTop:'3px solid red'}}/>
                        <h2>Experience</h2>
                        <Experience startYear={2016} endYear={2018}
                        jobName="My first job" jobDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                        <Experience startYear={2018} endYear={2019}
                        jobName="My second job" jobDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                        <hr style={{borderTop:'3px solid red'}}/>
                        <h2>Skills</h2>
                        <Skills skill={"Javascript"} progress={80}/>
                        <Skills skill={"HTML/CSS"} progress={70}/>
                        <Skills skill={"React"} progress={100}/>
                        <Skills skill={"NodeJS"} progress={50}/>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;
import React from 'react';
import {Grid, Cell} from 'react-mdl';
import {ProgressBar} from 'react-mdl';

class Skills extends React.Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={12}>
                        <div style={{display:'flex'}}>
                        {this.props.skill} <ProgressBar progress={this.props.progress} style={{margin:'auto'}}/>
                        </div>
                    </Cell>                
                </Grid>    
            </div>
        );
    }
}

export default Skills;
import React from 'react';
import {Grid,Cell,Tabs,Tab,Card,CardTitle,CardText,CardActions,Button,CardMenu,IconButton} from 'react-mdl';

class Projects extends React.Component{
    constructor(props){
        super(props);
        this.state={
            activeTab:0
        }
    }

toggleCategories(){
    if(this.state.activeTab===0){
        return(<div className="project-grid">
            <Card shadow={5} style={{margin:'auto'}}>
            <CardTitle className="card-title" style={{color:'white'}}>React Project #1</CardTitle>
            <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</CardText>
            <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>FreeCodeCamp</Button>
                <Button colored>IDE</Button>
            </CardActions>
            <CardMenu>
                <IconButton name="share" style={{color:'white'}}/>
            </CardMenu>
        </Card>
        
        <Card shadow={5} style={{margin:'auto'}}>
            <CardTitle className="card-title" style={{color:'white'}}>React Project #2</CardTitle>
            <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</CardText>
            <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>FreeCodeCamp</Button>
                <Button colored>IDE</Button>
            </CardActions>
            <CardMenu>
                <IconButton name="share" style={{color:'white'}}/>
            </CardMenu>
        </Card>
        
        <Card shadow={5} style={{margin:'auto'}}>
            <CardTitle className="card-title" style={{color:'white'}}>React Project #3</CardTitle>
            <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</CardText>
            <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>FreeCodeCamp</Button>
                <Button colored>IDE</Button>
            </CardActions>
            <CardMenu>
                <IconButton name="share" style={{color:'white'}}/>
            </CardMenu>
        </Card> 
        </div>)
    }
    else if(this.state.activeTab===1){
        return(<h2>This is Angular Project</h2>)
    }
    else if (this.state.activeTab===2){
        return(<h2>This is Viu Project</h2>)
    }
    else if (this.state.activeTab===3){
        return(<h2>This is MongDB Project</h2>)
    }
}

render(){
    return(
        <div>
            <Tabs activeTab={this.state.activeTab} onChange={tabId => this.setState({activeTab:tabId})}>
                <Tab>React</Tab>
                <Tab>Angular</Tab>
                <Tab>Viu</Tab>
                <Tab>MongoDB</Tab>
            </Tabs>
            
                <Grid>
                    <Cell col={12}>
                        {this.toggleCategories()}
                    </Cell>
                </Grid>
            
        </div>
    );
}
}
export default Projects;
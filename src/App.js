import React from 'react';
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';


const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});

const Main = () => (
    <div>           
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppBar title="Twitter" />
  </MuiThemeProvider>
    
    <script src="http://985thejewel.com/wp-content/uploads/How-to-Search-Social-Media-Trending-Topics.jpg"> </script>
    
    <h1> Kartik Gupta </h1>
    <h1> Followers: 10 </h1>
    
<h2> Trends for you </h2>
    
<h3>  #VirushkaWEDDING</h3>
<h3>    Anushka Sharma and Virat Kohli got married in Italy over the weekend </h3>
<h3>   #Kaala </h3>
<h3>    4,837 Tweets </h3>
        
<h3>    GAALI VAALUGA FROM TMRW </h3>
<h3>    43.4K Tweets </h3>
<h3>   #HBDSuperStarRajinikanth </h3>
<h3>   2,333 Tweets </h3>
<h3>    #CongressPresidentRahulGandhi </h3>
<h3>    26K Tweets </h3>
<h3>    #RahulHateModiBrigade </h3>
<h3>    1,986 Tweets </h3>
    </div>
        
);

export default Main
import React from 'react';
import { styled } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import MapImg from '../assets/mapdemo.png';

 

const MyBottomNavigation = styled(BottomNavigation)({
    width: 500,
  });
  

class FooterC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value : "Nearby"
      }
    }

    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };

    setValue (newValue)  {
        this.state.value = newValue;
    }

    
    render() {
      return (
        <div> 
             

            <Card >
              <CardActionArea>
              <CardMedia
                  onClick={() => { window.open('https://www.google.com/maps/@17.3747631,78.4705814,18.25z', '_blank') }}
                  component="img"
                  alt="Find in Map"
                  height="240"
                  image={MapImg}
                  title="Contemplative Reptile"
                  /> 

                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
        

             <MyBottomNavigation
            showLabels

            style={{width: "100%"}}
            >
      <BottomNavigationAction onClick={() => window.open("https://www.facebook.com/kanny027","_blank") } label="Facebook" icon={<FacebookIcon />} />
        <BottomNavigationAction onClick={() => window.open("https://www.instagram.com/_harish_yadav_4","_blank") } label="Instagram" icon={<InstagramIcon />} />
        <BottomNavigationAction onClick={()=> window.open('https://wa.me/9908203606')} label="WhatsApp" icon={<WhatsAppIcon />} />
         </MyBottomNavigation>
          </div>
      )
    }
  }

export default FooterC;


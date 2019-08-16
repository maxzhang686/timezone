import React from 'react';

import Card from './Card';
import './FlickrShowImg.css';


class Flickrimg extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
        tag: '',
        data: null
    }
}
// handleClick = async () => {
//   try {
//       const response = await axios.get('https://cors-anywhere.herokuapp.com/https://api.flickr.com/services/feeds/photos_public.gne?tags='+this.state.tag+'&format=json&nojsoncallback=true')
//       this.setState({data : response.data})
//   } catch(err) {
//       console.log('error')
//   }
// }

  handldeFlickrimg = async() =>{ 
  await fetch('https://cors-anywhere.herokuapp.com/https://api.flickr.com/services/feeds/photos_public.gne?tags='+this.state.tag+'&format=json&nojsoncallback=true')
  .then(
    function(response) {
    return response.json();
  })
  .then( data => this.setState({data}))
  .catch(err =>console.log('error'))
  console.log('request data');
  console.log(this.state.data)

  }

  getImgs = () => {
    return(
        <div>
            {this.state.data.items.map((item,index) => {
                    //console.log(item)
                    return index < 3 && <Card key={index} cardInfo = {{title:item.title, subTitle:'', img: item.media.m}} />
                })
            }
        </div>
    )
}
updateInput = (e) => {
  this.setState({tag: e.target.value})
}

  render(){
    return(
      <div>
        <div className='FlickrShowImg'>
            <input className='inputstyle' onChange={this.updateInput} placeholder='input a tag, eg: cat/dog'/>
            <button onClick={this.handldeFlickrimg}>feed flickr</button>
        </div>
        {this.state.data && this.getImgs()}
      </div>
    );
  }
}
export default Flickrimg;


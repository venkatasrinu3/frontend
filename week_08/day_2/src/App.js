import React from 'react';
import About from './components/About restaurent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [{
                name: "URU Brewpark", menu: ["Continental Pizza,", ' Asian, ', ' Desserts,'], cost: '600/- for one', min: "Min 50/- Upto 30min", Payment_method: ['Credit card', 'Debit card', 'UPI Payments'], rating: 4.3, votes: "586 votes", reviews: '512 reviews', url: 'https://www.fabhotels.com/blog/wp-content/uploads/2018/09/Feature-Image600X400-1280x720.jpg', id: 1
            },
            {
                name: "Karavalli", menu: ["Continental Pizza,", ' Asian, ', ' Desserts,'], cost: '600/- for one', min: "Min 50/- Upto 30min", Payment_method: ['Credit card', 'Debit card', 'UPI Payments'], rating: 3.3, votes: '829 votes', reviews: '512 reviews', url: 'https://cdn.images.express.co.uk/img/dynamic/25/590x/secondary/hotel-secrets-bad-food-buffet-1124126.jpg', id: 2
            },
            {
                name: "Novotel", menu: ["Continental Pizza,", ' Asian, ', ' Desserts,'], cost: '600/- for one', min: "Min 50/- Upto 30min", Payment_method: ['Credit card', 'Debit card', 'UPI Payments'], rating: 4.5, votes: '666 votes', reviews: '512 reviews', url: 'https://ilikefood518.files.wordpress.com/2018/05/img_e3634.jpg', id: 3
            },
            {
                name: "Palm Beach Hotel", menu: ["Continental Pizza,", ' Asian, ', ' Desserts,'], cost: '600/- for one', min: "Min 50/- . Upto 30min", Payment_method: ['Credit card', 'Debit card', 'UPI Payments'], rating: 3.2, votes: '851 votes', reviews: '512 reviews', url: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/oodghmivnc6bxnbrvzzw', id: 4
            },
            {
                name: "Hotel Daspalla", menu: ["Continental Pizza,", ' Asian, ', ' Desserts,'], cost: '600/- for one', min: "Min 50/- Upto 30min", Payment_method: ['Credit card', 'Debit card', 'UPI Payments'], rating: 3.4, votes: '716 votes', reviews: '512 reviews', url: 'https://i10.dainikbhaskar.com/thumbnails/730x548/web2images/www.dailybhaskar.com/2015/12/22/17_1450776677.jpg', id: 5
            },
            {
                name: "Hotel Dolphin", menu: ["Continental Pizza,", ' Asian, ', ' Desserts,'], cost: '600/- for one', min: "Min 50/- Upto 30min", Payment_method: ['Credit card', 'Debit card', 'UPI Payments'], rating: 4.1, votes: '902 votes', reviews: '512 reviews', url: 'https://static.toiimg.com/photo/76179976.cms', id: 6
            },
            {
                name: "Sai Ram Parlour", menu: ["Continental Pizza,", ' Asian, ', ' Desserts,'], cost: '600/- for one', min: "Min 50/- Upto 30min", Payment_method: ['Credit card', 'Debit card', 'UPI Payments'], rating: 0.2, votes: '846 votes', reviews: '512 reviews', url: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/cover-for-Chicago-Food.jpg', id: 7
            },
            {
                name: "Udipi Hotel", menu: ["Continental Pizza,", ' Asian, ', ' Desserts,'], cost: '600/- for one', min: "Min 50/- Upto 30min", Payment_method: ['Credit card', 'Debit card', 'UPI Payments'], rating: 3.7, votes: '696 votes', reviews: '512 reviews', url: 'https://www.holidify.com/images/cmsuploads/compressed/indian-1768906_1920_20180322173733.jpg', id: 8
            },
            {
                name: "Ming Garden", menu: ["Continental Pizza,", ' Asian, ', ' Desserts,'], cost: '600/- for one', min: "min 50/- Upto 30min", Payment_method: ['Credit card', 'Debit card', 'UPI Payments'], rating: 1.5, votes: '755 votes', reviews: '512 reviews', url: 'https://post.healthline.com/wp-content/uploads/2020/03/adhd-foods-to-avoid_thumb-732x549.jpg', id: 9
            },
            {
                name: "Flying Spaghetti Monster", menu: ["Continental Pizza,", ' Asian, ', ' Desserts,'], cost: '600/- for one', min: "Min 50/- Upto 30min", Payment_method: ['Credit card', 'Debit card', 'UPI Payments'], rating: 2.1, votes: '800 votes', reviews: '512 reviews', url: 'https://cdn.theculturetrip.com/wp-content/uploads/2017/02/3327419528_4543185076_o.jpg', id: 10
            }]
    }
  }
  handleClick=(rate) =>{
    this.setState({
        user:this.state.user.filter(element => element.rating>=Number(rate))
    })
  }
  handleChange = (e) => {
      e.target.value==='asc' 
                ?
      this.setState({user: this.state.user.sort((a,b) => Number(a.rating)-Number(b.rating))}) 
                :
      this.setState({user: this.state.user.sort((a,b) => Number(b.rating)-Number(a.rating))})          
  }
  render() {
    return (
      <div>
        <div className="text-center ratebtn mt-5">
          <select className="mr-1 p-2 btn-success" onChange={this.handleChange}>
            <option value="">--Sort--</option>
            <option value="asc">Ascending</option>
            <option value="Des">Descending</option>
          </select>
          <button className="btn  btn-outline-primary mx-1" onClick={() => this.handleClick('1')}>1 Star</button>
          <button className="btn  btn-outline-primary mx-1" onClick={() => this.handleClick('2')}>2 Star</button>
          <button className="btn  btn-outline-primary mx-1" onClick={() => this.handleClick('3')}>3 Star</button>
          <button className="btn  btn-outline-primary mx-1" onClick={() => this.handleClick('4')}>4 Star</button>
        </div>
        <About data={this.state.user} />
      </div>
    )
  }
}
export default App
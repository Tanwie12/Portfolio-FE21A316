var express = require('express');
var cors = require('cors');
var app = express();
var mongoose = require('mongoose');
const Testimonial=require('./models/testimonialModel');//databse schema
const Portfolio=require('./models/portfolioModel');
const path = require('path');
const dotenv= require('dotenv');
dotenv.config();
//connecting mongoose
console.log(process.env.API_PORT)
mongoose.connect(process.env.MONGODB_URI)



/// app.use   

app.use(cors()); // Enable CORS for all routes
app.use(express.static(path.join(__dirname, '../src/assets'))); // Serve static files from the 'src' directory

// variable section 
const data_portfolio=[
    
    {
  id:1,
  Image:'portfolio1.jpg',
  title:'BroadcastChannel',
  github:'http://github.com/',
  demo:'https://whasapp.com/'
    },
    {
      id:2,
      Image:'portfolio1.jpg',
      title:'BroadcastChannel',
      github:'http://github.com/',
      demo:'https://whasapp.com/'
        },
        {
          id:3,
          Image:'portfolio3.jpg',
          title:'BroadcastChannel',
          github:'http://github.com/',
          demo:'https://whasapp.com/'
            },
            {
              id:4,
              Image:'portfolio4.jpg',
              title:'BroadcastChannel',
              github:'http://github.com/',
              demo:'https://whasapp.com/'
                }, 
                {
                  id:5,
                  Image:'portfolio5.png',
                  title:'BroadcastChannel',
                  github:'http://github.com/',
                  demo:'https://whasapp.com/'
                    },  
         {
                      id:6,
                      Image:'portfolio6.jpg',
                      title:'BroadcastChannel',
                      github:'http://github.com/',
            demo:'https://whasapp.com/'
                        },     

]
const data_testimonial = [
  {
    avatar: 'avatar1.jpg',
    name: 'Lebron James',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa exercitationem dolores earum.',
  },
  {
    avatar: 'avatar2.jpg',
    name: 'Mike Tyson',
    review: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    avatar: 'avatar3.jpg',
    name: 'Mike',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa exercitationem dolores earum.',
  },
  {
    avatar: 'avatar4.jpg',
    name: 'Bruno',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa exercitationem dolores earum.',
  },
];
let initialize=false;// use to create the databse only ones


app.get('/api/testimonials', async (req, res) => {
    if(!initialize){
      await Testimonial.create(data_testimonial)
      initialize=true;
    }
   const data= await Testimonial.find()
 res.json(data);
 
});
app.post('/api/testimonials/create', async (req, res) => {
  const testimonialData =  await Testimonial.create(data_testimonial)
  console.log(testimonialData)

  try {
    const testimonial = await Testimonial.create(testimonialData);
    res.json(testimonial);
    console.log('Testimonial created:', testimonial);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// delete route 
app.delete('/api/testimonials', async (req, res) => {
  try {
    await Testimonial.deleteMany({});
    res.status(200).json({ message: 'Testimonials deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting testimonials' });
  }
});

let deltebtn=true;
app.get('/api/portfolio', async (req, res) => {
 if (deltebtn) {
  await Portfolio.deleteMany({});
  deltebtn=false;
 }
  if(!initialize){
    await Portfolio.create(data_portfolio)
    initialize=true;
  }
 const data= await Portfolio.find()
res.json(data);
console.log(data);
});

if(process.env.API_PORT){
app.listen(process.env.API_PORT, () => {
  console.log('Listening on port 5000');
});}
 
module.exports= app
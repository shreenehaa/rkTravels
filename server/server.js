const express=require('express');
const mongoose=require('mongoose')
const cors=require('cors')
const bodyParser=require('body-parser')
const app=express()
app.use(express.json())
app.use(bodyParser.urlencoded({extende:false}))
app.use(cors());
const router = express.Router();
const Package=require('./package')
const Login=require('./admin')
const user_data=require('./user')
const Book=require('./book')
const connectDb=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/consultant')
    .then(()=>{
        console.log("mongo connected")
    })
    .catch((err)=>{
        console.log(err)
    })
}


app.post('/package/add',(req,res)=>{
    var data=new Package(req.body)
    data.save()
    console.log(data)
    res.send(data)
})

app.post('/book/add',(req,res)=>{
  var data=new Book(req.body)
  data.save()
  console.log(data)
  res.send(data)
})

app.get('/packages/get',async (req,res)=>{
    const data = await Package.find().exec();
    res.send(data)
})

app.get('/user/get/:id',async (req,res)=>{
  const id=  req.params.buttonValue
      console.log(id)
       const data= await Package.find({'_id':id})
      //  console.log(data)
       res.json(data[0])
        })



app.get('/booking/get',async (req,res)=>{
  const data = await Book.find().exec();
  res.send(data)


})

app.put('/booking/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Check if the ID is valid
    if (!id) {
      return res.status(400).json({ error: 'Invalid booking ID' });
    }

    // Update the booking status in the database based on the ID
    const updatedBooking = await Book.findByIdAndUpdate(id, { status }, { new: true });

    if (!updatedBooking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    // Send the updated booking as the response
    res.json(updatedBooking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating the booking status' });
  }
});





app.get('/packages/get/:buttonValue',async (req,res)=>{
    const id=  req.params.buttonValue
        console.log(id)
         const data= await Package.find({'_id':id})
        //  console.log(data)
         res.json(data[0])
          })
         
          app.get('/profile/get/:email', async (req, res) => {
            try {
              const email = req.params.email;
             
              console.log(email);
              const data = await Book.find({ email });
              console.log(data)
              res.send(data);
            } catch (error) {
              console.error('Error fetching profile data:', error);
              res.status(500).json({ error: 'Internal Server Error' });
            }
          });

          app.get('/profile/get_det/:email', async (req, res) => {
            try {
              const email = req.params.email;
             
              console.log(email);
              const data = await user_data.find({ email });
              console.log(data)
              res.send(data);
            } catch (error) {
              console.error('Error fetching profile data:', error);
              res.status(500).json({ error: 'Internal Server Error' });
            }
          });
          
          

          app.post("/login", async (req, res) => {
            const { userid, password } = req.body;
          console.log({userid})
            try {
              const user = await Login.findOne({ userid: userid });
              console.log(user)
              if (user && user.password == password) {
               
                res.json({ userid, password });
              } else {
                console.log("error")
                res.json("not exist");
              }
            } catch (e) {
              res.json("not exist");
            }
          });
          
               
      
          app.post("/Signup_user", async (req, res) => {
            const { email, password,fname,lname,phone,country } = req.body;
            const data = {
              email: email,
              password: password,
              fname:fname,
              lname:lname,
              phone:phone,
              country:country


            };
            
            try {
              const check = await user_data.findOne({ email: email });
              if (check) {
                res.json("exist");
              } else {
                await user_data.insertMany(data);
                res.json(data); 
              }
            } catch (e) {
              res.json("not exist");
            }
          });
          
              
   
          app.post("/login_user", async (req, res) => {
            const { email, password } = req.body;
          
            try {
              const user = await user_data.findOne({ email: email });
          
              if (user && user.password === password) {
                res.json({ email, password });
              } else {
                res.json("not exist");
              }
            } catch (e) {
              res.json("not exist");
            }
          });
                 



































app.listen(4000,()=>{
    console.log("server connected")
    connectDb()
})
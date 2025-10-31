const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv').config();

// default port: 3002 (matches frontend axios URL in BuyActionWindow which posts to 3002)
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
// Do not print the full URI (may contain credentials). Only log whether it is present.
console.log("MONGO_URL provided:", !!uri);

const {HoldingsModel} = require('./model/HoldingsModel');
const {PositionsModel} = require('./model/PositionsModel');
const {OrdersModel} = require('./model/OrdersModel');

const app = express();


app.use(cors());
app.use(bodyParser.json());

// app.get('/addHoldings', (req, res)=>{
//     let tempHoldings=[
//         {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },
//     ];
//     tempHoldings.forEach((item)=>{
//         let newHolding = new HoldingsModel({
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net : item.net,
//             day: item.day,
//         });
//         newHolding.save();
//     });
//     res.send("done");
// });

// app.get('/positions', (req, res)=>{
//   let tempPositions = [
//     {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
  
//   ]
//   tempPositions.forEach((item)=>{
//         let newPositions = new PositionsModel({
//             product: item.product,
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net : item.net,
//             day: item.day,
//             isLoss: item.isLoss,
//         });
//         newPositions.save();
//     });
//     res.send("done");
// });

app.get('/allHoldings', async(req, res)=>{
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get('/allPositions', async(req, res)=>{
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.get('/', (req, res)=>{
    res.send("welcome to the zerodha");
})

app.post('/newOrder', async (req, res) => {
    console.log("POST /newOrder - body:", req.body);

    try {
        const newOrder = new OrdersModel({
            name: req.body.name,
            qty: req.body.qty,
            price: req.body.price,
            mode: req.body.mode,
        });

        const saved = await newOrder.save();
        console.log("Order saved:", saved);
        return res.status(201).json({ message: "order saved", order: saved });
    } catch (err) {
        console.error("Error saving order:", err);
        return res.status(500).json({ error: err.message });
    }
});
// Attach useful connection event listeners for clearer diagnostics
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to DB');
});

mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.warn('Mongoose disconnected');
});

async function connectDB(){
        try{
                // use recommended options for most mongoose versions
                await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }); 
                console.log("connection to db - connect() returned");
        }catch(err){
                console.error("mongo db connection err", err);
        }
}
connectDB();

app.listen(PORT, ()=>{
    console.log(`server is running successfully on port http://localhost:${PORT}`);
    
    });

process.on('SIGINT', () => {
  console.log('Server shutting down...');
  process.exit();
});


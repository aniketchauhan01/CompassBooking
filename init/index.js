const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");

main()
.then(()=>{
    console.log("connection establish to DB")
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/wonderlust')
}

const initDB=async()=>{
    // await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({
        ...obj,owner:"66d59f7954525bc9c71d8e97"
    }))
    await Listing.insertMany(initData.data);
    console.log("data is initalized");
}

initDB();
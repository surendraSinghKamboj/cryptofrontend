const arr = [
  { price: "16684.977887299978", timestamp: 1668929700 },
  { price: "16707.235594889247", timestamp: 1668929400 },
  { price: "16692.008054038222", timestamp: 1668929100 },
  { price: "16696.712562764922", timestamp: 1668928800 },
  { price: "16693.883747158652", timestamp: 1668928500 },
  { price: "16693.914266614356", timestamp: 1668928200 },
  { price: "16693.72032320753", timestamp: 1668927900 },
  { price: "16693.520322733366", timestamp: 1668927600 },
  { price: "16688.249193664527", timestamp: 1668927300 },
  { price: "16695.039094249798", timestamp: 1668927000 },
  { price: "16688.663315007325", timestamp: 1668926700 },
];

const label = ["Price","TimeStamp"]


const process=arr.map((i)=>{
  return [+i.price,i.timestamp]
})

process.unshift(obj)
console.log(process);


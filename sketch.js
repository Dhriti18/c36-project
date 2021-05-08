var dog,sadDog,happyDog, database;
var foodS,foodStock;
var addFood;
var foodObj;

//create feed and lastFed variable here
var feed,lastFed;
var feedTime;

function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);

  foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  feedTime=hour();


  //create feed the dog button here
 feedDog=createButton("Feed Food");
 feedDog.position(400,95);
feedDog.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
  
  
   
    //write code to display text lastFed time here

    }


function draw() {
  background(46,139,87);
  foodObj.display();

  //write code to read fedtime value from the database 
  lastFed=database.ref("FeedTime");
  lastFed.on("value",function(data){
  pos=data.val()})
  //let hour= hour();
  textSize(23);
fill("white");
 text("Last Feed:" + feedTime, 500, 60);
  drawSprites();


if(feedTime>=12){
  
   

  text("Last Feed:12 PM",300,80);
}
else if(feedTime==0){
  text("Last Feed:12 AM",300,80);
}
else{
  text("abc",100,100)
}}
//function to read food Stock
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);


  var foodStockVal=foodObj.getFoodStock();
  if(foodStockVal<=0){
    foodObj.updateFoodStock(foodStockVal*0);
  }
 else{
   foodObj.updateFoodStock(foodStockVal-1);}

 
}



function feedDog(){
  dog.addImage(happyDog);
feedDog.mousePressed(
function(){
FoodS--;
database.ref('/').update({
  Food:foodS,
 
})
}




)
  //write code here to update food stock and last fed time
  var fedLast1 = input.value();
lastFed.update(fedLast1);
 lastFed.updateCount(fedLast1);
}

//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })

}


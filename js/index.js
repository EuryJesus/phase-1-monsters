function monstersLive(monsters){
 fetch('http://localhost:3000/monsters'),{
    method:'POST',

headers:
{
  "Content-Type": "application/json",
  Accept: "application/json"
},
body:JSON.stringify({
    'name': "Cats", 
    'age': 1023.3453453124,
    'description': "Mean and annoying, only eat the food. Uncapable of killing a mice but more than capable of destroying your couch. Also, a big part of the time they sleep to only wake up hungry. Only look for their owner when they want to eat, more than 90 percent of the time they will not allow you to pet them.",
    
 })
};
}
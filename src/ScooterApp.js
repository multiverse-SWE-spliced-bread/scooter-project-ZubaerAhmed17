const User = require('./User');
const Scooter = require('./Scooter');

class ScooterApp {
  constructor (scooterStatus){
    this.scooterStatus = scooterStatus
    this.users = []
  }
  // ScooterApp code here

register(userName, password, age){
  for (let i = 0; i < this.Scooter.length; i++){
    if(this.users[i].userName == userName){
      throw new Error("This Username is already taken")
    }
}

const user = new User(userName, password, age)
this.users.push(user)
return user
}
login(username, password){
  const user=this.user.find(u => u.username == username)
  if (!user) throw new Error("Sign up first")
  if (user.password !== password) throw new Error("Access denied")
  user.loginStatus = true
}
}

const a = new ScooterApp()
const x = app.register('zubaer','password', 22)
console.log(a.users)
console.log(a.login())

module.exports = ScooterApp;

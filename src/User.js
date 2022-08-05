const Dock = require("./Dock")
const Scooter = require("./Scooter")

class User {
  constructor(username, password, email, age, loginStatus, securityCode){
    this.username = username
    this.password = password
    this.email=email
    this.age=age
    this.loginStatus=false
    this.securityCode=null
    this.scooters=null
}

updateUsername(newUsername,password){
  if(password!== this.password)return
  this.username=newUsername
}
updatePassword(securityCode,newPassword){
  if(securityCode!== this.securityCode)return
  this.password=newPassword
}
rentScooter(dock){
  this.scooter = dock.scooter.pop(scooter)
}
returnScooter(scooter){
  dock.scooters.push(this.scooter)
  if (this.scooter){
    dock.scooter.push(this.scooter)
    this.scooter = null
  }
}
}
  
module.exports = User
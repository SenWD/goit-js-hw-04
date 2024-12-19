
const profile = {
 
    username: "Jacob",
    playTime : 300,
   
    updatePlayTime(times){
    
        if   (this.playTime + times < 0) {
        this.playTime = 0;
        } else {
            this.playTime += times;
        }
    },
    changeUsername(newName) {
      this.username = newName;
    },
  getInfo(){
    return `${this.username} has ${this.playTime} active hours!`;
    },
  };
  
  console.log(profile.getInfo()); // "Jacob has 300 active hours!"
  
  profile.changeUsername("Marco");
  console.log(profile.getInfo()); // "Marco has 300 active hours!"
  
  profile.updatePlayTime(20);
  console.log(profile.getInfo()); // "Marco has 320 active hours!"

  
  
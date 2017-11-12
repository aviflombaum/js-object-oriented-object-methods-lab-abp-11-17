function BoardMember(name, homeState, training){
  this.name = name
  this.homeState = homeState
  this.training = training
  
}

BoardMember.prototype.veto = function(){
    returns `No, I must disagree`
}
  
BoardMember.prototype.approve = function(){
    returns `You can do that!`
}

BoardMember.prototype.doCharity = function(){
    returns `I like to help people.`
}

BoardMember.prototype.releasePressStatement = function(){
    returns `You will see great things from Scuber.`
}

BoardMember.prototype.sayHi = function(){
    returns `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
}


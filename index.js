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

BoardMember.prototype.veto = function(){
    returns `No, I must disagree`
}


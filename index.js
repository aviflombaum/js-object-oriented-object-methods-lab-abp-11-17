function BoardMember(name, homeState, training){
  this.name = name
  this.homeState = homeState
  this.training = training
  
  this.veto = function(){
    returns `No, I must disagree`
  }
}


new BoardMember()
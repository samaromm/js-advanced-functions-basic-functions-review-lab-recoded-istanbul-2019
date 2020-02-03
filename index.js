// Your code here

function saturdayFun(s='roller-skate'){
  return "This Saturday, I want to "+s+"!"
}

function mondayWork(s='go to the office'){
  return "This Monday, I will "+s+"."
}

function wrapAdjective(visual='*'){
  return function(s="special"){
    return "You are "+visual+s+visual+'!'
  }
}

let Calculator={
  add:function(n1, n2){return n1+n2},
  subtract:function(n1, n2){return n1-n2},
  multiply:function(n1, n2){return n1*n2},
  divide:function(n1, n2){return n1/n2}
}

function actionApplyer(num,arr){
  if(arr.length==0)return num
  for(let ele of arr){
    num=ele(num)
  }
  return num
}
function isTouching(funObj1,funObj2)
{
  if(funObj1.x - funObj2.x < funObj1.width/2 + funObj2.width/2  &&  
    funObj2.x - funObj1.x < funObj2.width/2+funObj1.width/2  &&
    funObj1.y - funObj2.y < funObj1.height/2 + funObj2.height/2  &&  
    funObj2.y - funObj1.y < funObj2.height/2+funObj1.height/2 )
 {
    return true;
 }
 else
 {
  return false;
 }
}



function bounceOff (funObj1,funObj2)
{
  if(funObj1.x - funObj2.x <funObj1.width/2 + funObj2.width/2  &&  
    funObj2.x - funObj1.x < funObj2.width/2+funObj1.width/2 )
   
    {
      funObj1.velocityX = funObj1.velocityX * - 1
      funObj2.velocityX = funObj2.velocityX * - 1
    }
    if (funObj1.y - funObj2.y < funObj1.height/2 + funObj2.height/2  &&  
      funObj2.y - funObj1.y < funObj2.height/2+funObj1.height/2 )
      {
        funObj1.velocityY =funObj1.velocityY * - 1
        funObj2.velocityY= funObj2.velocityY * - 1
      }
}
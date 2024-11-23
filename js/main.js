



var quotes=[
    `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,
    `So many books, so little time`,
    `A room without books is like a body without a soul.` , 
    `Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.` ,

     `You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.`,
     `You know you're in love when you can't fall asleep because reality is finally better than your dreams`,
     `You only live once, but if you do it right, once is enough`,
     `Be the change that you wish to see in the world.`,
     `In three words I can sum up everything I've learned about life: it goes on`,
     `If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.`,
     `Don't walk in front of me… I may not follow
Don't walk behind me… I may not lead
Walk beside me… just be my friend`,
     `If you tell the truth, you don't have to remember anything.`,


]

function ranQ(){
    var x=Math.random()*quotes.length

    var y=Math.floor(x)
    var z=quotes[y]
    
 document.getElementById("quote").innerHTML=z
    
}


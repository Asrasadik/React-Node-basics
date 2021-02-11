const a=4;
const b=5;
 console.log(a+b); // on node script.js it excutes and comes out because this line is last and then node executes process.exit file

 setTimeout(()=>{ // stays(executes after 3 sec) for 3 seconds
     console.log(a+b);
 }, 3000)

 console.log(__dirname); // for current directory name ...this is one of the global object that we have
const args = process.argv.slice(2);

if (args[0] === undefined) 
{
  console.log("No argument");
} 
else if (args[1] === undefined) 
{
  console.log("HBTN" + args[0]);
} 
else 
{
  console.log("HBTN cool");
}

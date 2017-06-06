// nowa

function drawTree(pietra) {
  
  console.log(pietra);
  for (i=0;i<pietra;i++) {
    var star = " ";
    for(j=0;j<=i;j++) {
      star = star + "*";
    }
    console.log(star);
  }
}
drawTree(5);
drawTree(10);




// stara

for (i=0;i<=5;i++)
{
for(j=0; j<=i; j++)
{
document.write("*");
}
document.write("<br>");
}
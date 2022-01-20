var Pictures=["cover.jpg","Mother.jpg","Rachit.jpg","Ayushman.jpg","Grandmother.jpg","Ishan.jpg"];
var Name=["Family Book","Mother","Rachit","Ayushman","Grandmother","Ishan"];

var i=0;
function next() 
{
    document.getElementById("book_img").src=Pictures[i];
    document.getElementById("name").innerHTML=Name[i];
    i++;
    if (i > 5)
    {
        i=0;
    }
}



function colorLinks(hex)
{
    var links = document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++)
    {
        if(links[i].href)
        {
            links[i].style.color = hex;  
        }
    }  
}
function dark () {
document.body.style.backgroundColor = "black"; 
document.body.style.color = "red"; 
document.getElementById('#main a').style.color = "616aff"; 

}

browser.browserAction.onClicked.addListener(colorLinks('#00FF00'), dark());
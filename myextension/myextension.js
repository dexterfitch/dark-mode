function colorLinks(hex)
{
    function dark () {
        document.body.style.backgroundColor = "#2b2b2b"; 
        document.body.style.color = "#f458b6"; 
        
        }
dark();        
    var links = document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++)
    {
        if(links[i].href)
        {
            links[i].style.color = hex;  
        }
    }  
}



browser.browserAction.onClicked.addListener(colorLinks('#00FF00'));
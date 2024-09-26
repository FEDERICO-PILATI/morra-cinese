document.getElementById("gioca").onclick=function()
{
    document.getElementById("tu").style="";
    document.getElementById("browser").style="";
    document.getElementById("gioca").style.visibility="hidden"; //nascondo il bottone
    document.getElementById("scelta").style.display="block"; //mostro le opzioni
};


/*---------------------------------------------------------------*/
//CARTA
document.getElementById("carta").onclick=function()
{
    /*
    0=carta
    1=sasso
    2=forbici
    */
   //SCELTA CASUALE DEL BROWSER
    let numRand=Math.floor(Math.random()*3);
    if(numRand==0) 
    {
      document.getElementById("browser").style.backgroundImage="url(immagini/carta.png)"
      document.getElementById("browser").style.backgroundSize="cover";
      document.getElementById("browser").style.backgroundPosition="center center"; 
      document.getElementById("esito").innerHTML="Partita patta!";
    }
    if(numRand==1)
    {
      document.getElementById("browser").style.backgroundImage="url(immagini/sasso.png)"
      document.getElementById("browser").style.backgroundSize="cover"; 
      document.getElementById("browser").style.backgroundPosition="center center";
      document.getElementById("esito").innerHTML="Partita vinta!";
      document.getElementById("punteggioTu").innerHTML++;
    }
    if(numRand==2)
    {
      document.getElementById("browser").style.backgroundImage="url(immagini/forbici.png)"
      document.getElementById("browser").style.backgroundSize="cover";
      document.getElementById("browser").style.backgroundPosition="center center"; 
      document.getElementById("esito").innerHTML="Partita persa!";
      document.getElementById("punteggioBrowser").innerHTML++;
    }
    
    //SCELTA TU
    document.getElementById("scelta").style.display="none"; //nascondo le opzioni
    document.getElementById("tu").style.backgroundImage="url(immagini/carta.png)"; //metto il background
    document.getElementById("tu").style.backgroundSize="cover"; //regolo il background
    document.getElementById("tu").style.backgroundPosition="center center";
    document.getElementById("esito").style.visibility="visible";
    document.getElementById("gioca").style.visibility="visible";
};


/*---------------------------------------------------------------*/
//SASSO
document.getElementById("sasso").onclick=function()
{
    /*
    0=carta
    1=sasso
    2=forbici
    */
   //SCELTA CASUALE DEL BROWSER
    let numRand=Math.floor(Math.random()*3);
    if(numRand==0)
    {
      document.getElementById("browser").style.backgroundImage="url(immagini/carta.png)"
      document.getElementById("browser").style.backgroundSize="cover";
      document.getElementById("browser").style.backgroundPosition="center center"; 
      document.getElementById("esito").innerHTML="Partita persa!";
      document.getElementById("punteggioBrowser").innerHTML++;
    }
    if(numRand==1)
    {
      document.getElementById("browser").style.backgroundImage="url(immagini/sasso.png)"
      document.getElementById("browser").style.backgroundSize="cover"; 
      document.getElementById("browser").style.backgroundPosition="center center";
      document.getElementById("esito").innerHTML="Partita patta!";
    }
    if(numRand==2)
    {
      document.getElementById("browser").style.backgroundImage="url(immagini/forbici.png)"
      document.getElementById("browser").style.backgroundSize="cover"; 
      document.getElementById("browser").style.backgroundPosition="center center";
      document.getElementById("esito").innerHTML="Partita vinta!";
      document.getElementById("punteggioTu").innerHTML++;
    }
    
    //SCELTA TU
    document.getElementById("scelta").style.display="none"; //nascondo le opzioni
    document.getElementById("tu").style.backgroundImage="url(immagini/sasso.png)" //metto il background
    document.getElementById("tu").style.backgroundSize="cover"; //regolo il background
    document.getElementById("tu").style.backgroundPosition="center center";
    document.getElementById("esito").style.visibility="visible";
    document.getElementById("gioca").style.visibility="visible";
};


/*---------------------------------------------------------------*/
//FORBICI
document.getElementById("forbici").onclick=function()
{
    /*
    0=carta
    1=sasso
    2=forbici
    */
   //SCELTA CASUALE DEL BROWSER
    let numRand=Math.floor(Math.random()*3);
    if(numRand==0)
    {
      document.getElementById("browser").style.backgroundImage="url(immagini/carta.png)"
      document.getElementById("browser").style.backgroundSize="cover"; 
      document.getElementById("browser").style.backgroundPosition="center center";
      document.getElementById("esito").innerHTML="Partita vinta!";
      document.getElementById("punteggioTu").innerHTML++;
    }
    if(numRand==1)
    {
      document.getElementById("browser").style.backgroundImage="url(immagini/sasso.png)"
      document.getElementById("browser").style.backgroundSize="cover"; 
      document.getElementById("browser").style.backgroundPosition="center center";
      document.getElementById("esito").innerHTML="Partita persa!";
      document.getElementById("punteggioBrowser").innerHTML++;
    }
    if(numRand==2)
    {
      document.getElementById("browser").style.backgroundImage="url(immagini/forbici.png)"
      document.getElementById("browser").style.backgroundSize="cover"; 
      document.getElementById("browser").style.backgroundPosition="center center";
      document.getElementById("esito").innerHTML="Partita patta!";
    }
    
    //SCELTA TU
    document.getElementById("scelta").style.display="none"; //nascondo le opzioni
    document.getElementById("tu").style.backgroundImage="url(immagini/forbici.png)" //metto il background
    document.getElementById("tu").style.backgroundSize="cover"; //regolo il background
    document.getElementById("tu").style.backgroundPosition="center center";
    document.getElementById("esito").style.visibility="visible";
    document.getElementById("gioca").style.visibility="visible";
   
}; 
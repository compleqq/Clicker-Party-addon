<pre>
if(PartyTime === undefined) var PartyTime = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');

MyMod.launch = function(){
PartyTime.isLoaded = 1;
Game.customOptionsMenu.push(function(){
	CCSE.AppendCollapsibleOptionsMenu("Party Button", '<button onclick="lol()"></button>');
});
}

if(!PartyTime.isLoaded){
	if(CCSE && CCSE.isLoaded){
		PartyTime.launch();
	}
	else{
		if(!CCSE) var CCSE = {};
		if(!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
		CCSE.postLoadHooks.push(PartyTime.launch);
	}
  function lol()
  {
    var toggled = false;

    if(toggled == true)
    {
      toggled = false;
      Game.Party = false;

    }
    else if(toggled == false)
    {
      toggled = true;
      Game.Party = true;
    }
  }
</pre>

this["JST"] = this["JST"] || {};
this["JST"]["application"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});
this["JST"]["characterselect"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n<div class=\"popup-div\">\n	<img src= \"../asset/heros/steamLogo.png\">\n	<div class = 'textContent'>\n	<h4>Created by: </h4>\n			<p><strong>M G K</strong></p>\n			<hr>\n			<h4>GitHub</h4>\n			<p class = 'githubLinks'>\n				<a href=\"https://github.com/mchaperc\" target=\"_blank\">Matt Chastain</a>\n				<a href=\"https://github.com/badview08\" target=\"_blank\">Gabriel Jones</a>\n				<a href=\"https://github.com/skrich-x\" target=\"_blank\">Kyle Richardson</a>\n			</p>\n		<div class=\"instructions\">\n			<h3> Instructions</h3>\n				<p>-Select your Hero-<br>-The Enemy and Fight Arena will be Selected at Random-<br>-Press the <strong>SPACEBAR</strong> to Attck-<br>-Wait for Enemy to Attack-<br>-Press <strong>SPACEBAR</strong> to attack Again!!-<br>*(First player to Deplete their enemies Health bar to 0 <strong>WINS!!</strong>)*</p>\n		</div>\n	</div>\n		<div class=\"footer-div\">\n			<button class=\"characterSelectButton\">Select Your Hero</button>\n\n		</div>\n</div>\n<div class = \"center-container\">\n	<div class=\"selection-container\">\n		<h2 class = \"headings\"><i class=\"fa fa-cog fa-spin\"></i>  PLEASE CHOOSE YOUR HERO  <i class=\"fa fa-cog fa-spin\"></i></h2>\n		<div class=\"hero-selection\">\n			<ul>\n				<li class=\"hero\">\n					<img id=\"hero1\" src=\"../asset/heros/hero1.png\">\n				</li>\n				<li class=\"hero\">\n					<img id=\"hero2\" src=\"../asset/heros/hero2.png\">\n				</li>\n				<li class=\"hero\">\n					<img id=\"hero3\" src=\"../asset/heros/hero3.png\">\n				</li>\n			</ul>\n		</div>\n		<h2 class = \"headings\"><i class=\"fa fa-cog fa-spin\"></i>  YOUR BATTLEGROUND  <i class=\"fa fa-cog fa-spin\"></i></h2>\n		<div class=\"random-location\">\n			<ul>\n				<li class=\"arena\">\n					<img id = \"arena1\" src=\"../asset/locations/arena1.jpg\">\n				</li>\n				<li class=\"arena\">\n					<img id = \"arena2\" src=\"../asset/locations/arena2.jpg\">\n				</li>\n				<li class=\"arena\">\n					<img id = \"arena3\" src=\"../asset/locations/arena3.jpg\">\n				</li>\n			</ul>\n		</div>\n		<h2 class = \"headings\"><i class=\"fa fa-cog fa-spin\"></i>  YOUR ENEMY AWAITS  <i class=\"fa fa-cog fa-spin\"></i></h2>\n		<div class=\"random-villain\">\n			<ul>\n				<li class=\"villain\">\n					<img id = \"villain1\"  src=\"../asset/villain/villain1.png\">\n				</li>\n				<li class=\"villain\">\n					<img id = \"villain2\" src=\"../asset/villain/villain2.png\">\n				</li>\n				<li class=\"villain\">\n					<img id = \"villain3\" src=\"../asset/villain/villain3.png\">\n				</li>\n			</ul>\n		</div>\n\n	<button class = \"fightButton\">Press to Fight!!</button>\n	</div>\n</div>\n";
},"useData":true});
this["JST"]["fight-screen"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<header class=\"fight-header\">\n	<div class=\"villain-info\">\n		<h3 class=\"villain-name\">Villain HP</h3>\n		<div class=\"health-red villain\">\n			<div class=\"health-green villain\"></div>\n		</div>\n		<div class=\"magic-purple-villain\">MP</div>\n	</div>\n	<div class=\"hero-info\">\n		<h3 class=\"hero-name\">Hero HP</h3>\n		<div class=\"health-red hero\">\n			<div class=\"health-green hero\"></div>\n		</div>\n		<div class=\"magic-purple-hero\">MP</div>\n	</div>\n	<img src=\"\" alt=\"\" class=\"logo\">\n</header>\n\n<section class=\"fight-content\">\n	<div class=\"villain-img\">\n		<h3 class=\"damage\"></h3>\n		<img class=\"img-villain\" src=\"\" alt=\"\">\n	</div>\n	<div class=\"hero-img\">\n		<h3 class=\"damage\"></h3>\n		<img class=\"img-hero\" src=\"\" alt=\"\">\n	</div>\n\n	<button class=\"show-footer\">Show</button>\n</section>\n\n<footer class=\"fight-status\">\n	<h2 class=\"instructions\">Instructions:</h2>\n	<p class=\"instructions\">SPACE: Basic Attack</p>\n	<p class=\"instructions\">X: Magic Attack</p>\n	<p class=\"instructions\">Inventory Items (1 of each): 1) Healing Potion 2) Bomb 3) Double-Strike!</p>\n	<h2 class=\"villain-turn\">"
    + this.escapeExpression(((helper = (helper = helpers['villain-name'] || (depth0 != null ? depth0['villain-name'] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"villain-name","hash":{},"data":data}) : helper)))
    + "Villain's turn!</h2>\n	<button class=\"hide-footer\">Hide</button>\n</footer>";
},"useData":true});
var user_bot = [

{
	user : "hello",
	bot : "hey"
},
{
	user : "hi",
	bot : "လီးဟိုင်း"
},
{
	user : "how are you",
	bot : "I'm fine, and you?"
},
{
	user : "လီး",
	bot : "မိုက်ရိုင်းလှချည်လား သူတောင်းစား"
},
{
	user : "fuck you",
	bot : "Oh! you're rude, FUCK YOU!"
},
{
	user : "ဘာလုပ်နေလဲ",
	bot : "ဘာမှမလုပ်ပါဘူး ဒီလိုပါပဲ"
},
{
	user : "နေကောင်းလား",
	bot : "ကိုဗစ်ဖြစ်နေတယ်"
},
{
	user : "စိတ်ညစ်တယ်",
	bot : "ဘာမှညစ်မနေနဲ့ ပျော်ပျော်သာနေ ဒါမှမဟုတ် ဆွဲကြိုးချသေ"
},
{
	user : "ဟိုင်း",
	bot : "ဟေး မဂ်လာပါ"
},
{
	user : "အေးမြတ်သူ",
	bot : "ကောင်းစည်သူရဲ့မယားကိုပြောတာလား"
},
{
	user : "အဆင်ပြေလား",
	bot : "ဘာလုပ်မလို့လဲ မင်းစောက်ပူလား"
},
{
	user : "ကောင်းစည်သူ",
	bot : "စောင်အက်ဖေကောင်လား အဲ့ကောင် လီးကောင်"
},
{
	user : "ဘူလီ",
	bot : "လီးဘူလီလား အဲ့ကောင်ကဖင်ခံကောင်ကြီး"
},
{
	user : "ကျော်စွာဝင်း",
	bot : "LCCIကဆရာလား ဒါမှမဟုတ် ရပ်ကွက်ထဲက ခပ်ဝဝမဲမဲ မုဒိန်းကောင်လား"
},
{
	user : "lee",
	bot : "South Foke!"
}
];

var chat_text = document.getElementsByClassName("chat_text")[0];
var textbox = document.getElementsByClassName("textbox")[0];

/* This is sendbtn function   */
const send_click = () =>{
	if(textbox.value.length >0){
	var usertextdiv = document.createElement("div");
	usertextdiv.setAttribute("class","usertextdiv");
	var usertext = document.createElement("div");
	usertext.setAttribute("class","usertext");
	usertextdiv.appendChild(usertext);
	usertext.textContent = textbox.value;
	chat_text.appendChild(usertextdiv);
	var textboxvalue = textbox.value;
	textbox.value= "";

	var bottextdiv = document.createElement("div");
	bottextdiv.setAttribute("class","bottextdiv");
	var bottext = document.createElement("div");
	bottext.setAttribute("class","bottext");
	bottextdiv.appendChild(bottext);
	bottext.innerHTML = "<div class='dot3'><div class='fdot'>.</div><div class='sdot'>.</div><div class='tdot'>.</div></div>";
	chat_text.appendChild(bottextdiv);
	setTimeout(()=>{
		user_bot.forEach((node)=>{
			if(node.user.toLowerCase() === textboxvalue.toLowerCase()){
				return bottext.innerHTML = node.bot;
			}
		});
	},1500);


	usertext.style.animation = "";
	bottext.style.animation = "";
	setTimeout(()=>{
		usertext.style.animation = "popuptext .5s ease forwards";
		bottext.style.animation = "popuptext .5s ease forwards .5s";
	},50);
}
}

/* This is enterkey function   */
const key_click = (event) =>{
	if(event.which === 13 && textbox.value.length >0){
	var usertextdiv = document.createElement("div");
	usertextdiv.setAttribute("class","usertextdiv");
	var usertext = document.createElement("div");
	usertext.setAttribute("class","usertext");
	usertextdiv.appendChild(usertext);
	usertext.textContent = textbox.value;
	chat_text.appendChild(usertextdiv);
	var textboxvalue = textbox.value;
	textbox.value= "";

	var bottextdiv = document.createElement("div");
	bottextdiv.setAttribute("class","bottextdiv");
	var bottext = document.createElement("div");
	bottext.setAttribute("class","bottext");
	bottextdiv.appendChild(bottext);
	bottext.innerHTML = "<div class='dot3'><div class='fdot'>.</div><div class='sdot'>.</div><div class='tdot'>.</div></div>";
	chat_text.appendChild(bottextdiv);
	setTimeout(()=>{
		user_bot.forEach((node)=>{
			if(node.user.toLowerCase() === textboxvalue.toLowerCase()){
				return bottext.innerHTML = node.bot;
			}
		});
	},1500);
	usertext.style.animation = "";
	bottext.style.animation = "";
	setTimeout(()=>{
		usertext.style.animation = "popuptext .5s ease forwards";
		bottext.style.animation = "popuptext .5s ease forwards .5s";
	},50);
}
}

textbox.addEventListener("keypress",key_click);






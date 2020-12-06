// let Numofmil;
// let Confidence;
let name,fam,work;
let RaName = ['Filip','Pit','Dolores','William','Boris','Mary','Tomas','Lary'];//Random Name
let RaFam =  ['Toti','Dosy','Dores','Varmi','Glazgo','Miller','Sinossu'];//Random Famile Name
let RaWork = ['Военный','Юрист','Охраник','Директор','Циркач','Министр','Бомж'];//Random worked
let plusMain=1, plusOpposition=1;
let p0,p1,p2,p3,p4,p5;
let partysNam = [p0,p1,p2,p3,p4,p5];

let monPar=800,libPar=230,demPar=169,natPar=1000,grnPar=200,socPar=400;
let nLMonPar,nLLibPar,nLDemPar,nLNatPar,nLGrnPar,nLSocPar,/**/fNLMonPar,fNLLibPar,fNLDemPar,fNLNatPar,fNLGrnPar,fNLSocPar,/**/wLMonPar,wLLibPar,wLDemPar,wLLNatPar,wLGrnPar,wLSocPar;
let firstCrdntPar,secCrdntPar,thirdCrdntPar,fourthCrdntPar,fifthCrdntPar,sixthCrdntPar
let colorPar = ["rgb(98, 1, 253)",'rgb(190, 151, 25)','rgb(35, 171, 250)','rgb(0, 4, 255)','rgb(36, 214, 19)',"rgb(221, 17, 17)"];
//let politicaPar = ["monarchist","liberal","democratic","nationalist","green","socialist"];
let namLeadsPar =  [nLMonPar,nLLibPar,nLDemPar,nLNatPar,nLGrnPar,nLSocPar];
let fNamLeadsPar = [fNLMonPar,fNLLibPar,fNLDemPar,fNLNatPar,fNLGrnPar,fNLSocPar];
let workLeadsPar = [wLMonPar,wLLibPar,wLDemPar,wLLNatPar,wLGrnPar,wLSocPar];
let polPar = [monPar,libPar,demPar,natPar,grnPar,socPar];
const Par = [colorPar,namLeadsPar,fNamLeadsPar,workLeadsPar,/*politicaPar*/polPar]

let monPop=800,libPop=230,demPop=169,natPop=1000,grnPop=200,socPop=400;
let nLMonPop,nLLibPop,nLDemPop,nLNatPop,nLGrnPop,nLSocPop,/**/fNLMonPop,fNLLibPop,fNLDemPop,fNLNatPop,fNLGrnPop,fNLSocPop,/**/wLMonPop,wLLibPop,wLDemPop,wLLNatPop,wLGrnPop,wLSocPop;
let firstCrdntPop,secCrdntPop,thirdCrdntPop,fourthCrdntPop,fifthCrdntPop,sixthCrdntPop
let colorPop = ["rgb(98, 1, 253)",'rgb(190, 151, 25)','rgb(35, 171, 250)','rgb(0, 4, 255)','rgb(36, 214, 19)',"rgb(221, 17, 17)"];
let politicaPop = ["monarchist","liberal","democratic","nationalist","green","socialist"];
let namLeadsPop =  [nLMonPop,nLLibPop,nLDemPop,nLNatPop,nLGrnPop,nLSocPop];
let fNamLeadsPop = [fNLMonPop,fNLLibPop,fNLDemPop,fNLNatPop,fNLGrnPop,fNLSocPop];
let workLeadsPop = [wLMonPop,wLLibPop,wLDemPop,wLLNatPop,wLGrnPop,wLSocPop];
let polPop = [monPop,libPop,demPop,natPop,grnPop,socPop];
const Pop = [colorPop,namLeadsPop,fNamLeadsPop,workLeadsPop,politicaPop,polPop]

let bluBlood = `<img class="feature" id="feature1_leader_socialist1" src="https://cdn.streamelements.com/uploads/40c4495d-37f9-46dc-9598-8e977f20982b.jpg"></img>`;
let popular = `<img class="feature" id="feature1_leader_socialist1" src="https://clipart-best.com/img/star/star-clip-art-2.png"></img>`;
let stupid = `<img class="feature" id="feature1_leader_socialist1" src="https://caricatura.ru/gf-img/1058091/img-0.__GF_800x.jpeg"></img>`;
let angry = `<img class="feature" id="feature1_leader_socialist1" src="https://i.pinimg.com/originals/58/05/87/5805877a4838014815f6217b53fba568.jpg"></img>`;
let lazy = `<img class="feature" id="feature1_leader_socialist1" src="https://www.clearviewip.com/app/uploads/2016/11/Sloth.jpg"></img>`;
let feature = [bluBlood,popular,stupid,angry,lazy];

const mains = document.querySelector('#mains');
const budget = document.querySelector('#budget');
const pi = Math.PI;
const xCan = 100;
const yCan = 100;
const rdsCan = 95;

let openPar = true
let save
let save1
let save2
function sortPar(){
	save1 =polPar[0]
	save2 =polPar[1]
	polPar[0]*plusMain
	polPar[1]*plusOpposition
	for(i=0; i < polPar.length; i++){
		if(polPar[i] < polPar[i+1]){
			for(k=0; k < Par.length; k++){
				save = Par[k][i];
				Par[k][i] = Par[k][i+1];
				Par[k][i+1] = save;
			}
			sortPar();
		}
	}
	// polPar[0]=save1
	// polPar[1]=save2
}
function sortPop(){
	for(i=0; i < polPop.length; i++){
		if(polPop[i] < polPop[i+1]){
			for(k=0; k < Pop.length; k++){
				save = Pop[k][i];
				Pop[k][i] = Pop[k][i+1];
				Pop[k][i+1] = save;
				polPop[0] /=plusMain
				polPop[1] /=plusOpposition
			}
			sortPop();
		}
	}
}
function canPar(){
	document.querySelector('#parlament').innerHTML += `<canvas  class="canvas" id="canvas_parlament" width='300px' height='151px'></canvas>`;
	const caPa = document.querySelector('#canvas_parlament');
	const ctxPa = caPa.getContext('2d');

	sumPar = (polPop[0]* plusMain) + (polPop[1] * plusOpposition) + polPop[2] + polPop[3] + polPop[4] + polPop[5];
	firstCrdntPar  = pi*(2*(1-((polPop[0] * plusMain) / sumPar)));
	secCrdntPar    = pi*(2*(1-(polPop[0] * plusMain + polPop[1] * plusOpposition) / sumPar));
	thirdCrdntPar  = pi*(2*(1-(polPop[0] * plusMain + polPop[1] * plusOpposition + polPop[2]) / sumPar));
	fourthCrdntPar = pi*(2*(1-(polPop[0] * plusMain + polPop[1] * plusOpposition + polPop[2] + polPop[3]) / sumPar));
	fifthCrdntPar  = pi*(2*(1-(polPop[0] * plusMain + polPop[1] * plusOpposition + polPop[2] + polPop[3] + polPop[4]) / sumPar));
	sixthCrdntPar  = 0;//pi*(2*(1-(polPop[0] * plusMain + polPop[1] * plusOpposition + polPop[2] + polPop[3] + polPop[4] + polPop[5]) / sumPar));

	// console.log('All = '+sumPop)
	// console.log('politicaPop = '+politicaPop)
	// console.log('polPop = '+polPop)


	const crdntPar = [0,firstCrdntPar,secCrdntPar,thirdCrdntPar,fourthCrdntPar,fifthCrdntPar,sixthCrdntPar,0];

	for(i=0; i<crdntPar.length; i++){
		ctxPa.beginPath();
		ctxPa.strokeStyle = colorPop[i];
		ctxPa.fillStyle = colorPop[i];
		ctxPa.moveTo(xCan,yCan);
		ctxPa.arc(xCan,yCan,rdsCan,crdntPar[i],crdntPar[i+1],true);
		ctxPa.lineTo(xCan,yCan);
		ctxPa.fill();
	}
}
function canPop(){
	document.querySelector('#popularity').innerHTML += `<canvas class="canvas" id="canvas_popularity" width='400px' height='200px'></canvas>`;
	const caPo = document.querySelector('#canvas_popularity');
	const ctxPo = caPo.getContext('2d');

	sumPop = (polPop[0]* plusMain) + (polPop[1] * plusOpposition) + polPop[2] + polPop[3] + polPop[4] + polPop[5];
	firstCrdntPop  = pi*(2*(1-((polPop[0] * plusMain) / sumPop)));
	secCrdntPop    = pi*(2*(1-(polPop[0] * plusMain + polPop[1] * plusOpposition) / sumPop));
	thirdCrdntPop  = pi*(2*(1-(polPop[0] * plusMain + polPop[1] * plusOpposition + polPop[2]) / sumPop));
	fourthCrdntPop = pi*(2*(1-(polPop[0] * plusMain + polPop[1] * plusOpposition + polPop[2] + polPop[3]) / sumPop));
	fifthCrdntPop  = pi*(2*(1-(polPop[0] * plusMain + polPop[1] * plusOpposition + polPop[2] + polPop[3] + polPop[4]) / sumPop));
	sixthCrdntPop  = 0;
	crdntPop = [0,firstCrdntPop,secCrdntPop,thirdCrdntPop,fourthCrdntPop,fifthCrdntPop,sixthCrdntPop,0];

	for(i=0; i < crdntPop.length; i++){
		ctxPo.beginPath();
		ctxPo.strokeStyle = colorPop[i]; 
		ctxPo.fillStyle = colorPop[i];
		ctxPo.moveTo(xCan,yCan);
		ctxPo.arc(xCan,yCan,rdsCan,crdntPop[i],crdntPop[i+1],true);
		ctxPo.lineTo(xCan,yCan);
		ctxPo.fill();
	}
}

function NewHum(){
	name = RaName[Math.floor(Math.random() * RaName.length)];
	fam  = RaFam[Math.floor(Math.random() * RaFam.length)];
	work = RaWork[Math.floor(Math.random() * RaWork.length)];
}

document.querySelector('#oo').onclick = () => minsN1();
document.querySelector('#os').onclick = () => minsN1();
document.querySelector('#ot').onclick = () => minsN1();


document.querySelector('#mains_botton').onclick = () =>{
	budget.innerHTML = '';

	mains.innerHTML =  `<header class="font" id="State_policy">Абсолютная монархия</header>`;
	mains.innerHTML += `<div    class="font" id="president">Король</div>`;
	mains.innerHTML += `<div    class="font" id="premier">Премьер</div>`;
	//mains.innerHTML += `<div    class="font" id="parlament">Парламент</div>`;
	mains.innerHTML += `<div    class="font" id="popularity">Популярность<div>`;
	mains.innerHTML += `<div    class="font" id="partys">Партии</div>`;

	polPop[0]*=plusMain
	polPop[1]*=plusOpposition
	sortPop()
	canPop()
	polPop[0]/=plusMain
	polPop[1]/=plusOpposition
	console.log('All = '+sumPop)
	//console.log('politicaPar = '+politicaPar)
	console.log('politicaPop = '+politicaPop)
	console.log('polPop = '+polPop)

	const partys = document.querySelector('#partys');
	for(i=0;i<7;i++)partys.innerHTML += `<div class="party party${i}"></div>`;	
	//sortPar()
	//canPar();
	openPar = false
	plusMain=1;
	plusOpposition=1;



	// document.querySelector('#features_leader_monarchist').innerHTML += `<img class="feature " id="feature1_leader_monarchist1" src="https://cdn.streamelements.com/uploads/40c4495d-37f9-46dc-9598-8e977f20982b.jpg"></img>`;
	// document.querySelector('#features_leader_monarchist').innerHTML += `<img class="feature " id="feature1_leader_monarchist2" src="https://cdn.streamelements.com/uploads/40c4495d-37f9-46dc-9598-8e977f20982b.jpg"></img>`;
	// document.querySelector('#features_leader_monarchist').innerHTML += `<img class="feature " id="feature1_leader_monarchist3" src="https://cdn.streamelements.com/uploads/40c4495d-37f9-46dc-9598-8e977f20982b.jpg"></img>`;

	// document.querySelector('#features_leader_liberal').innerHTML += `<img class="feature " id="feature1_leader_liberal1" src="https://cdn.streamelements.com/uploads/40c4495d-37f9-46dc-9598-8e977f20982b.jpg"></img>`;
			
	// document.querySelector('#features_leader_democratic').innerHTML += `<img class="feature " id="feature1_leader_democraticl" src="https://cdn.streamelements.com/uploads/40c4495d-37f9-46dc-9598-8e977f20982b.jpg"></img>`;

	// document.querySelector('#features_leader_nationalist').innerHTML += `<img class="feature " id="feature1_leader_nationalist1" src="https://cdn.streamelements.com/uploads/40c4495d-37f9-46dc-9598-8e977f20982b.jpg"></img>`;

	// document.querySelector('#features_leader_green').innerHTML += `<img class="feature " id="feature1_leader_green1" src="https://cdn.streamelements.com/uploads/40c4495d-37f9-46dc-9598-8e977f20982b.jpg"></img>`;

	// document.querySelector('#features_leader_socialist').innerHTML += `<img class="feature " id="feature1_leader_socialist1" src="https://cdn.streamelements.com/uploads/40c4495d-37f9-46dc-9598-8e977f20982b.jpg"></img>`;
	//function keep(){localStorage.getItem()}

	for(i=0; i < politicaPop.length; i++){
		if (localStorage.getItem(`namLead_${politicaPop[i]}`)==null||localStorage.getItem(`fNamLead_${politicaPop[i]}`)==null||localStorage.getItem(`workLead_${politicaPop[i]}`)==null){
			NewHum();
			namLeadsPop[i]  = name;
			fNamLeadsPop[i] = fam;
			workLeadsPop[i] = work;
		}
		else{
			namLeadsPop[i]  = localStorage.getItem(`namLead_${politicaPop[i]}`);
			fNamLeadsPop[i] = localStorage.getItem(`fNamLead_${politicaPop[i]}`);
			workLeadsPop[i] = localStorage.getItem(`workLead_${politicaPop[i]}`);
		}
		partysNam[i] = document.querySelector(`.party${i+1}`);
		partysNam[i].innerHTML += `<div  class="name_party"  id="name_party_${politicaPop[i]}styly" style="background-color:${colorPop[i]}">${politicaPop[i]}</div>`;
		partysNam[i].innerHTML += `<div  class="photo"       id="photo_leader_${politicaPop[i]}">                                                         </div>`;
		partysNam[i].innerHTML += `<span class="name"        id="name_leader_${politicaPop[i]}">                                           ${namLeadsPop[i]}</span>`;
		partysNam[i].innerHTML += `<span class="family_name" id="family_name_leader_${politicaPop[i]}">                                   ${fNamLeadsPop[i]}</span>`;
		partysNam[i].innerHTML += `<div  class="worked"      id="worked_leader_${politicaPop[i]}">                                         ${workLeadsPop[i]}</div>`;
		partysNam[i].innerHTML += `<div  class="features"    id="features_leader_${politicaPop[i]}">                                                      </div>`;
		localStorage.setItem(`namLead_${politicaPop[i]}`,namLeadsPop[i]);
		localStorage.setItem(`fNamLead_${politicaPop[i]}`,fNamLeadsPop[i]);
		localStorage.setItem(`workLead_${politicaPop[i]}`,workLeadsPop[i]);
	}

	const president = document.querySelector('#president');
	president.style.backgroundColor = colorPop[0]
	president.innerHTML += `<div  class="photo"       id="photo_president">               		  </div>`;
	president.innerHTML += `<span class="name"        id="name_president">         ${namLeadsPop[0]}</span>`;
	president.innerHTML += `<span class="family_name" id="family_name_president"> ${fNamLeadsPop[0]}</span>`;
	president.innerHTML += `<div  class="worked"      id="worked_leader_president">${workLeadsPop[0]}</div>`;
	president.innerHTML += `<div  class="features"    id="features_leader_president">			  </div>`;

	const premier = document.querySelector('#premier');
	if(firstCrdntPop/pi>1){
		premier.style.backgroundColor = colorPop[1];
		premier.innerHTML += `<div  class="photo"       id="photo_premier">               		  </div>`;
		premier.innerHTML += `<span class="name"        id="name_premier">         ${namLeadsPop[1]}</span>`;
		premier.innerHTML += `<span class="family_name" id="family_name_premier"> ${fNamLeadsPop[1]}</span>`;
		premier.innerHTML += `<div  class="worked"      id="worked_leader_premier">${workLeadsPop[1]}</div>`;
		premier.innerHTML += `<div  class="features"    id="features_leader_premier">			  </div>`;
	}
	else{
		premier.innerHTML += `<div  class="photo" id="photo_premier"></div>`;
		premier.innerHTML += `<span class="name"id="name__premier">Запрещён</span>`;
		premier.innerHTML += `<span class="family_name"id="family_name_premier"></span>`;
	}
}


document.querySelector('#budget_botton').onclick = () =>{
	mains.innerHTML = '';
	budget.innerHTML += `<div class="tax font">Доход</div>`;
	budget.innerHTML += `<div class="tax" id="poor_tax"></div>`;
	budget.innerHTML += `<div class="tax" id="middle_tax"></div>`;
	budget.innerHTML += `<div class="tax" id="rich_tax"></div>`;
	budget.innerHTML += `<div class="tax" id="duties_tax"></div>`;
	budget.innerHTML += `<div class="spending font">Затраты</div>`;
	budget.innerHTML += `<div class="spending" id="education_spending"></div>`;
	budget.innerHTML += `<div class="spending" id="control_spending"></div>`;
	budget.innerHTML += `<div class="spending" id="social_spending"></div>`;
	budget.innerHTML += `<div class="spending" id="military_spending"></div>`;
	budget.innerHTML += `<span class="font" id="balance_text">Примерное сальдо:<span id="balance">0</span></span>`;

	const poorTax = document.querySelector('#poor_tax');
	poorTax.innerHTML += `<span  class="font">Налог на бедных</span>`;
	poorTax.innerHTML += `<input class="percent" id="percent_poor_tax" type="range">`;
	poorTax.innerHTML += `<div   class="income"  id="income_poor_tax">50%</div>`;
	const midTax = document.querySelector('#middle_tax');
	midTax.innerHTML += `<span  class="font">Налог на бедных</span>`;
	midTax.innerHTML += `<input class="percent" id="percent_rich_tax" type="range">`;
	midTax.innerHTML += `<div   class="income"  id="income_rich_tax">50%</div>`;
	const dutTax = document.querySelector('#duties_tax');
	dutTax.innerHTML += `<span  class="font">Пошлины</span>`;
	dutTax.innerHTML += `<input class="percent" id="percent_duties_tax" type="range">`;
	dutTax.innerHTML += `<div   class="income"  id="income_duties_tax">50%</div>`;
	const edSpend = document.querySelector('#education_spending');
	edSpend.innerHTML += `<span  class="font">Затраты на образование</span>`;
	edSpend.innerHTML += `<input class="percent" id="percent_education_spending" type="range">`
	edSpend.innerHTML += `<div   class="amount"  id="amount_education_spending">50%</div>`;
	const cntrlSpend = document.querySelector('#control_spending');
	cntrlSpend.innerHTML += `<span  class="font">Затраты на управление</span>`;
	cntrlSpend.innerHTML += `<input class="percent" id="percent_control_spending" type="range">`;
	cntrlSpend.innerHTML += `<div   class="amount"  id="amount_control_spending">50%</div>`;
	const socSpend = document.querySelector('#social_spending');
	socSpend.innerHTML += `<span  class="font">Затраты на социальную сферу</span>`;
	socSpend.innerHTML += `<input class="percent" id="percent_social_spending" type="range">`;
	socSpend.innerHTML += `<div   class="amount"  id="amount_social_spending">50%</div>`;
	const milSpend = document.querySelector('#military_spending');
	milSpend.innerHTML += `<span  class="font">Затраты на оборону</span>`;
	milSpend.innerHTML += `<input class="percent" id="percent_military_spending" type="range">`;
	milSpend.innerHTML += `<div   class="amount"  id="amount_military_spending">50%</div>`;
}

// document.querySelector('#so').onclick = () => minsN2();
// document.querySelector('#ss').onclick = () => minsN2();
// document.querySelector('#st').onclick = () => minsN2();
// document.querySelector('#to').onclick = () => minsN3();
// document.querySelector('#ts').onclick = () => minsN3();
// document.querySelector('#tt').onclick = () => minsN3();
function test(){		
	const newF = document.querySelector('#new_first');
	newF.innerHTML += `<div class="new first"></div>`;
	newF.style.width = 700+'px';
	newF.style.height = 'auto';
	newF.style.backgroundColor = '#D5E29D';
	const newFCl = document.querySelector('.new.first')
	newFCl.innerHTML += `<header class="header">Биржевой центр</header>`
	newFCl.innerHTML += `<div class="img"></div>`
	newFCl.innerHTML += `<div class="Lorem first">
		Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Sunt dolor ipsam doloribus quas. Rerum eaque ex dignissimos,
		minima perspiciatis in eligendi quisquam culpa, sed,
		doloremque blanditiis distinctio sunt deleniti placeat?
		Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Sunt dolor ipsam doloribus quas. Rerum eaque ex dignissimos,
		minima perspiciatis in eligendi quisquam culpa, sed,
		doloremque blanditiis distinctio sunt deleniti placeat?
	</div>`;
	newFCl.innerHTML += `<div class="resolution first" id="oo">Поддержать правящую партию</div>`;
	newFCl.innerHTML += `<div class="resolution second" id="os">Поддержать оппозиционную партию</div>`;
	newFCl.innerHTML += `<div class="resolution third" id="ot">Поддержать слабую партию</div>`;
	document.querySelector('#oo').onclick = () => {
		minsN1();
		polPop[0]+=1000;
		sortPop();
	}
	document.querySelector('#os').onclick = () => {
		minsN1();
		polPop[1]+=6000;
		sortPop();
	}
	document.querySelector('#ot').onclick = () => {
		minsN1();
		polPop[5]+=3000;
		sortPop();
	}
	document.querySelector('#button_for_new_move').onclick = null;
}
function test2(){		
	const newF = document.querySelector('#new_first');
	newF.innerHTML += `<div class="new first"></div>`;
	newF.style.width = 700+'px';
	newF.style.height = 'auto';
	newF.style.backgroundColor = '#D5E29D';
	const newFCl = document.querySelector('.new.first')
	newFCl.innerHTML += `<header class="header">Биржевой центр</header>`
	newFCl.innerHTML += `<div class="img"></div>`
	newFCl.innerHTML += `<div class="Lorem first">
		Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Sunt dolor ipsam doloribus quas. Rerum eaque ex dignissimos,
		minima perspiciatis in eligendi quisquam culpa, sed,
		doloremque blanditiis distinctio sunt deleniti placeat?
		Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Sunt dolor ipsam doloribus quas. Rerum eaque ex dignissimos,
		minima perspiciatis in eligendi quisquam culpa, sed,
		doloremque blanditiis distinctio sunt deleniti placeat?
	</div>`;
	newFCl.innerHTML += `<div class="resolution first" id="oo">Провести выборы!</div>`;
	newFCl.innerHTML += `<div class="resolution second" id="os">Оппозиция должна выйграть!</div>`;
	newFCl.innerHTML += `<div class="resolution third" id="ot">Пусть все останется как есть...</div>`;
	document.querySelector('#oo').onclick = () => {
		minsN1();
		openPar = true
	}
	document.querySelector('#os').onclick = () => {
		minsN1();
		plusOpposition=1.2;
		openPar = true
	}
	document.querySelector('#ot').onclick = () => {
		minsN1();
		plusMain=1.5;
		openPar = true
	}
	document.querySelector('#button_for_new_move').onclick = null;
}




minsN1 =()=>{
	const newF = document.querySelector('#new_first');
	newF.innerHTML = null;
	newF.style.width = 0;
	newF.style.height = 0;
	function menuShow(){document.querySelector('#menu').style.left = 0;}
	function menuHide(){document.querySelector('#menu').style.left = '-260px';}
	document.querySelector('#button_for_open_menu').onclick =()=> menuShow();
	document.onkeydown =(event)=>{
		if(event.key==='m')menuShow();
		if(event.key==='Escape')menuHide();
	}
	document.querySelector('#button_for_new_move').onclick =function(){
		menuHide();
		if( Math.floor(Math.random()*10 > 5) )test()
		else test2()


		this.innerHTML++;
		budget.innerHTML = '';
		mains.innerHTML = ``;
	}
}
minsN2 =() => {
	const ns = document.querySelector('#new_second')
	ns.innerHTML = null;
	ns.style.width = 0;
	ns.style.height = 0;
}
minsN3 =() => {
	const nt = document.querySelector('#new_second')
	nt.innerHTML = null;
	nt.style.width = 0;
	nt.style.height = 0;
}

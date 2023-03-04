function showall(){
	a = document.getElementById('showall').style.display = "block";
	b = document.getElementById('live-show').style.display = "none";
	c = document.getElementById('finished1').style.display = "none";
	d = document.getElementById('upcom').style.display = 'none';
}

function showlive(){
	b = document.getElementById('showall').style.display = "none";
	c = document.getElementById('finished1').style.display = "none";
	d = document.getElementById('upcom').style.display = "none";
	a = document.getElementById('live-show').style.display = "block"
	

	const options4 = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '8508ffc91emsh1ac130ac6c11b95p1a4a71jsnb0fecf0e4fc9',
			'X-RapidAPI-Host': 'flashlive-sports.p.rapidapi.com'
		}
	};
	
	fetch('https://flashlive-sports.p.rapidapi.com/v1/events/live-list?sport_id=1&locale=en_INT&timezone=-4', options4)
		.then(response => response.json())
		.then(response => {
			if (response["DATA"].length == undefined){
				el = document.getElementById('card');
				el.style.display = "block"
				// console.log(response["DATA"].length)
			}
			else if(response["DATA"].length >= 1){
				for (let l =0;l<response["DATA"].length;l++){
					if (response["DATA"][l]["EVENTS"].length == 1 ){
						maindiv44 = document.getElementById('footballlive');
						firstdiv44 = document.createElement('div')
						firstdiv44.classList.add('container', 'w-100', 'mt-3','pb-1')
						maindiv44.appendChild(firstdiv44)
						seconddiv44 = document.createElement('div');
						seconddiv44.classList.add('container', 'w-100' ,'rounded','v','p-1','font-weight-light')
						firstdiv44.append(seconddiv44)
						headingofevent44 = document.createElement('p')
						headingofevent44.classList.add('fs-2', 'm-1', 'title');
						headingofevent44.innerHTML = ` ${response["DATA"][l]["NAME"]}` 
						seconddiv44.append(headingofevent44)
						thirddiv44 = document.createElement('div');
						thirddiv44.classList.add('container', 'mt-0', 'w-100','pb-0','rounded', 'color', 'text-white','h','border-bottom')
						firstdiv44.append(thirddiv44)
						grid_div44 = document.createElement('div')
						grid_div44.classList.add('grid-container');
						thirddiv44.append(grid_div44);
						ongoingtext44 = document.createElement('p');
						ongoingtext44.classList.add('p', 'rounded', 'text-white', 'pl-1','mr-5','pt-2','mt-3','item-1','small')
						let stage44 = response["DATA"][l]["EVENTS"][0]["STAGE"]
						
						let home_score44  = parseInt(response["DATA"][l]["EVENTS"][0]["HOME_SCORE_CURRENT"])
						let away_score44 = parseInt(response["DATA"][l]["EVENTS"][0]["AWAY_SCORE_CURRENT"])
						if(stage44 == "FIRST_HALF"){
							ongoingtext44.innerText= `FIRST HALF`
						}
						else if(stage44 == "SECOND_HALF"){
							ongoingtext44.innerText = `SECOND HALF`
						}
						else if(stage44 == "HALF_TIME"){
							ongoingtext44.innerText = `HALF TIME`
						}
						grid_div44.appendChild(ongoingtext44)
						first_team_name44 = document.createElement('p');
						first_team_name44.classList.add('d-block', 'text-light', 'rounded', 'text-left', 'p-0', 'small','mt-3', 'mb-0', 'item-2')
						first_team_name44.innerHTML = `<img height = "25" width="25" src = ${response["DATA"][l]["EVENTS"][0]["HOME_IMAGES"][0]}> <span class="ml-1">${response["DATA"][l]["EVENTS"][0]["HOME_PARTICIPANT_NAME_ONE"]}</span>`
						grid_div44.append(first_team_name44);
						away_team_name44 = document.createElement('p')
						away_team_name44.classList.add('item-3', 'mt-1', 'text-light', 'rounded', 'text-left', 'small',  'w-50');
						away_team_name44.innerHTML = `<img height = "25" width="25" src = ${response["DATA"][l]["EVENTS"][0]["AWAY_IMAGES"][0]}> <span class="ml-1">${response["DATA"][l]["EVENTS"][0]["AWAY_PARTICIPANT_NAME_ONE"]}</span>`
						grid_div44.append(away_team_name44)
						home_scorediv44 = document.createElement('div');
						home_scorediv44.classList.add('item-4', 'col', 'first_team_score')
						grid_div44.append(home_scorediv44)
						home_score_data44 = document.createElement('p')
						home_score_data44.classList.add('mt-3','ml-3','small')
						home_score_data44.innerHTML = `<strong>${home_score44}</strong>`
						home_scorediv44.append(home_score_data44)
						away_team_scorediv44 = document.createElement('div');
						away_team_scorediv44.classList.add('col', 'away_team_score','small','mt-1','ml-3','d-inline-block')
						grid_div44.append(away_team_scorediv44)
						away_team_data44 =  document.createElement('span')
						away_team_data44.classList.add('d-inline')
						score44 = document.createElement('p');
						score44.classList.add('mt-1');
						score44.innerHTML = `<strong>${away_score44}</strong>`
						away_team_scorediv44.append(score44)
						
					}
				}
				

			}
			// console.log(response["DATA"].length)
		})
		.catch(err => console.error(err));
}
function redirect(){
	up = document.getElementById('upcom').click()
}

function showleagues(){
	
	const options6 = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '8508ffc91emsh1ac130ac6c11b95p1a4a71jsnb0fecf0e4fc9',
			'X-RapidAPI-Host': 'flashlive-sports.p.rapidapi.com'
		}
	};
	fetch('https://flashlive-sports.p.rapidapi.com/v1/tournaments/list?locale=en_INT&sport_id=1', options6)
		.then(my_league => my_league.json())
		.then(my_league => {
			league_namev = ["Ligue 1","Premier League","Bundesliga","Serie A","Eredivisie","Laliga","Euro","Champions League","Europa League","Europa Conference"]
			document.getElementById('ref').insertAdjacentHTML('beforebegin','<div class="position-absolute container rounder text-white w-15 pb-0" id="my"><h5 class="border-bottom text_color">MY LEAGUES</h5><div>')
			for(let leagues = 0;leagues<10;leagues++){
					// if (a[leagues]["innerText"]==(my_league["DATA"][leagues]["LEAGUE_NAME"])){
					// }
					// else{
						my_league_div = document.getElementById("my")
						div_p = document.createElement('p');
						div_p.id = 'ka'
						div_p.classList.add('league_color','mb-2','h','rounded','pl-2','laa')
						div_p.innerHTML = `${league_namev[leagues]}`
						my_league_div.append(div_p)
					// }
				
			}
			d=  document.getElementById('my')
			cr = document.createElement('div')
			cr.classList.add('container','w-100','mt-4');
			cr.style.position = "sticky"
			daa = document.createElement('div')
			daa.classList.add('row','border','text-white')
			daa.style.height = "250px"
			cr.style.top = "50px"
			tt = document.createElement('h1');
			tt.innerText = 'Ad Here'
			d.append(cr)
			cr.append(daa)
			daa.append(tt)
		})
		.catch(err => console.error(err));

}
function sa(){};

function showfin(){
	sss = document.getElementById('live');
	a = document.getElementById('showall').style.display = "none"
	b = document.getElementById('live-show').style.display = "none";
	c = document.getElementById('finished1').style.display = "block";
	d = document.getElementById('upcom').style.display = "none";
	
	const options8 = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '8508ffc91emsh1ac130ac6c11b95p1a4a71jsnb0fecf0e4fc9',
			'X-RapidAPI-Host': 'flashlive-sports.p.rapidapi.com'
		}
	};
	
	fetch('https://flashlive-sports.p.rapidapi.com/v1/events/list?indent_days=-1&timezone=-4&sport_id=13&locale=en_INT', options8)
		.then(response => response.json())
		.then(response => {
			for (let m = 0; m<response["DATA"].length;m++){
				if (response["DATA"][m]["EVENTS"][0]["STAGE"] == "FINISHED"){
					maindiv5 = document.getElementById('footballlive');
					firstdiv5 = document.createElement('div')
					firstdiv5.classList.add('container', 'w-100', 'mt-3','pb-1')
					maindiv5.appendChild(firstdiv5)
					seconddiv5 = document.createElement('div');
					seconddiv5.classList.add('container', 'w-100' ,'rounded','v','p-1','font-weight-light')
					firstdiv5.append(seconddiv5)
					headingofevent5 = document.createElement('p')
					headingofevent5.classList.add('fs-2', 'm-1', 'title');
					headingofevent5.innerHTML = ` ${response["DATA"][m]["NAME"]}` 
					seconddiv5.append(headingofevent5)
					if (response["DATA"][m]["EVENTS"].length == 1 ){
						thirddiv5 = document.createElement('div');
						thirddiv5.classList.add('container', 'mt-0', 'w-100','pb-0','rounded', 'color', 'text-white','h','border-bottom')
						firstdiv5.append(thirddiv5)
						grid_div5 = document.createElement('div')
						grid_div5.classList.add('grid-container');
						thirddiv5.append(grid_div5);
						ongoingtext5 = document.createElement('p');
						ongoingtext5.classList.add('p', 'rounded', 'text-white', 'pl-1','mr-5','pt-2','mt-3','item-1','small')
						let stage5 = response["DATA"][m]["EVENTS"][0]["STAGE"]
						let wicket_home = parseInt(response["DATA"][m]["EVENTS"][0]["HOME_SCORE_PART_2_OVERS_OUTS_WICKETS"])
						let overs_home = parseInt(response["DATA"][m]["EVENTS"][0]["HOME_SCORE_PART_1_OVERS_OUTS_WICKETS"])
						let wickets_away = parseInt(response["DATA"][m]["EVENTS"][0]["AWAY_SCORE_PART_2_OVERS_OUTS_WICKETS"])
						let overs_away = parseInt(response["DATA"][m]["EVENTS"][0]["DP"])
						let home_score  = parseInt(response["DATA"][m]["EVENTS"][0]["HOME_SCORE_CURRENT"])
						let away_score = parseInt(response["DATA"][m]["EVENTS"][0]["AWAY_SCORE_CURRENT"])
						if (isNaN(wicket_home)){
							wicket_home = 0
						}
						if (isNaN(wickets_away)){
							wickets_away = 0
						}
						if (isNaN(overs_home)){
							overs_home = 0
						}
						if (isNaN(overs_away)){
							overs_away = 0
						}
						if (stage5 == "FINISHED"){
							ongoingtext5.innerText = `FINISHED!`
							
						}
						if (overs_home ==0){
							overs_home = "Test"
						} 
						if (overs_away == 0){
							overs_away = "Test"
						}
						grid_div5.appendChild(ongoingtext5)
						first_team_name5 = document.createElement('p');
						first_team_name5.classList.add('d-block', 'text-light', 'rounded', 'text-left', 'p-0', 'small','mt-3', 'mb-0', 'item-2')
						first_team_name5.innerHTML = `<img height = "25" width="25" src = ${response["DATA"][m]["EVENTS"][0]["HOME_IMAGES"][0]}> <span class="ml-1">${response["DATA"][m]["EVENTS"][0]["HOME_NAME"]}</span>`
						grid_div5.append(first_team_name5);
						away_team_name5 = document.createElement('p')
						away_team_name5.classList.add('item-3', 'mt-1', 'text-light', 'rounded', 'text-left', 'small',  'w-50');
						away_team_name5.innerHTML = `<img height = "25" width="25" src = ${response["DATA"][m]["EVENTS"][0]["AWAY_IMAGES"][0]}> <span class="ml-1">${response["DATA"][m]["EVENTS"][0]["AWAY_NAME"]}</span>`
						grid_div5.append(away_team_name5)
						home_scorediv5 = document.createElement('div');
						home_scorediv5.classList.add('item-4', 'col', 'first_team_score')
						grid_div5.append(home_scorediv5)
						home_score_data5 = document.createElement('p')
						home_score_data5.classList.add('mt-3','ml-3','small')
						home_score_data5.innerHTML = `<strong>${home_score}/${wicket_home}  (${overs_home})</strong>`
						home_scorediv5.append(home_score_data5)
						away_team_scorediv5 = document.createElement('div');
						away_team_scorediv5.classList.add('col', 'away_team_score','small','mt-1','ml-3','d-inline-block')
						grid_div5.append(away_team_scorediv5)
						away_team_data5 =  document.createElement('span')
						away_team_data5.classList.add('d-inline')
						score5 = document.createElement('p');
						score5.classList.add('mt-1');
						score5.innerHTML = `<strong>${away_score}/${wickets_away}  (${overs_away})</strong>`
						away_team_scorediv5.append(score5)
						live_sentence5 = document.createElement('p');
						live_sentence5.classList.add('pl-3', 'b', 'text-light', 'rounded','small')
						event_update5 = response["DATA"][m]["EVENTS"][0]["CRICKET_LIVE_SENTENCE"]
						live_sentence5.innerHTML=`${event_update5}`
						thirddiv5.append(live_sentence5)
				}
				else if(response["DATA"][m]["EVENTS"].length > 1){
					for (let events2 = 0; events2 < response["DATA"][m]["EVENTS"].length; events2++){
						if (response["DATA"][m]["EVENTS"][events2]["NAME"] == response["DATA"][m]["EVENTS"][events2]["NAME"]){
							thirddiv5 = document.createElement('div');
							thirddiv5.classList.add('container', 'mt-2', 'w-100','rounded', 'color', 'text-white','h','border-bottom')
						firstdiv5.append(thirddiv5)
						grid_div5 = document.createElement('div')
						grid_div5.classList.add('grid-container');
						thirddiv5.append(grid_div5);
						ongoingtext5 = document.createElement('p')
						ongoingtext5.classList.add('p', 'rounded', 'text-white', 'pl-1','mr-5','pt-2','mt-3','item-1')
						let stage5 = response["DATA"][m]["EVENTS"][events2]["STAGE"]
						let wicket_home2 = parseInt(response["DATA"][m]["EVENTS"][events2]["HOME_SCORE_PART_2_OVERS_OUTS_WICKETS"])
						let overs_home2 = parseInt(response["DATA"][m]["EVENTS"][events2]["HOME_SCORE_PART_1_OVERS_OUTS_WICKETS"])
						let wickets_away2 = parseInt(response["DATA"][m]["EVENTS"][events2]["AWAY_SCORE_PART_2_OVERS_OUTS_WICKETS"])
						let overs_away2 = parseInt(response["DATA"][m]["EVENTS"][events2]["DP"])
						let home_score2  = parseInt(response["DATA"][m]["EVENTS"][events2]["HOME_SCORE_CURRENT"])
						let away_score2 = parseInt(response["DATA"][m]["EVENTS"][events2]["AWAY_SCORE_CURRENT"])
						if (isNaN(wicket_home2)){
							wicket_home2 = 0
						}
						if (isNaN(wickets_away2)){
							wickets_away2 = 0
						}
						if (isNaN(overs_away2)){
							overs_away2 = 0
						}
						if (isNaN(overs_home2)){
							overs_home2 = 0
						}
						ongoingtext5.innerText = `${stage5}`
						grid_div5.appendChild(ongoingtext5)
						first_team_name5 = document.createElement('p');
						first_team_name5.classList.add('d-block', 'text-light', 'rounded', 'text-left', 'p-0', 'small','mt-3', 'mb-0', 'item-2')
						first_team_name5.innerHTML = `<img height = "25" width="25" src = ${response["DATA"][m]["EVENTS"][events2]["HOME_IMAGES"][0]}> <span class="ml-1">${response["DATA"][m]["EVENTS"][events2]["HOME_NAME"]}</span>`
						grid_div5.append(first_team_name5);
						away_team_name5 = document.createElement('p')
						away_team_name5.classList.add('item-3', 'mt-1', 'text-light', 'rounded', 'text-left', 'small',  'w-50');
						away_team_name5.innerHTML = `<img height = "25" width="25" src = ${response["DATA"][m]["EVENTS"][events2]["AWAY_IMAGES"][0]}> <span class="ml-1">${response["DATA"][m]["EVENTS"][events2]["AWAY_NAME"]}</span>`
						grid_div5.append(away_team_name5)
						home_score5 = document.createElement('div')
						home_score5.classList.add('item-4','col','first_team_score');
						grid_div5.append(home_score5)
						home_score_data5 = document.createElement('p')
						home_score_data5.classList.add('mt-3','ml-3','small')
						home_score_data5.innerHTML = `<strong>${home_score2}/${wicket_home2}  (${overs_home2})</strong>`
						home_score5.append(home_score_data5)
						away_team_score5 = document.createElement('div');
						away_team_score5.classList.add('col', 'away_team_score','small','mt-1','ml-3','d-inline-block')
						grid_div5.append(away_team_score5)
						away_team_data5 = document.createElement('span')
						away_team_data5.classList.add('d-inline')
						score5 = document.createElement('p');
						score5.classList.add('mt-1');
						score5.innerHTML = `<strong>${away_score2}/${wickets_away2}  (${overs_away2})</strong>`
						away_team_score5.append(score5)
						live_sentence5 = document.createElement('p');
						live_sentence5.classList.add('pl-3', 'b', 'text-light', 'rounded','small')
						event_update5 = response["DATA"][m]["EVENTS"][events2]["CRICKET_LIVE_SENTENCE"]
						live_sentence5.innerHTML=`${event_update5}`
						thirddiv5.append(live_sentence5)
					}
				}
			}
				
				
		}
			
	}
	})
		.catch(err => console.error(err));
}
function showupcoming(){
	a = document.getElementById('showall').style.display = "none"
	b = document.getElementById('live-show').style.display = "none";
	c = document.getElementById('finished1').style.display = "none";
	d = document.getElementById('upcom').style.display = "block";
}

showleagues()

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8508ffc91emsh1ac130ac6c11b95p1a4a71jsnb0fecf0e4fc9',
		'X-RapidAPI-Host': 'flashlive-sports.p.rapidapi.com'
	}
};

fetch('https://flashlive-sports.p.rapidapi.com/v1/events/list?indent_days=0&timezone=-4&sport_id=1&locale=en_INT', options)
	.then(response => response.json())
	.then(response => {
		for (let x = 0; x<response["DATA"].length;x++){
			maindiv = document.getElementById('showall');
			firstdiv = document.createElement('div')
			firstdiv.classList.add('container', 'w-100', 'mt-3','pb-1')
			maindiv.appendChild(firstdiv)
			seconddiv = document.createElement('div');
			seconddiv.classList.add('container', 'w-100' ,'rounded','v','p-1','font-weight-light')
			firstdiv.append(seconddiv)
			headingofevent = document.createElement('p')
			headingofevent.classList.add('fs-2', 'm-1', 'title');
			headingofevent.innerHTML = ` ${response["DATA"][x]["NAME"]}` 
			seconddiv.append(headingofevent)
			if (response["DATA"][x]["EVENTS"].length == 1 ){
				thirddiv = document.createElement('div');
				thirddiv.classList.add('container', 'mt-0', 'w-100','pb-0','rounded', 'color', 'text-white','h','border-bottom')
				firstdiv.append(thirddiv)
				grid_div = document.createElement('div')
				grid_div.classList.add('grid-container');
				thirddiv.append(grid_div);
				ongoingtext = document.createElement('p');
				ongoingtext.classList.add('p', 'rounded', 'text-white', 'pl-1','mr-5','pt-2','mt-3','item-1','small')
				let stage13 = response["DATA"][x]["EVENTS"][0]["STAGE"]
				let home_score13  = parseInt(response["DATA"][x]["EVENTS"][0]["HOME_SCORE_CURRENT"])
				let away_score13 = parseInt(response["DATA"][x]["EVENTS"][0]["AWAY_SCORE_CURRENT"])
				if (isNaN(home_score13)){
					home_score13 = 0
				}
				if (isNaN(away_score13)){
					away_score13 = 0
				}
				event_time = response["DATA"][x]["EVENTS"]
				[0]["START_TIME"]
				var date = new Date(event_time * 1000)
				var hours = date.getHours(date)
				var min = date.getMinutes(date)
				if (min == 0){
					min = String(min)
					min += "0"
				}
				if (hours == 0){
					hours = String(hours)
					hours += "0"
				}
				if (stage13 == "FINISHED"){
					ongoingtext.innerText = `FINISHED!`
				}
				else if(stage13 == "SCHEDULED"){
					ongoingtext.innerText = `${hours+":"+min}`
				}
				// else if (wicket_home < 10 && overs_home < 20 || wickets_away < 10 && overs_away < 20){
				// 	ongoingtext.innerHTML = `<p class="heading_size bg-gray w-25 rounded text-white pl-2">ONGOING : FIRST INNINGS</p>`
				// }
				else if(stage13 == "FIRST_HALF"){
					ongoingtext.innerText= `FIRST HALF`
				}
				// else if(wicket_home >= 10 || overs_home >= 20 || wickets_away >= 10 || overs_away  >= 20){
				// 	ongoingtext.innerHTML = `<p class="heading_size bg-gray w-25 rounded text-white pl-2">ONGOING : SECOND INNINGS</p>`
				// }
				else if(stage13 == "SECOND_HALF"){
					ongoingtext.innerText= `SECOND HALF`
				}
				else if(stage13 == "HALF_TIME"){
					ongoingtext.innerText = `HALF TIME`
				}
				else{
					ongoingtext.innerText = `${stage13}`
				}
				grid_div.appendChild(ongoingtext)
				first_team_name = document.createElement('p');
				first_team_name.classList.add('d-block', 'text-light', 'rounded', 'text-left', 'p-0', 'small','mt-3', 'mb-0', 'item-2')
				first_team_name.innerHTML = `<img height = "25" width="25" src = ${response["DATA"][x]["EVENTS"][0]["HOME_IMAGES"][0]}> <span class="ml-1">${response["DATA"][x]["EVENTS"][0]["HOME_PARTICIPANT_NAME_ONE"]}</span>`
				grid_div.append(first_team_name);
				away_team_name = document.createElement('p')
				away_team_name.classList.add('item-3', 'mt-1', 'text-light', 'rounded', 'text-left', 'small',  'w-50');
				away_team_name.innerHTML = `<img height = "25" width="25" src = ${response["DATA"][x]["EVENTS"][0]["AWAY_IMAGES"][0]}> <span class="ml-1">${response["DATA"][x]["EVENTS"][0]["AWAY_PARTICIPANT_NAME_ONE"]}</span>`
				grid_div.append(away_team_name)
				home_score = document.createElement('div');
				home_score.classList.add('item-4', 'col', 'first_team_score')
				grid_div.append(home_score)
				if (stage13 == "SCHEDULED"){
					home_score_data = document.createElement('p')
					home_score_data.classList.add('mt-0','small')
					home_score_data.innerHTML = "<strong><p><p></strong>"
					home_score.append(home_score_data)
				}
				else if(stage13 == "POSTPONED"){
					home_score_data = document.createElement('p')
					home_score_data.classList.add('mt-2')
					home_score_data.innerHTML = `<strong></strong>`
					home_score.append(home_score_data)
				}
				else if (stage13!="SCHEDULED"){
					home_score_data = document.createElement('p');
					home_score_data.classList.add('mt-3', 'ml-3', 'small');
					home_score_data.innerHTML = `<strong>${home_score13}</strong>`
					home_score.append(home_score_data)
				}
				else if (stage13 == "FINISHED"){
					home_score_data = document.createElement('p')
					home_score_data.classList.add('mt-3','ml-3','small')
					home_score_data.innerHTML = `${home_score13}`
					home_score.append(home_score_data)
				}
				away_team_score = document.createElement('div');
				// away_team_row.classList.add('row')
				// thirddiv.append(away_team_row)
				// away_team_col = document.createElement('div')
				// away_team_col.classList.add('col','away_team')
				// away_team_row.append(away_team_col)
				// away_team_name = document.createElement('p')
				// away_team_name.classList.add('text-light','rounded','text-left','p-1','small');
				// away_team_name.innerHTML = `<img height = "25" width="25" src = ${response["DATA"][x]["EVENTS"][0]["AWAY_IMAGES"][0]}> <span class="ml-1">${response["DATA"][x]["EVENTS"][0]["AWAY_NAME"]}</span>`
				// away_team_col.append(away_team_name)
				away_team_score.classList.add('col', 'away_team_score','small','mt-1','ml-3','d-inline-block')
				grid_div.append(away_team_score)
				away_team_data = document.createElement('span')
				away_team_data.classList.add('d-inline')
				if (stage13 == "SCHEDULED"){
					score_data = document.createElement('span')
					score_data.innerText = ""
					away_team_score.append(score_data)
				}
				else if(stage13 == "POSTPONED"){
					score_data = document.createElement('p')
					score_data.classList.add('mt-2')
					score_data.innerHTML = `<strong></strong>`
					away_team_data.append(score_data)
				}
				else if (stage13!="SCHEDULED"){
						score_data = document.createElement('p')
						score_data.classList.add('mt-2')
						score_data.innerHTML = `<strong>${away_score13}</strong>`
						away_team_score.append(score_data)
				}
				else if (stage13 == "FINISHED"){
					score_data = document.createElement('p')
					score_data.classList.add('mt-2')
					score_data.innerHTML = `<strong${away_score13}</strong>`
					away_team_score.append(score_data)
				}
				
				event_id = response["DATA"][x]["EVENTS"][0]["EVENT_ID"]
			}
			else if (response["DATA"][x]["EVENTS"].length > 1){
				for (let events = 0; events < response["DATA"][x]["EVENTS"].length; events++){
					if (response["DATA"][x]["EVENTS"][events]["NAME"]==response["DATA"][x]["EVENTS"][events]["NAME"]){
					firstdiv = document.createElement('div')
					maindiv.append(firstdiv)
					thirddiv = document.createElement('div');
					thirddiv.classList.add('container', 'mt-2', 'w-100','rounded', 'color', 'text-white','h','border-bottom')
					firstdiv.append(thirddiv)
					grid_div = document.createElement('div')
					grid_div.classList.add('grid-container');
					thirddiv.append(grid_div);
					ongoingtext = document.createElement('p');
					ongoingtext.classList.add('p', 'rounded', 'text-white', 'pl-1','mr-5','pt-2','mt-3','item-1','small')
					let stage7 = response["DATA"][x]["EVENTS"][events]["STAGE"]
					let home_score7  = parseInt(response["DATA"][x]["EVENTS"][events]["HOME_SCORE_CURRENT"])
					let away_score7 = parseInt(response["DATA"][x]["EVENTS"][events]["AWAY_SCORE_CURRENT"])
					
					if (isNaN(home_score7)){
						home_score7 = 0
					}
					if (isNaN(away_score7)){
						away_score7 = 0
					}
					event_time = response["DATA"][x]["EVENTS"][events]["START_TIME"]
					var date = new Date(event_time * 1000)
					var hours = date.getHours(date)
					var min = date.getMinutes(date)
					if (min == 0){
						min = String(min)
						min += "0"
					}
					if (hours == 0){
						hours = String(hours)
						hours += "0"
					}
					if (stage7 == "FINISHED"){
						ongoingtext.innerText = `FINISHED!`
					}
					else if(stage7 == "SCHEDULED"){
						ongoingtext.innerText = `${hours+":"+min}`
					}
					// else if (wicket_home < 10 && overs_home < 20 || wickets_away < 10 && overs_away < 20){
					// 	ongoingtext.innerHTML = `<strong>ONGOING : FIRST INNINGS</strong>`
					// }
					else if(stage7 == "FIRST_HALF"){
						ongoingtext.innerText= `FIRST HALF`
					}
					// else if(wicket_home >= 10 || overs_home >= 20 || wickets_away >= 10 || overs_away  >= 20){
					// 	ongoingtext.innerHTML = `<strong>ONGOING : SECOND INNINGS</strong>`
					// }
					else if(stage7 == "SECOND_HALF"){
						ongoingtext.innerText= `SECOND HALF`
					}
					else if(stage7 == "HALF_TIME"){
						ongoingtext.innerText = `HALF TIME`
					}
					
					else{
						ongoingtext.innerText = `${stage7}`
					}
					grid_div.appendChild(ongoingtext)
					// row = document.createElement('div');
					// row.classList.add('row')
					// thirddiv.append(row);
					first_team_name = document.createElement('p');
					first_team_name.classList.add('d-block', 'text-light', 'rounded', 'text-left', 'p-0', 'small','mt-3', 'mb-0', 'item-2')
					first_team_name.innerHTML = `<img height = "25" width="25" src = ${response["DATA"][x]["EVENTS"][events]["HOME_IMAGES"][0]}> <span class="ml-1">${response["DATA"][x]["EVENTS"][events]["HOME_PARTICIPANT_NAME_ONE"]}</span>`
					grid_div.append(first_team_name);
					away_team_name = document.createElement('p')
					away_team_name.classList.add('item-3', 'mt-1', 'text-light', 'rounded', 'text-left', 'small',  'w-50');
					away_team_name.innerHTML = `<img height = "25" width="25" src = ${response["DATA"][x]["EVENTS"][events]["AWAY_IMAGES"][0]}> <span class="ml-1">${response["DATA"][x]["EVENTS"][events]["AWAY_PARTICIPANT_NAME_ONE"]}</span>`
					grid_div.append(away_team_name)
					home_score = document.createElement('div')
					home_score.classList.add('item-4','col','first_team_score');
					grid_div.append(home_score)
					if (stage7 == "SCHEDULED"){
						home_score_data = document.createElement('p')
						home_score_data.classList.add('mt-0','small')
						home_score_data.innerHTML = "<strong><p><p></strong>"
						home_score.append(home_score_data)
					}
					else if(stage7 == "POSTPONED"){
						home_score_data = document.createElement('p')
						home_score_data.classList.add('mt-2')
						home_score_data.innerHTML = `<strong></strong>`
						home_score.append(home_score_data)
					}
					else if (stage7!="SCHEDULED"){
						home_score_data = document.createElement('p');
						home_score_data.classList.add('mt-3', 'ml-3','small');
						home_score_data.innerHTML = `<strong>${home_score7}</strong>`
						home_score.append(home_score_data)
					}
					else if (stage7 == "FINISHED"){
						home_score_data = document.createElement('p')
						home_score_data.classList.add('mt-3','ml-3','small')
						home_score_data.innerHTML = `${home_score}`
						home_score.append(home_score_data)
					}
					away_team_score11 = document.createElement('div');
					// away_team_row = document.createElement('div');
					// away_team_row.classList.add('row')
					// thirddiv.append(away_team_row)
					// away_team_col = document.createElement('div')
					// away_team_col.classList.add('col','away_team')
					// away_team_row.append(away_team_col)
					// away_team_name = document.createElement('p')
					// away_team_name.classList.add('text-light','rounded','text-left','p-1','small');
					// away_team_name.innerHTML = `<img height = "25" width="25" src = ${response["DATA"][x]["EVENTS"][events]["AWAY_IMAGES"][0]}> <span class="ml-1">${response["DATA"][x]["EVENTS"][events]["AWAY_NAME"]}</span>`
					// away_team_col.append(away_team_name)
					away_team_score11.classList.add('col', 'away_team_score','small','mt-1','ml-3','d-inline-block')
					grid_div.append(away_team_score11)
					// away_team_row.append(second_team_score)
					
					if (stage7 == "SCHEDULED"){
						score_data11 = document.createElement('span')
						score_data11.innerHTML = ""
						away_team_score11.append(score_data11)
					}
					else if(stage7 == "POSTPONED"){
						score_data11 = document.createElement('p')
						score_data11.classList.add('mt-2')
						score_data11.innerHTML = `<strong></strong>`
						away_team_score11.append(score_data11)
					}
					else if (stage7 !="SCHEDULED"){
						score_data11 = document.createElement('p')
						score_data11.classList.add('mt-0')
						score_data11.innerHTML = `<strong>${away_score7}</strong>`
						away_team_score11.append(score_data11)
						
					}
					else if (stage7 == "FINISHED"){
						score_data11 = document.createElement('p')
						score_data11.classList.add('mt-2')
						score_data11.innerHTML = `<strong${away_score7}</strong>`
						away_team_score11.append(score_data11)
					}
					event_id = response["DATA"][x]["EVENTS"][events]["EVENT_ID"]
						}
					}
			}
			}
	})
	.catch(err => console.error(err));

//
// 
// 	F F F F        O					TTTTTTTTTTTTT        
//	F 			  O	  O						  T				
// 	F F F		O	   	O					  T
// 	F			O	   O					  T
// 	f			 O   O						  T
//  F			   O						  T



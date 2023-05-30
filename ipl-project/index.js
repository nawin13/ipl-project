
// slider code

var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 3000);

// slider code ends

// team and player data
var playerData = [
    {
        "id": 0,
        "playerName": "Hardik Pandya",
        "from": "GT",
        "price": "15.00 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/54.png',
        "playerTeam": "Gujarat Titan"
    },
    {
        "id": 1,
        "playerName": "Mohammad Shami",
        "from": "GT",
        "price": "06.25 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/47.png',
        "playerTeam": "Gujarat Titan"
    },
    {
        "id": 2,
        "playerName": "Shubham Gill ",
        "from": "GT",
        "price": "08.00 Cr",
        "isPlaying": false,
        "description": "Batsman",
        "playerImg": 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/62.png',
        "playerTeam": "Gujarat Titan"
    },
    {
        "id": 3,
        "playerName": "David Miller",
        "from": "GT",
        "price": "03.00 Cr",
        "isPlaying": false,
        "description": "Batsman",
        "playerImg": 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/128.png',
        "playerTeam": "Gujarat Titan"
    },
    {
        "id": 4,
        "playerName": "Rashid Khan",
        "from": "GT",
        "price": "15.00 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/218.png',
        "playerTeam": "Gujarat Titan"
    },
    {
        "id": 5,
        "playerName": "Virat Kohli",
        "from": "RCB",
        "price": "15.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/2.png',
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 6,
        "playerName": "Glenn Maxwell",
        "from": "RCB",
        "price": "11.00 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/28.png",
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 7,
        "playerName": "Faf Du Plessis",
        "from": "RCB",
        "price": "08.00cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/94.png",
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 8,
        "playerName": "Mohammed Siraj",
        "from": "RCB",
        "price": "07.00cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/63.png",
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 9,
        "playerName": "Dinesh Kartik",
        "from": "RCB",
        "price": "05.50cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/13.png",
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 10,
        "playerName": "Rohit Sharma",
        "from": "MI",
        "price": "16.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/6.png",
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 11,
        "playerName": "Ishan Kishan",
        "from": "MI",
        "price": "15.25 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/164.png",
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 12,
        "playerName": "Jofra Archer",
        "from": "MI",
        "price": "8.00 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/181.png",
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 13,
        "playerName": "Piyush Chawala",
        "from": "MI",
        "price": "00.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/149.png",
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 14,
        "playerName": "Cameron Green",
        "from": "MI",
        "price": "17.50 Cr",
        "isPlaying": true,
        "description": "All-Rounder",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/550.png",
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 15,
        "playerName": "MS Dhoni",
        "from": "CSK",
        "price": "12.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/57.png",
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 16,
        "playerName": "Ravindra Jadeja",
        "from": "CSK",
        "price": "16.00 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/46.png",
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 17,
        "playerName": "Devon Conway",
        "from": "CSK",
        "price": "01.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/601.png",
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 18,
        "playerName": "Ambati Rayudu",
        "from": "CSK",
        "price": "06.75 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/60.png",
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 19,
        "playerName": "Shivam Dube",
        "from": "CSK",
        "price": "04.00 Cr",
        "isPlaying": true,
        "description": "All-Rounder",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/211.png",
        "playerTeam": "Chennai Super Kings"
    },

    {
        "id": 20,
        "playerName": "David Warner",
        "from": "DC",
        "price": "06.25 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/214.png",
        "playerTeam": "Delhi Capitals"
    },
    {
        "id": 21,
        "playerName": "Phil Salt",
        "from": "DC",
        "price": "02.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1220.png",
        "playerTeam": "Delhi Capitals"
    },
    {
        "id": 22,
        "playerName": "Axar Patel",
        "from": "DC",
        "price": "09.00 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/110.png",
        "playerTeam": "Delhi Capitals"
    },
    {
        "id": 23,
        "playerName": "Prithvi shaw",
        "from": "DC",
        "price": "07.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/51.png",
        "playerTeam": "Delhi Capitals"
    },
   
    {
        "id": 24,
        "playerName": "Jos Buttler",
        "from": "RR",
        "price": "10.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/182.png",
        "playerTeam": "Rajasthan Royals"
    },
    {
        "id": 25,
        "playerName": "Sanju Samson",
        "from": "RR",
        "price": "16.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/190.png",
        "playerTeam": "Rajasthan Royals"
    },
    {
        "id": 26,
        "playerName": "Yashasvi Jaiswal",
        "from": "RR",
        "price": "04.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/533.png",
        "playerTeam": "Rajasthan Royals"
    },
    {
        "id": 27,
        "playerName": "Trent Boult",
        "from": "RR",
        "price": "08.00 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/66.png",
        "playerTeam": "Rajasthan Royals"
    },
    {
        "id": 28,
        "playerName": "Devdutt Paddikal",
        "from": "RR",
        "price": "07.75 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/200.png",
        "playerTeam": "Rajasthan Royals"
    },
    {
        "id": 29,
        "playerName": "Nitish Rana",
        "from": "KKR",
        "price": "08.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/148.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 30,
        "playerName": "Jason Roy",
        "from": "KKR",
        "price": "02.80 Cr",
        "isPlaying": false,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/313.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 31,
        "playerName": "Shardul Thakur",
        "from": "KKR",
        "price": "10.75 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/105.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 32,
        "playerName": "Andre Russell",
        "from": "KKR",
        "price": "12.00 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/141.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 33,
        "playerName": "Rinku Singh",
        "from": "KKR",
        "price": "00.55 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/152.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 34,
        "playerName": "Aiden Markram",
        "from": "SH",
        "price": "02.60 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/287.png",
        "playerTeam": "Sunrises Hyderabad"
    },
    {
        "id": 35,
        "playerName": "Abhishek Sharma",
        "from": "SH",
        "price": "06.50 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/212.png",
        "playerTeam": "Sunrises Hyderabad"
    },
    {
        "id": 36,
        "playerName": "Heinrich Klaasen",
        "from": "SH",
        "price": "5.25 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/202.png",
        "playerTeam": "Sunrises Hyderabad"
    },
    {
        "id": 37,
        "playerName": "	Bhuvneshwar Kumar",
        "from": "SH",
        "price": "04.20 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/15.png",
        "playerTeam": "Sunrises Hyderabad"
    },
   

];

var teamData = [

    {
        "id": 0,
        "teamFullName": "Mumbai Indians",
        "sName": "MI",
        "fullSname":"MI (Mumbai Indians)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png",
        "WonCount": 5,
    },
    {
        "id": 1,
        "teamFullName": "Chennai Super Kings",
        "sName": "CSK",
        "fullSname":"CSK (Chennai Super King)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig.png",
        "WonCount": 4,
    },
    {
        "id": 2,
        "teamFullName": "Royal Challengers Bangalore",
        "sName": "RCB",
        "fullSname":"RCB (Royal challengers Bangalore)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig.png",
        "WonCount": 0,
    },
    {
        "id": 3,
        "teamFullName": "Kolkata Knight Riders",
        "sName": "KKR",
        "fullSname":"KKR (Kolkata Knight Riders)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png",
        "WonCount": 2,
    },
    {
        "id": 4,
        "teamFullName": "Delhi Capitals",
        "sName": "DC",
        "fullSname":"DC (Delhi Capitals)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Roundbig/DCroundbig.png",
        "WonCount": 2,
    },
    {
        "id": 5,
        "teamFullName": "Gujarat Titan",
        "sName": "GT",
        "fullSname":"GT (Gujarat Tistan)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Roundbig/GTroundbig.png",
        "WonCount": 2,
    },

    {
        "id": 6,
        "teamFullName": "Rajasthan Royals",
        "sName": "RR",
        "fullSname":"RR (Rajasthan Royals)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Roundbig/RRroundbig.png",
        "WonCount": 1,
    },
    {
        "id": 7,
        "teamFullName": "Sunrises Hyderabad",
        "sName": "SH",
        "fullSname":"SH (Sunrises Hyderabad)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Roundbig/SRHroundbig.png",
        "WonCount": 1,
    },


];



var addteamclicked=()=>{
    window.open("./addTeam.html","_self")
}
var addPlayerClicked=()=>{
    window.open("./addPlayer.html","_self")
}





    let detailofTeam = [];
    let detailOfPlayer = [];
    var teamGrid = document.getElementById("container_teams")
    
    if(localStorage.getItem("teamArray") === null)
    localStorage.setItem("teamArray", JSON.stringify(teamData));
    
    if(localStorage.getItem("playerArray") === null)
    localStorage.setItem("playerArray", JSON.stringify(playerData));

    detailofTeam = JSON.parse(localStorage.getItem("teamArray"));
    detailOfPlayer = JSON.parse(localStorage.getItem("playerArray"));

   


   
// search bar code goes here

var suggestArray=[];
for(var i=0;i<detailofTeam.length;i++){
    suggestArray.push(detailofTeam[i].sName)
    
}
let searchBar = document.querySelector(".search-input");
let inputBox = searchBar.querySelector("input");
let suggBox = searchBar.querySelector(".autocom-box");
let icon = searchBar.querySelector(".icon");



inputBox.onkeyup = (e)=>{
    if(e.keyCode==13){
        icon.click()
    }
    let userData = e.target.value; 
    let emptyArray = [];
    if(userData){
      
        emptyArray = suggestArray.filter((data)=>{
           
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
           
            return data = `<li>${data}</li>`;
        });
        searchBar.classList.add("active"); 
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            
            allList[i].setAttribute("onclick", "currentLi(this)");
        }
    }else{
        searchBar.classList.remove("active");
    }
}
function currentLi(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
   
        window.open(`./teams.html?name=${element.textContent}`,"_self")
    
    }
    searchBar.classList.remove("active");
}
function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

// search bar code ends here

// grid cards for teams goes here

var teamMainBox=document.getElementById("container_teams")
for(var i=0;i<detailofTeam.length;i++){
teamMainBox.innerHTML+=`
<div    onclick="makethisinclick('${i}')"    class="minibox">
<img src="${detailofTeam[i].teamIcon}" class="mainimage" alt=""/> 
<div class="dataodcard">
  <p class="text1"> ${detailofTeam[i].teamFullName}   </p>
  <p class="text2"> Won Count : ${detailofTeam[i].WonCount} </p>
 
</div>
</div>
`

}

function makethisinclick(res){
    var clickedCard=detailofTeam[res].sName
    
    window.open(`./teams.html?name=${clickedCard}`,"_self")
    
    
}
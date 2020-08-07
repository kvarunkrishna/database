class Player{
    constructor(){
    this.name=null
    this.distance=0
    this.index=null
    }
    getcount(){
       var playercountref=database.ref("playercount") 
       playercountref.on("value",function(data){
           playercount=data.val()
       })
    
    }
    updatecount(count){
        database.ref("/").update({
            playercount:count
        })
    }
    update(){
    var playerIndex = "players/player" + this.index; 
    database.ref(playerIndex).set({ 
    name:this.name,
    distance:this.distance });

    }
    static getplayerinfo(){
var playerinfo=database.ref("players")
 playerinfo.on("value",function(data){
 allplayers=data.val()
})
    }}

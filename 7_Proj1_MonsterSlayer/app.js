function getRandomValue(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data(){
        return{
            playerHealth: 100,
            monsterHealth: 100,
            currentRound:0,
            winner: null,
            logMessages: []
        };
    },
    watch:{
        playerHealth(value){
            if(value <= 0 && this.monsterHealth <= 0){
                this.winner = "Draw";
            }else if(value <= 0){
                this.winner = "Monster"
            }
        },
        monsterHealth(value){
            if(value <= 0 && this.playerHealth <= 0){
                this.winner = "Draw";
            }else if(value <= 0){
                this.winner = "Player"
            }
        }
    },
    computed:{
        playerBarValue(){
            if(this.playerHealth < 0 ){
                return {width: 0 + '%'}
            }
            return {width: this.playerHealth + '%'}
        },
        monsterBarValue(){
            if(this.monsterHealth < 0 ){
                return {width: 0 + '%'}
            }
            return {width: this.monsterHealth + '%'}
        },
        mayUseSpecialAttack(){
            return this.currentRound % 3 !== 0
        }
    },
    methods:{
        attackMonster(){
            this.currentRound ++;
            // 伤害在5-12之间
            const attactValue = getRandomValue(5, 12);
            this.monsterHealth -= attactValue;
            this.addLogMessage("Player","Attact",attactValue)
            //攻击怪物之后 怪物攻击玩家 trigger触发
            this.attackPlayer();
        },
        attackPlayer(){
            const attactValue = getRandomValue(8, 15);
            this.addLogMessage("Monster","Attact",attactValue)
            this.playerHealth -= attactValue;
        },
        specialAttactMonster(){
            this.currentRound ++;
            const attactValue = getRandomValue(10, 25);
            this.addLogMessage("Player","Special Attack",attactValue);
            this.monsterHealth -= attactValue;
            //攻击怪物之后 怪物攻击玩家 trigger触发
            this.attackPlayer();
        },
        healPlayer(){
            this.currentRound ++;
            const healValue = getRandomValue(8,20);
            // 满血不能回复
            if(this.playerHealth + healValue > 100){
                this.addLogMessage("Player","Heal",100 - this.playerHealth);
                this.playerHealth = 100;
            }else{
                this.addLogMessage("Player","Heal",healValue);
                this.playerHealth += healValue;
            }

            this.attackPlayer()
        },
        reStart(){
            if(this.winner != null){
                this.playerHealth = 100;
                this.monsterHealth = 100;
                this.winner = null;
                this.currentRound = 0;
                this.logMessages = [];
            }
        },
        surrend(){
            this.playerHealth = 0;
            this.winner = 'Monster'
        },
        addLogMessage(who, what, value){
            // unshift在前面添加
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        }
    }
});

app.mount("#game")
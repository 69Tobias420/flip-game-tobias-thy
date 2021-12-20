document.addEventListener('DOMContentLoaded', () => {
const width = 4
const height = 3
let gameTile = []

const pairOne = Array(2).fill('pair1')
const pairTwo = Array(2).fill('pair2')
const pairThree = Array(2).fill('pair3')
const pairFour = Array(2).fill('pair4')
const pairFive = Array(2).fill('pair5')
const pairSix = Array(2).fill('pair6')
const combinedArray = pairOne.concat(pairTwo, pairThree, pairFour, pairFive, pairSix)
const shuffled = combinedArray.sort(() => Math.random() -0.5)
console.log(shuffled)

for (let i = 0; i < width * height; i++) {
    gameTile = document.createElement('div')
    gameTile.setAttribute('id',"tile" + i)
    // gameTile.setAttribute('onClick', "tileClick" + i + "()")
    gameTile.classList.add(shuffled[i])
    // gameTile.dataset.item = combinedArray[i];
    // gameTile.dataset.view = "gameTile";
    document.getElementById("mainGame").appendChild(gameTile)
    // gameTile.appendChild("mainGame");
    console.log(gameTile)
}
tile0.addEventListener("click", tileClick);
tile1.addEventListener("click", tileClick);
tile2.addEventListener("click", tileClick);
tile3.addEventListener("click", tileClick);
tile4.addEventListener("click", tileClick);
tile5.addEventListener("click", tileClick);
tile6.addEventListener("click", tileClick);
tile7.addEventListener("click", tileClick);
tile8.addEventListener("click", tileClick);
tile9.addEventListener("click", tileClick);
tile10.addEventListener("click", tileClick);
tile11.addEventListener("click", tileClick);
});
//Click Function -V-

let clickOne = ""
let clickTwo = " "

let localID1
let localID2

let matches = 0

function tileClick() {
    document.getElementById("start-text").style.display = "none"
    if (clickOne.length < 3) {
        clickOne = this.className
        localID1 = this.id
        document.getElementById(localID1).style.transform = "rotateY(180deg)"
        document.getElementById(localID1).style.backgroundImage = "none"
        console.log(clickOne)
        if (clickOne === clickTwo) {
            document.getElementById(localID1).style.transform = "rotateY(180deg)"
            document.getElementById(localID2).style.transform = "rotateY(180deg)"
            document.getElementById(localID1).style.backgroundImage = "none"
            document.getElementById(localID2).style.backgroundImage = "none"
            clickOne = ""
            clickTwo = " "
            matches++
            if (matches === 6) {
                alert("Congratulations!")
            }
        }
        else if (clickOne.length == 5 && clickTwo.length == 5) {
            clickOne = ""
            clickTwo = " "
            setTimeout(() => {
                document.getElementById(localID1).style.transform = "rotateY(0deg)"
                document.getElementById(localID1).style.backgroundImage = "url(assets/visuals/img/flip-card-backside.jpg)"
                document.getElementById(localID2).style.transform = "rotateY(0deg)"
                document.getElementById(localID2).style.backgroundImage = "url(assets/visuals/img/flip-card-backside.jpg)"
            }, 1000);
        }
    }
    else if (clickTwo.length < 3) {
        clickTwo = this.className
        console.log(clickTwo)
        localID2 = this.id
        document.getElementById(localID2).style.transform = "rotateY(180deg)"
        document.getElementById(localID2).style.backgroundImage = "none"
        if (clickOne === clickTwo) {
            document.getElementById(localID1).style.transform = "rotateY(180deg)"
            document.getElementById(localID2).style.transform = "rotateY(180deg)"
            document.getElementById(localID1).style.backgroundImage = "none"
            document.getElementById(localID2).style.backgroundImage = "none"
            clickOne = ""
            clickTwo = " "
            matches++
            if (matches === 6) {
                alert("Congratulations!")
            }
        }
        else if (clickOne.length == 5 && clickTwo.length == 5) {
            clickOne = ""
            clickTwo = " "
            setTimeout(() => {
                document.getElementById(localID1).style.transform = "rotateY(0deg)"
                document.getElementById(localID1).style.backgroundImage = "url(assets/visuals/img/flip-card-backside.jpg)"
                document.getElementById(localID2).style.transform = "rotateY(0deg)"
                document.getElementById(localID2).style.backgroundImage = "url(assets/visuals/img/flip-card-backside.jpg)"
            }, 1000);
            
        }
    }
}

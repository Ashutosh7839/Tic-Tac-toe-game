let boxes = document.querySelectorAll(".box")
let reset = document.querySelector(".reset")

let msgcontainer = document.querySelector(".msg-container")
let newgame = document.querySelector("#newgame")
let msg = document.querySelector("#msg")

let turn0 = true
const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
       if(turn0){
        box.innerText = "0"
        turn0 = false
       }
       else{
        box.innerText = "x"
        turn0 = true
       }
       
        box.disabled = true
        checkwinner()
        
    })
})
let checkwinner = () =>{
    for(let pattern of winpattern){
        let pos0val = boxes[pattern[0]].innerText
        let pos1val = boxes[pattern[1]].innerText
        let pos2val = boxes[pattern[2]].innerText
        if(pos0val != "" && pos1val !="" && pos2val != "")
        {
            if(pos0val===pos1val && pos1val===pos2val)
            { 
                showwinner(pos1val)
                return true
            }
        }
    }
}
const resetgame = () =>{
    turn0 = true
    enableboxes()
    msgcontainer.classList.add("hide")

}

const showwinner = (winner)=>{
    msgcontainer.innerText = `congratulation player ${winner} is winner`
    msgcontainer.classList.remove("hide")
    disableboxes()
}
const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true
    }

}
const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false
        box.innerText = ""      
    }

}
newgame.addEventListener("click", resetgame)
reset.addEventListener("click", resetgame)



// code your solution here
function superbowlWin(record){
    let win = record.find( record => record.result === "W" )
    return win ? win.year : undefined
    
}

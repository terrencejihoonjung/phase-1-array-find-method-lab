function superbowlWin(record) {
    let won = record.find(observeResult);
    if (won === undefined) {
        return won;
    }
    return won.year;
}

function observeResult(season) {
    return season.result === 'W';
    
}
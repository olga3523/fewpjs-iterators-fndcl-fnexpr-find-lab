
function superbowlWin(data)
{
    let res = data.find((el) => {
        return el.result === 'W';
    })
    if (res == undefined)
        return res;
    return res.year;
}
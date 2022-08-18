const dateOfPost = function () {

    time = new Date();

    const [year, month, day, hour, minutes, seconds] = [time.getFullYear(), (time.getMonth() + 1), time.getDate(),
    time.getHours(), time.getMinutes(), time.getSeconds()];

    const date = `${day}/${month}/${year}. ${hour}h:${minutes}m:${seconds}s.`
    
    return date;
}

module.exports = dateOfPost;
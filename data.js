console.log('ok')
testDeive = () => {
    fetch('data.json')
        .then(res => res.json())
        .then(data => info(data))
    const info = room => {

        

          const int_time = times =>{
            if (times.length == 7){
                times = '0'+times
            }
            if (times.search("am") != -1){
                const amTime = parseInt(times.slice(0, 2))
                const secTime = parseInt(times.slice(3, 5))
                const finalTime = amTime + secTime/100
                return finalTime
            }
            else{
                let pmTime = parseInt(times.slice(0, 2))
                pmTime = pmTime+ 12
                const secTime = parseInt(times.slice(3, 5))
                const finalTime = pmTime + secTime/100
                return finalTime
            }
          }
          function formatAMPM(date) {
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0'+minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;
            return strTime;
          }
          const todayTime = formatAMPM(new Date)
        //   console.log(typeof(int_time(todayTime)))
        //   console.log(typeof(int_time(room[0].end)))
        let c = 0
        for (let i = 0; i < room.length; i ++){
            c++
            if (room[i].room == 'UB40401' && room[i].day == "Thursday" && int_time(todayTime) > int_time(room[i].start) && int_time(todayTime) < int_time(room[i].end)) {
                console.log(room[c])
            };
            
        }
        
    }
}
// && int_time(todayTime) > int_time(room[i].start) && int_time(todayTime) < int_time(room[i].end)

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }






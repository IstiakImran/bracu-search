
const floorFun = floorEle => {
    fetch('floor.json')
        .then(res => res.json())
        .then(data => floor(data))
    const floor = dat => {
        dat.forEach(element => {
            if (element.Building == floorEle.value) {
                let floorNum = element.Floor
                let makeFloor = document.getElementById('floor')
                makeFloor.class = element.Building
                makeFloor.innerHTML = `
                <option style="color: #000000;" value="disable">Select</option>
                `
                floorNum.forEach(ele => {
                    const floorNum = document.createElement('option')

                    floorNum.value = ele.id;
                    floorNum.name = ele.id;

                    floorNum.innerHTML = `${ele.id}`
                    makeFloor.append(floorNum)

                });

            }
        });

    }

}
const roomFun = roomEle => {

    fetch('floor.json')
        .then(response => response.json())
        .then(datas => room(datas))
    const room = dats => {
        dats.forEach(element => {

            if (element.Building == roomEle.class) {
                let floorList = element.Floor
                floorList.forEach(material => {
                    if (material.id == roomEle.value) {
                        let floorList = material.RoomNum
                        let makeRoom = document.getElementById('roomName')
                        makeRoom.innerHTML = `
                        <option style="color: #000000;" value="disable">Select</option>
                        `
                        floorList.forEach(room => {
                            const roomNum = document.createElement('option')
                            roomNum.value = room.id
                            roomNum.innerHTML = `${room.roomName}`
                            makeRoom.append(roomNum)
                        })
                    }

                })
            }
        });

    }

}

const idCollector = finalInfo => {
    const btnId = document.getElementById('btn')
    btnId.value = finalInfo.value
    console.log(finalInfo.value)
}

// fetching data
// need to update floor.json for ub10, 11.

testDeive = () => {
    fetch('summer23.json')
        .then(res => res.json())
        .then(data => info(data))
    const info = roomnum => {
        let room = roomnum[0].rows



        const int_time = times => {
            if (times.length == 7) {
                times = '0' + times
            };
            if (times.search("am") == 6) {
                const amTime = parseInt(times.slice(0, 2))
                const secTime = parseInt(times.slice(3, 5))
                const finalTime = amTime + secTime / 100
                return finalTime
            }
            else {
                let pmTime = parseInt(times.slice(0, 2))
                pmTime = pmTime + 12
                let secTime = parseInt(times.slice(3, 5))
                let finalTime = pmTime + secTime / 100
                if (finalTime >= 24) {
                    finalTime = finalTime - 12;
                };
                return finalTime
            }
        }
        function formatAMPM(date) {
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            if (hours >= 12) {
                ampm = 'pm';
            }
            else {
                ampm = 'am';
            };
            console.log(ampm)
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0' + minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;
            return strTime;
        }
        const todayTime = formatAMPM(new Date)
        //   console.log(typeof(int_time(todayTime)))
        //   console.log(typeof(int_time(room[0].end)))

        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        const d = new Date();
        let day = weekday[d.getDay()];
        let c = 0
        const btnValue = document.getElementById('btn').value
        const inrTxt = document.getElementById('info_text')
        console.log(int_time(todayTime))

        for (let i = 0; i < room.length; i++) {
            c++
            if (int_time(todayTime) > 21.5) {
                inrTxt.innerHTML = `
                <h1>
                    University is closed after 9:30 pm.
                </h1>
                
                `
            }
            else if (int_time(todayTime) < 7.5) {
                inrTxt.innerHTML = `
                <h1>
                    University will open after 7:30 am.
                </h1>

                `
            }
            else if (room[i].cell[8] == btnValue && room[i].cell[5] == day && int_time(todayTime) < (int_time(room[i].cell[7])) && int_time(todayTime) > int_time(room[i].cell[6])) {
                inrTxt.innerHTML = `
                <h1>
                    Room is not available now.
                </h1>
                <h3>
                ${room[i].cell[2]} section ${room[i].cell[4]}'s class is being held till ${room[i].cell[7]}
                </h3>
               
                `
                console.log((room[i].cell[0]))
                console.log(int_time(room[i].cell[7]))
                console.log(int_time(todayTime))
                console.log(int_time(room[i].cell[6]))
                console.log(room[i].cell[8])
                break

            }
            else if (btnValue) {
                inrTxt.innerHTML = `
                <h1>
                    Room is available!
                </h1>
                
                `
            }
            else if (int_time(todayTime) > 21.5 && Friday == day) {
                inrTxt.innerHTML = `
                <h1>
                    University is closed
                </h1>
                
                `
            }
            else {

            }

        }

    }
}

var mysql = require("mysql")


function createTable() {
    let con = getConnection()
    con.query("CREATE TABLE IF NOT EXISTS Fitness(fitid int(11) AUTO_INCREMENT, Fittask varchar(70),time Time, PRIMARY KEY(fitid));", function (err) {
        if (err) throw err
        console.log("Connection was ok");
    });
    closeConnection(con);
}


function addNewTask(name, time) {
    let con = getConnection();
    let sql = "INSERT INTO Fitness(Fittask,time) VALUES('" + name + "','" + convertNumberToTime(time) + "')";
    con.query(sql, function (err, res) {
        if (err) throw err
        console.log(res);
    })
    closeConnection(con);
}

function getAllTasks() {
    let con = getConnection()
    let sql = "SELECT * FROM Fitness";
    let result = [];


    con.query(sql, function (err, res, fields) {
        if (err) throw err
        for (let i = 0; i < res.length; i++) {
            result.push({
                "Taskname": res[i].Fittask,
                "Time": res[i].time
            });
        }
        console.log(result);
    })
}

function deleteFitness(id) {
    let con = getConnection()
    let sql = "DELETE FROM FITNESS WHERE fitid=" + id

    con.query(sql, function (err, res) {
        if (err) throw err;
        console.log(res);
    })
}




function convertNumberToTime(number) {
    let stunden = Math.floor(number / 60);
    let minuten = number % 60;

    return stunden + ":" + minuten;
}

function getConnection() {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "rudig_sailer"
    });
    con.connect()
    return con;
}

function closeConnection(conToClose) {
    conToClose.end()
}


module.exports = {
    createTable,
    addNewTask,
    getAllTasks,
    deleteFitness
};
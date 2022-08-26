function getAllPet() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/pets",
        success: function (data) {
            let table = document.getElementById("display")
            if (table.style.display === "none") {
                table.style.display = "block"
                document.getElementById("form").style.display = "none"
            }
            document.getElementById("display").innerHTML = displayTable(data)
        }
    })
}

function displayTable(data) {
    let result = ""
    result += "<table>"
    result += "<tr>"
    result += "<th> STT</th>"
    result += "<th>Name</th>"
    result += "<th>Age</th>"
    result += "<th>Kilograms</th>"
    result += "<th>Environment</th>"
    result += "<th>Species</th>"
    result += "<th colSpan='2'>Action</th>"
    result += "</tr>"
    for (let i = 0; i < data.length; i++) {
        result += "<tr>"
        result += "<th>" + (i + 1) + "</th>"
        result += "<th>" + data[i].name + "</th>"
        result += "<th>" + data[i].age + "</th>"
        result += "<th>" + data[i].kg + "</th>"
        result += "<th>" + data[i].environment.name + "</th>"
        result += "<th>" + data[i].animal.name + "</th>"
        result += "<th><button onclick='update(" + data[i].id + ")'>Update</button></th>"
        result += "<th><button onclick='deleteAnimal(" + data[i].id + ")'>Delete</button></th>"
        result += "</tr>"
    }
    result += "</table>"
    return result;
}

function formCreate(data, data1) {
    let result = ""
    result += "<form>"
    result += "<table>"
    result += "<tr>"
    result += "<th>Name</th>"
    result += "<td><label><input type='text' id='name'></label></td>"
    result += "</tr>"
    result += "<tr>"
    result += "<th>Age</th>"
    result += "<td><label><input type='text' id='age'></label></td>"
    result += "</tr>"
    result += "<tr>"
    result += "<th>Kilograms</th>"
    result += "<td><label><input type='text' id='kg'></label></td>"
    result += "</tr>"
    result += "<tr>"
    result += "<th>Animal</th>"
    result += "<td><select id='animal'>"
    for (let i = 0; i < data.length; i++) {
        result += "<option value=" + data[i].id + ">" + data[i].name + "</option>"
    }
    result += "</select>"
    result += "</td>"
    result += "<th>Environment</th>"
    result += "<td><select id='environment'>"
    for (let i = 0; i < data1.length; i++) {
        result += "<option value=" + data1[i].id + ">" + data1[i].name + "</option>"
    }
    result += "</select>"
    result += "</td>"
    result += "</tr>"
    result += " <tr>"
    result += "<td colspan='2'>"
    result += "<button id='button' onclick='createPet()'>Create</button>"
    result += "</td>"
    result += "</tr>"
    result += "</table>"
    result += "</form>"
    // document.getElementById("list").style.display = "none"
    return result
}

// function getAllEnvironment(data){
//     let result = ""
//     for (let i = 0; data.length > 0; i++) {
//         result += "<option value=" + data[i].id + ">" + data[i].name + "</option>"
//     }document.getElementById("environment").innerHTML = result
// }
// function getAllAnimal(data){
//     let result = ""
//     for (let i = 0; i < data.length; i++) {
//         result += "<option value=" + data[i].id + ">" + data[i].name + "</option>"
//     }
//     document.getElementById("animal").innerHTML = result
// }
function update(id) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/pets/animal",
        success: function (data) {
            $.ajax({
                type: "GET",
                url: "http://localhost:8080/pets/environment",
                success: function (data1) {
                    $.ajax({
                        type: "GET",
                        url: "http://localhost:8080/pets/" + id,
                        success: function (data2) {
                            document.getElementById("form").innerHTML = formUpdate(data, data1)
                            document.getElementById("id").value = data2.id
                            document.getElementById("name").value = data2.name
                            document.getElementById("age").value = data2.age
                            document.getElementById("kg").value = data2.kg
                        }
                    })
                }
            })
        }
    })
}


function formUpdate(data,data1) {
    let result = ""
    result += "<form>"
    result += "<table>"
    result += "<tr>"
    result += "<th>ID</th>"
    result += "<td><label><input type='text' id='id'></label></td>"
    result += "</tr>"
    result += "<tr>"
    result += "<th>Name</th>"
    result += "<td><label><input type='text' id='name'></label></td>"
    result += "</tr>"
    result += "<tr>"
    result += "<th>Age</th>"
    result += "<td><label><input type='text' id='age'></label></td>"
    result += "</tr>"
    result += "<tr>"
    result += "<th>Kilograms</th>"
    result += "<td><label><input type='text' id='kg'></label></td>"
    result += "</tr>"
    result += "<tr>"
    result += "<th>Animal</th>"
    result += "<td><select id='animal'>"
    for (let i = 0; i < data.length; i++) {
        result += "<option value=" + data[i].id + ">" + data[i].name + "</option>"
    }
    result += "</select>"
    result += "</td>"
    result += "<th>Environment</th>"
    result += "<td><select id='environment'>"
    for (let i = 0; i < data1.length; i++) {
        result += "<option value=" + data1[i].id + ">" + data1[i].name + "</option>"
    }
    result += "</select>"
    result += "</td>"
    result += "</tr>"
    result += " <tr>"
    result += "<td colspan='2'>"
    result += "<button id='button' onclick='updateAnimal()'>Update</button>"
    result += "</td>"
    result += "</tr>"
    result += "</table>"
    result += "</form>"
    // document.getElementById("list").style.display = "none"
    return result

}

function deleteAnimal(id) {
    $.ajax({
        type: "DELETE",
        url: "http://localhost:8080/pets/" + id,
        success: getAllPet
    })
}

function updateAnimal() {
    let id = $('#id').val()
    let name = $('#name').val()
    let age = $('#age').val()
    let kg = $('#kg').val()
    let environment = $('#environment').val()
    let animal = $('#animal').val()

    let pet = {
        id: id,
        name: name,
        age: age,
        kg: kg,
        environment: {
            id: environment
        },
        animal: {
            id: animal
        }
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "PUT",
        url: "http://localhost:8080/pets/"+id,
        data: JSON.stringify(pet),
        success: function () {
            getAllPet()
            // document.getElementById("form").style.display = "none"
        }
    })
    event.preventDefault()

}

function createPet() {
    let name = $('#name').val()
    let age = $('#age').val()
    let kg = $('#kg').val()
    let environment = $('#environment').val()
    let animal = $('#animal').val()
    let pet = {
        name: name,
        age: age,
        kg: kg,
        environment: {
            id: environment
        },
        animal: {
            id: animal
        }
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: "http://localhost:8080/pets",
        data: JSON.stringify(pet),
        success: getAllPet
        // document.getElementById("form").style.display = "none"
    })
    event.preventDefault()

}


function getAllAnimal() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/pets/animal",
        success: function (data) {
            getAllEnvironment(data)
        }
    })
}

function getAllEnvironment(demo) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/pets/environment",
        success: function (data) {
            document.getElementById("form").innerHTML = formCreate(demo, data)
            document.getElementById("form").style.display = "block"
        }
    })
}

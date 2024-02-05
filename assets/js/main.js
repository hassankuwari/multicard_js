
//json//
students = [
    {
        "name": "Hassan",
        "age": 25,
        "class": "BE"
    },
    {
        "name": "Soheb",
        "age": 26,
        "class": "BSC"
    },
    {
        "name": "Sameer",
        "age": 40,
        "class": "KG"
    },
    {
        "name": "Hassan",
        "age": 25,
        "class": "BE"
    },
    {
        "name": "Soheb",
        "age": 26,
        "class": "BSC"
    },
    {
        "name": "Sameer",
        "age": 40,
        "class": "KG"
    },
    {
        "name": "arif",
        "age": 50,
        "class": "HSC"
    },
    {
        "name": "Hassan",
        "age": 25,
        "class": "BE"
    },
    {
        "name": "Soheb",
        "age": 26,
        "class": "BSC"
    },
    {
        "name": "Sameer",
        "age": 40,
        "class": "KG"
    },
    {
        "name": "Sameer",
        "age": 40,
        "class": "KG"
    },
    {
        "name": "maaz",
        "age": 20,
        "class": "PG"
    }
]


// code//

//to fetch json + index of them
students.forEach((item, index) => {
    console.log("single item is", item, index);

});



var studentsList = document.getElementById("students_cards");
students.forEach((item, index) => {
    studentsList.insertAdjacentHTML('beforeend', `<div class="card_container">
    <ul>
        <li>name : ${item.name}</li>
        <li>age :${item.age}</li>
        <li>class :${item.class}</li>
    </ul>
</div>`)

    console.log("single item is", item, index);

});
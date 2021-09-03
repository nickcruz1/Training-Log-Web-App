window.onload = function() {
    // Responsive Hamburger Menu // 
    document.getElementById('menulink').onclick = function() {
        var menu = document.getElementById('menu');
        if(menu.className != 'shownmenu') {
            menu.className = 'shownmenu';
        }
        else {
            menu.className = 'hiddenmenu';
        }
    }

    //   Menu/About Us  // 

    document.getElementById('about').onclick = function() {
        document.getElementById('container').innerHTML = "";
        document.getElementById('btns').innerHTML = "";
        document.getElementById('menu').className = 'hiddenmenu';
        var container = document.getElementById('container');
        var p = document.createElement('p');
        p.id = 'aboutus';
        container.appendChild(p);
        var text = document.createTextNode("This app was created and maintained by Nick Cruz");
        p.appendChild(text);
    }
    var home = document.getElementById('container').innerHTML;
var controls = document.getElementById('btns').innerHTML;
showsavedNote();
document.getElementById('home').onclick = function() {
    document.getElementById('container').innerHTML = home;
    document.getElementById('btns').innerHTML = controls;
    document.getElementById('menu').className = 'hiddenmenu';
    showsavedNote();
}
}


// Local Storage - Check if Browser Supports Local Storage  // 

function checkstorageSupport() {
    if(typeof(Storage) !== "undefined") {
        return(true);
    }
    else {
        alert("Web storage unsupported!");
        return(false);
    }
}

// Retrieves Saved Note // 

function showsavedNote() {
    if(checkstorageSupport() == true) {
        result = localStorage.getItem('note');
    }
    if(result === null) {
        result = "No note saved";
    }
    document.getElementById('area').value = result;
}

// "Save" Button // 

function save() {
    if(checkstorageSupport() == true) {
        var area = document.getElementById("area");
        if(area.value != '') {
            localStorage.setItem("note", area.value);
        }
        else {
            alert("Nothing to save");
        }
    }
}

// "Clear" Button // 

function clear() {
    document.getElementById('area').value = "";
}

// "Display Button" // 

function display() {
    document.getElementById('area').innerHTML = localStorage.getItem("note");
}


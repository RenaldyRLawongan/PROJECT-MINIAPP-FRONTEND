//Show and Hide Form
let btn = document.querySelector('button');
let form = document.querySelector('form');

btn.addEventListener('click' , () =>{
    if(form.style.display === 'none')
    {
      btn.innerText = 'Hide Form Add New Student'
        form.style.display = 'block';
    }else {
      btn.innerText = 'Show Form Add New Student';
        form.style.display = 'none';
    }
})
//Faculty and Program Study
var subjectObject = {
    "Pascasarjana": {
      "Magister Manajemen": [],
      "Magister Teologi": []
    },
    "Fakultas Filsafat": {
      "Ilmu Filsafat": []
    },
    "Fakultas Keguruan dan Ilmu Pendidikan": {
        "Pendidikan Agama": [],
        "Pendidikan Bahasa Inggris": [],
        "Pendidikan Ekonomi": [],
        "Pendidikan Luar Sekolah": []
    },
    "Fakultas Ekonomi dan Bisnis": {
        "Akuntansi": [],
        "Manajemen": []
      },
    "Fakultas Pertanian": {
        "Agroteknologi": []
      },
    "Fakultas Ilmu Komputer": {
        "Informatika": [],
        "Sistem Informasi": []
      },
    "Fakultas Keperawatan": {
        "Profesi Ners": [],
        "Keperawatan": []
      },
    "Akademi Sekretari Manajemen Indonesia Klabat": {
        "Sekretari (D3)": []
      }
  }
  window.onload = function() {
    var subjectSel = document.getElementById("faculty");
    var topicSel = document.getElementById("prodi");
    //var chapterSel = document.getElementById("chapter");
    for (var x in subjectObject) {
      subjectSel.options[subjectSel.options.length] = new Option(x, x);
    }
    subjectSel.onchange = function() {
      //empty Chapters- and Topics- dropdowns
      //chapterSel.length = 1;
      topicSel.length = 1;
      //display correct values
      for (var y in subjectObject[this.value]) {
        topicSel.options[topicSel.options.length] = new Option(y, y);
      }
    }
    topicSel.onchange = function() {
      //empty Chapters dropdown
      chapterSel.length = 1;
      //display correct values
      var z = subjectObject[subjectSel.value][this.value];
      for (var i = 0; i < z.length; i++) {
        chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
      }
    }
  }

// warning
const addstdt = document.querySelector('#add-student');

addstdt.addEventListener('click',()=>{
  let NIM = document.querySelector('#InputNIM').value;
  let Name = document.querySelector('#InputName').value;
  let stdt_faculty = document.querySelector("#faculty").options[document.querySelector("#faculty").selectedIndex].value;
  let stdt_program_study = document.querySelector("#prodi").options[document.querySelector("#prodi").selectedIndex].value;

  //Validation
  if(/^\d+$/.test(NIM) !=true)
  {
    alert("Please Input NIM!");
    return;
  }
  if(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(Name) !=true)
  {
    alert("Please Input Name!");
    return;
  }
  if(stdt_faculty == '')
  {
    alert("Please Input Faculty!");
    return;
  }
  if(stdt_program_study == '')
  {
    alert("Please Input Program of Study!");
    return;
  }
});









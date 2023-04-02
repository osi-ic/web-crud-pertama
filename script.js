const tombol = document.getElementById("tombol");
const daftar = document.getElementById("daftar");
const pesan = document.getElementById("pesan");
const form = document.getElementById("form");

let list = ["pisang", "ayam", "bakpau", "mie ayam", "batagor"];

const showList = () => {
  daftar.innerHTML = "";
  list.map(
    (nama, index) =>
      (daftar.innerHTML += `
      <li>
        <h3>${nama}</h3>
        <button onclick="deleteList(${index})">delete</button>
        <button onclick="editList(${index})">edit</button>
      </li>`)
  );
};

const createList = () => {
  const nama = document.querySelector("#nama").value;

  if (nama == "") {
    return (pesan.innerHTML = "nama tidak boleh kosong");
  }

  list.push(nama);
  pesan.innerHTML = "";
  showList();
};

const deleteList = (id) => {
  const list2 = [];

  const yakin = confirm("Yakin mau dihapus");

  if (!yakin) return;

  list.map((nama, index) => {
    index != id ? list2.push(nama) : "";
  });

  list = list2;
  showList();
};

const editList = (id) => {
  daftar.innerHTML = "";
  form.innerHTML = `
  <h2>Nilai lama : ${list[id]}</h2>
  <input type="text" name="edit" id="edit-input" value="${list[id]}"/>
  <button onclick="editButton(${id})" ">Edit</button>`;
};

const editButton = (id) => {
  const editValue = document.getElementById("edit-input").value;
  if (editValue == "") return (pesan.innerHTML = "nama tidak boleh kosong");

  const yakin = confirm("Yakin mau diedit");
  if (yakin) {
    list[id] = editValue;
  } else {
    return;
  }

  form.innerHTML = `
  <input type="text" name="nama" id="nama" />
  <button onclick="createList()" id="tombol">Send</button>`;
  showList();
};

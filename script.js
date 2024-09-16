async function load() {
  try {
    let response = await fetch("data.json"); // Mengambil data dari data.json
    let data = await response.json(); // Mengubahnya menjadi objek JSON

    console.log(data); // Debugging untuk melihat data yang diambil

    let component = "";

    data.forEach((teman) => {
      component += `
  <main>
   <section class="data-container">
    <div class="id-card">
      <div class="content"> 
        <div class="profile-pic">
        <a href="${teman.web}" target="_blank"><img src="${teman.fotoselfie}" alt="${teman.nama}"></a>
        </div>
        <div class="info">
          <h2>${teman.nama}</h2>
          <h4>${teman.nim}</h4>
          <p class="no"><b>No: </b>${teman.no}</p>
          <p class="location"><b>Alamat:</b> ${teman.alamat}</p>
          <p class="ttl"><b>Ttl:</b> ${teman.ttl}</p>
          <div class="links">
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
      `;
    });

    document.getElementById("data-container").innerHTML += component; // Menambahkan konten baru di dalam #pembungkus
    feather.replace(); // Memastikan feather icons dirender setelah elemen baru ditambahkan
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

load(); // Memanggil fungsi load untuk menjalankan proses

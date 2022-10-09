export function renderContainer(main, res) {
  console.log(res)

  for (var x = 0; x < 114; x++) {
    main.append(`<div class="container" id="`+(x+1)+`">
    <h1>`+res[x]["nama"]+` : `+res[x]["nomor"]+`</h1>
    <h2>`+res[x]["nama_latin"]+`</h2>
    <label>`+res[x]["arti"]+`</label>
    <label>`+res[x]["jumlah_ayat"]+` Ayat</label>
    <div class="playbtn">
      <i class="fa-thin fa-play"></i>
    </div>
  </div>
    `)
  }
}

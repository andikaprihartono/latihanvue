const App = {
  data() {
    return {
      cities: [],
      date: '2021-10-25',
      jadwal: {},
      surah:[]
    }
  },
  methods: {
    praytime() {
      let kota = document.querySelector('#kota');
      let date = document.querySelector('#date');

      console.log(kota)
      axios({
          method: 'get',
          url: `https://api.banghasan.com/sholat/format/json/jadwal/kota/${kota.value}/tanggal/${date.value}`,

        })
        .then((response) => {
          if (response.data.jadwal.data === "kosong") {
            throw 'Kota Tidak Valid';
          }
          this.jadwal = response.data.jadwal.data
        })
        .catch((error) => {
          Swal.fire({
            title:'Error!',
            text: 'Harap isi yang bener',
            icon: 'error'
          })
        })
    },
    surah(){
      let surat = document.querySelector('#surahqur');
    }
  },
computed:{

},
  created() {
    // alert();
    axios({
        method: 'get',
        url: 'https://api.banghasan.com/sholat/format/json/kota',
      })
      .then((response) => {
        // console.log(this.userData)
        this.cities = response.data.kota
      });
  },
  axios({
    method:'get',
    url:'https://api.banghasan.com/quran/format/json/surat',
  })
  .then((response)=>{
this.surah = response.data.
  })
}

Vue.createApp(App).mount('#app')
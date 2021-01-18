import Vue from 'vue'
import Main from './Main.vue'
import router from "./router";

Vue.config.productionTip = false

sessionStorage.setItem(
      "contacts",
      JSON.stringify([
        { id: 0, name: "Валентин Тарасов", phone: "+74950219729" },
        { id: 1, name: "Михаил Трифонов", phone: "+74955736241" },
        { id: 2, name: "Василий Карпов", phone: "+74953287248" },
        { id: 3, name: "Константин Власов", phone: "+74958698377" },
        { id: 4, name: "Георгий Костин", phone: "+74959927121" },
        { id: 5, name: "Карл Ковалёв", phone: "+74959432956" },
        { id: 6, name: "Харитон Сафонов", phone: "+74959432956" },
        { id: 7, name: "Макс Жириновский", phone: "+74955058831" },
        { id: 8, name: "Лев Логунов", phone: "+74952453660" },
        { id: 9, name: "Пётр Якушев", phone: "+74951481954" },
        { id: 10, name: "Дональт Беляков", phone: "+74958698377" },
        { id: 11, name: "Харитон Юдин", phone: "+74959927121" },
        { id: 12, name: "Влад Алексеев", phone: "+74959927121" },
        { id: 13, name: "Антон Николаев", phone: "+74959927121" },
      ])
    );

new Vue({
  router,
  render: h => h(Main),
}).$mount('#app')

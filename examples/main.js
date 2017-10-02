// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueHighlightJS from 'vue-highlightjs'
import Vui from '../src/vui.js'
import App from './Demo'

import DemoButton from './components/DemoButton.vue'
import DemoLayout from './components/DemoLayout.vue'
import DemoMenu from './components/DemoMenu.vue'
import DemoGrid from './components/DemoGrid.vue'
import DemoCard from './components/DemoCard.vue'
import DemoTable from './components/DemoTable.vue'
import DemoPagination from './components/DemoPagination.vue'
import DemoDropdown from './components/DemoDropdown.vue'
import DemoSteps from './components/DemoSteps.vue'
import DemoTag from './components/DemoTag.vue'
import DemoInput from './components/DemoInput.vue'
import DemoInputNumber from './components/DemoInputNumber.vue'
import DemoRadio from './components/DemoRadio.vue'
import DemoCheckbox from './components/DemoCheckbox.vue'
import DemoSelect from './components/DemoSelect.vue'
import DemoCascader from './components/DemoCascader.vue'
import DemoCalendar from './components/DemoCalendar.vue'
import DemoDatePicker from './components/DemoDatePicker.vue'
import DemoTimePicker from './components/DemoTimePicker.vue'
import DemoMessage from './components/DemoMessage.vue'
import DemoNotification from './components/DemoNotification.vue'
import DemoPopup from './components/DemoPopup.vue'
import DemoBackTop from './components/DemoBackTop.vue'
import DemoCarousel from './components/DemoCarousel.vue'
import DemoTabs from './components/DemoTabs.vue'
import DemoUpload from './components/DemoUpload.vue'
import DemoModal from './components/DemoModal.vue'
import DemoForm from './components/DemoForm.vue'
import DemoIndex from './components/DemoIndex.vue'

Vue.use(Vui)
Vue.use(VueHighlightJS)
Vue.use(VueRouter)
const routes = [
  { path: '/components/button', component: DemoButton },
  { path: '/components/menu', component: DemoMenu },
  { path: '/components/layout', component: DemoLayout },
  { path: '/components/grid', component: DemoGrid },
  { path: '/components/card', component: DemoCard },
  { path: '/components/pagination', component: DemoPagination },
  { path: '/components/dropdown', component: DemoDropdown },
  { path: '/components/table', component: DemoTable },
  { path: '/components/step', component: DemoSteps },
  { path: '/components/tag', component: DemoTag },
  { path: '/components/input', component: DemoInput },
  { path: '/components/input-number', component: DemoInputNumber },
  { path: '/components/radio', component: DemoRadio },
  { path: '/components/checkbox', component: DemoCheckbox },
  { path: '/components/select', component: DemoSelect },
  { path: '/components/cascader', component: DemoCascader },
  { path: '/components/calendar', component: DemoCalendar },
  { path: '/components/datepicker', component: DemoDatePicker },
  { path: '/components/timepicker', component: DemoTimePicker },
  { path: '/components/message', component: DemoMessage },
  { path: '/components/notification', component: DemoNotification },
  { path: '/components/popup', component: DemoPopup },
  { path: '/components/backtop', component: DemoBackTop },
  { path: '/components/carousel', component: DemoCarousel },
  { path: '/components/tabs', component: DemoTabs },
  { path: '/components/upload', component: DemoUpload },
  { path: '/components/modal', component: DemoModal },
  { path: '/components/form', component: DemoForm },
  { path: '/components/index', component: DemoIndex },
  { path: '/', component: DemoIndex }
]
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
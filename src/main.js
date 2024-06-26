import './assets/scss/index.scss';
import 'primevue/resources/themes/lara-light-green/theme.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import App from '@/components/App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import ProgressSpinner from 'primevue/progressspinner';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Card from 'primevue/card';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Textarea from 'primevue/textarea';
import Chips from 'primevue/chips';
import ColorPicker from 'primevue/colorpicker';

import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Dialog from 'primevue/dialog';

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(router);
app.use(pinia);
app.use(PrimeVue);
app.use(ToastService);

app.component('Button', Button);
app.component('Spiner', ProgressSpinner);
app.component('InputText', InputText);
app.component('InputNumber', InputNumber);
app.component('Toast', Toast);
app.component('Card', Card);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);
app.component('Textarea', Textarea);
app.component('Column', Column);
app.component('DataTable', DataTable);
app.component('Dialog', Dialog);
app.component('Chips', Chips);
app.component('ColorPicker', ColorPicker);

app.mount('#app');

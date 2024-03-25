import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import API from '@/services/portfolio-api';

export const usePortfolioStore = defineStore(
  'portfolio',
  () => {
    const toast = useToast();

    // общие данные 
    const dataPortfolio = ref(null);
    const loading = ref(false);
    const error = ref('');
     // linkServer
     const loadingLinkServer = ref(false);
     const errorLinkServer = ref('');
     // linkClient
     const loadingLinkClient = ref(false);
     const errorLinkClient = ref('');
     // aboutText
     const loadingAboutText = ref(false);
     const errorAboutText = ref('');

    // общие данные 
    function setDataPortfolio(data) {
      dataPortfolio.value = data;
    };
    function setLoading(payload) {
      loading.value = payload;
    };
    function setError(payload) {
      error.value = payload;
    };
    // linkServer
    function setLoadingLinkServer(payload) {
      loadingLinkServer.value = payload;
    };
    function setErrorLinkServer(payload) {
      errorLinkServer.value = payload;
    };
    // linkClient
    function setLoadingLinkClient(payload) {
      loadingLinkClient.value = payload;
    };
    function setErrorLinkClient(payload) {
      errorLinkClient.value = payload;
    };
    // aboutText
    function setLoadingAboutText(payload) {
      loadingAboutText.value = payload;
    };
    function setErrorAboutText(payload) {
      errorAboutText.value = payload;
    };

    async function getDataPortfolio() {
      try {
        setLoading(true);
        const { data } = await API.fetchAllPortfolio();

        if (data === undefined) {
          throw new Error('Server Error!');
        } else {
          setLoading(false);
          setError('');
          setDataPortfolio(data);
        }
      } catch (error) {
        setLoading(false);
        setError(error.message);
        toast.add({ severity: 'error', summary: 'Ошибка', detail: error.message, life: 5000 });
      }
    };

    async function changeLinkServer(linkServer) {
      try {
        setLoadingLinkServer(true);
        const { _id } = dataPortfolio.value.links;
   
        const { data } = await API.changeLinkServer(linkServer, _id);

        if (data === undefined) {
          throw new Error('Server Error!');
        } else {
          setLoadingLinkServer(false);
          setErrorLinkServer('');

          // меняем ключ linkServer в стейте
          const newData = {...dataPortfolio.value}
          newData.links.linkServer = data.result.linkServer;
          setDataPortfolio(newData);

          toast.add({
            severity: 'success',
            summary: 'Данные успешно изменены',
            life: 5000
          });
        }
      } catch (error) {
        setLoadingLinkServer(false);
        setErrorLinkServer(error.message);

        toast.add({ 
          severity: 'error', 
          summary: 'Ошибка', 
          detail: error.message, 
          life: 5000 
        });
      }
    };

    async function changeLinkClient(linkClient) {
      try {
        setLoadingLinkClient(true);
        const { _id } = dataPortfolio.value.links;
   
        const { data } = await API.changeLinkClient(linkClient, _id);

        if (data === undefined) {
          throw new Error('Server Error!');
        } else {
          setLoadingLinkClient(false);
          setErrorLinkClient('');

          // меняем ключ linkClient в стейте
          const newData = {...dataPortfolio.value}
          newData.links.linkClient = data.result.linkClient;
          setDataPortfolio(newData);

          toast.add({
            severity: 'success',
            summary: 'Данные успешно изменены',
            life: 5000
          });
        }
      } catch (error) {
        setLoadingLinkClient(false);
        setErrorLinkClient(error.message);

        toast.add({ 
          severity: 'error', 
          summary: 'Ошибка', 
          detail: error.message, 
          life: 5000 
        });
      }
    };

    async function changeAboutText(aboutText) {
      try {
        setLoadingAboutText(true);
        const { _id } = dataPortfolio.value.texts;
   
        const { data } = await API.changeAboutText(aboutText, _id);

        if (data === undefined) {
          throw new Error('Server Error!');
        } else {
          setLoadingAboutText(false);
          setErrorAboutText('');

          // меняем ключ aboutText в стейте
          const newData = {...dataPortfolio.value}
          newData.texts.aboutText = data.result.aboutText;
          setDataPortfolio(newData);

          toast.add({
            severity: 'success',
            summary: 'Данные успешно изменены',
            life: 5000
          });
        }
      } catch (error) {
        setLoadingAboutText(false);
        setErrorAboutText(error.message);

        toast.add({ 
          severity: 'error', 
          summary: 'Ошибка', 
          detail: error.message, 
          life: 5000 
        });
      }
    };

    return {
      dataPortfolio,
      loading,
      getDataPortfolio,
      loadingLinkServer,
      changeLinkServer,
      loadingLinkClient,
      changeLinkClient,
      loadingAboutText,
      changeAboutText,
    };
  }
);

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
     // footerText
     const loadingFooterText = ref(false);
     const errorFooterText = ref('');
     // project
     const loadingProject = ref(false);
     const errorProject = ref('');

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
    // footerText
    function setLoadingFooterText(payload) {
      loadingFooterText.value = payload;
    };
    function setErrorFooterText(payload) {
      errorFooterText.value = payload;
    };
    // project
    function setLoadingProject(payload) {
      loadingProject.value = payload;
    };
    function setErrorProject(payload) {
      errorProject.value = payload;
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

    async function changeFooterText(footerText) {
      try {
        setLoadingFooterText(true);
        const { _id } = dataPortfolio.value.texts;
   
        const { data } = await API.changeFooterText(footerText, _id);

        if (data === undefined) {
          throw new Error('Server Error!');
        } else {
          setLoadingFooterText(false);
          setErrorFooterText('');

          // меняем ключ footerText в стейте
          const newData = {...dataPortfolio.value}
          newData.texts.footerText = data.result.footerText;
          setDataPortfolio(newData);

          toast.add({
            severity: 'success',
            summary: 'Данные успешно изменены',
            life: 5000
          });
        }
      } catch (error) {
        setLoadingFooterText(false);
        setErrorFooterText(error.message);

        toast.add({ 
          severity: 'error', 
          summary: 'Ошибка', 
          detail: error.message, 
          life: 5000 
        });
      }
    };

    async function addProject(projectData) {
      try {
        setLoadingProject(true);

        const { data } = await API.addProject(projectData);

        if (data === undefined) {
          throw new Error('Server Error!');
        } else {
          setLoadingProject(false);
          setErrorProject('');

          // Добавляем новый элемент в массив и подставляем в project
          const newProject = [...dataPortfolio.value.projects, data.result];
          const newData = {...dataPortfolio.value};
          newData.projects = newProject;
          setDataPortfolio(newData);

          toast.add({
            severity: 'success',
            summary: 'Данные успешно добавлены',
            life: 5000
          });
        }
      } catch (error) {
        setLoadingProject(false);
        setErrorProject(error.message);
        toast.add({ 
          severity: 'error', 
          summary: 'Ошибка', 
          detail: error.message, 
          life: 5000 
        });
      }
    };

    async function changeProject({ 
      name, 
      description, 
      link, 
      linkFiles, 
      preText, 
      tehnology, 
      backgroundColor,
      picture,
      _id 
    }) {
      try {
        setLoadingProject(true);

        const { data } = await API.changeProject({ 
          name, 
          description, 
          link, 
          linkFiles, 
          preText, 
          tehnology, 
          backgroundColor,
          picture 
        }, _id);

        if (data === undefined) {
          throw new Error('Server Error!');
        } else {
          setLoadingProject(false);
          setErrorProject('');

          // Находим нужный элемент в project и заменяем его
          const newProject = dataPortfolio.value.projects.reduce((acc, item) => {
            if (item._id === data.result._id) {
              acc.push(data.result);
            } else {
              acc.push(item);
            }
            return acc;
          }, []);
          
          const newData = {...dataPortfolio.value};
          newData.projects = newProject;
          setDataPortfolio(newData);

          toast.add({
            severity: 'success',
            summary: 'Данные успешно изменены',
            life: 5000
          });
        }
      } catch (error) {
        setLoadingProject(false);
        setErrorProject(error.message);
        toast.add({ 
          severity: 'error', 
          summary: 'Ошибка', 
          detail: error.message, 
          life: 5000 
        });
      }
    };

    async function exportImageProject(file, id) {
      try {
        setLoadingProject(true);

        let formData = new FormData();
        formData.append('picture', file);

        const { data } = await API.exportImageProject(formData, id);
        
        if (data === undefined) {
          throw new Error('Server Error!');
        } else {
          setLoadingProject(false);
          setErrorProject('');

          // меняем picture в projects в стейте
          const newData = {...dataPortfolio.value}
          newData.projects.forEach(el => {
            if (el._id === id) {
              el.picture = data.picture;
              return
            }
          });
          setDataPortfolio(newData);

          toast.add({
            severity: 'success',
            summary: 'Успешно загрузили файл',
            life: 5000
          });

          return data
        }
      } catch ({ message }) {
        setLoadingProject(false);
        setErrorProject(message);

        toast.add({ 
          severity: 'error', 
          summary: 'Ошибка', 
          detail: message, 
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
      loadingFooterText,
      changeFooterText,
      loadingProject,
      changeProject,
      addProject,
      exportImageProject,
    };
  }
);

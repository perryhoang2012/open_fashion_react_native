import Toast from 'react-native-toast-message';

export const toast = (
  text: string,
  type: string = 'success',
  duration?: number,
  text2?: string,
) => {
  let toastType = type;
  if (type === 'warning' || type === 'info') {
    toastType = 'info';
  }
  if (type === 'danger' || type === 'error') {
    toastType = 'error';
  }

  return Toast.show({
    text1: text,
    text2,
    autoHide: true,
    type: toastType,
    visibilityTime: duration || 1000,
  });
};

export const errorToast = (error: any, title?: string) => {
  if (error?.response?.status === 401) {
  }
  if (error?.response?.status === 413) {
  }
  if (error?.response?.data?.message) {
  } else {
  }

  if (error.message === 'Network Error') {
    toast('Network disconnect', 'danger', 10000);
  } else {
    toast(title || '', 'danger', 5000);
  }
};

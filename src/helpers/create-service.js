export function createService(apiFunction) {
  return (mutation, cb) => {
    return async (apiFunctionData) => {
      if (mutation) {
        mutation.pending();
      }
      try {
        const data = await apiFunction({
          jsonData: apiFunctionData?.jsonData,
          recaptchaKey: apiFunctionData?.recaptchaKey,
        }).then((r) => r.data);
        if (mutation) {
          mutation.fulfilled(data);
        }
        if (cb.onSuccess) {
          cb.onSuccess(data);
        }
        return true;
      } catch (error) {
        if (mutation) {
          mutation.rejected(error);
        }
        if (cb.onError) {
          cb.onError(error);
        }
        return false;
      }
    };
  };
}

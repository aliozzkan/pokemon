export function createService(apiFunction) {
  const defaultServiceCallback = {
    onSuccess: () => {},
    onError: () => {},
  };

  return function (mutation, cb) {
    return async function (apiFunctionData) {
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
        console.log(error);
        return false;
      }
    };
  };
}

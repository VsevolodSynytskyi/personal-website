const environment: undefined | "production" | "development" = (() => {
  switch (process.env.NODE_ENV) {
    case "development":
      return "development";
      break;

    case "production":
      return "production";
      break;
    default:
      return undefined;
  }
})();

export default environment;

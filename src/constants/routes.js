const routes = {
  root: "/",
  main: "/main",
  // auth
  get login() {
    return `/login`;
  },
  //
  get dashboard() {
    return `${this.main}/dashboard`;
  },
  get dashboardSummary() {
    return `${this.dashboard}/summary`;
  },
  get dashboardExpends() {
    return `${this.dashboard}/expends`;
  },
  get dashboardAdditions() {
    return `${this.dashboard}/additions`;
  },
  //
  get settings() {
    return `${this.main}/settings`;
  }
}

export default Object.freeze(routes);
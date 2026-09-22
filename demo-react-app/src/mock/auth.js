const mockBff = {
  getSession: () =>
    new Promise((resolve) => {
      resolve({
          // this is all the data that the Home view requires for its widgets
          isAuthenticated: false,
          user: null
      });
    }),
  login: (opts) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
          if(opts && opts.shouldFail) {
            reject(new Error("Server login failed"));
            return;
          }
          resolve({
              // this is all the data that the Home view requires for its widgets
              isAuthenticated: true,
              user: { 
                  firstName: "Tim", 
                  lastName: "Shepherd", 
                  isManager: true 
              }
          });
      }, 900); // pretend network latency
    }),
  logout: () =>
    new Promise((resolve) => {
      resolve({
          // this is all the data that the Home view requires for its widgets
          isAuthenticated: false,
          user: null
      });
    })
};
export {mockBff};
import axios from "axios";

const HTTP = axios.create();

export const getUsersService = () => {
     return new Promise((resolve, reject) => {
          HTTP.get("https://jsonplaceholder.typicode.com/users")
               .then((data) => {
                    if (!data) {
                         reject("mensagem de error");
                    } else {
                         resolve(data);
                    }
               })
               .catch((error) => {
                    reject(error);
               });
     });
};

export const getRandomUserService = () => {
     return new Promise((resolve, reject) => {
          HTTP.get("https://reqres.in/api/users?page=2")
               .then((data) => {
                    if (!data) {
                         reject("mensagem de error");
                    } else {
                         resolve(data);
                    }
               })
               .catch((error) => {
                    reject(error);
               });
     });
};

export const getUserGithubService = () => {
     return new Promise((resolve, reject) => {
          HTTP.get("https://api.github.com/orgs/angular/public_members")
               .then((data) => {
                    if (!data) {
                         reject("mensagem de error");
                    } else {
                         resolve(data);
                    }
               })
               .catch((error) => {
                    reject(error);
               });
     });
};

export const getHolidaysService = (year: number) => {
     return new Promise((resolve, reject) => {
          HTTP.get(`https://brasilapi.com.br/api/feriados/v1/${year}`)
               .then((data) => {
                    if (!data) {
                         reject("mensagem de error");
                    } else {
                         resolve(data);
                    }
               })
               .catch((error) => {
                    reject(error);
               });
     });
};

export const getBrokersService = (year: number) => {
     return new Promise((resolve, reject) => {
          HTTP.get(`https://brasilapi.com.br/api/cvm/corretoras/v1`)
               .then((data) => {
                    if (!data) {
                         reject("mensagem de error");
                    } else {
                         resolve(data);
                    }
               })
               .catch((error) => {
                    reject(error);
               });
     });
};

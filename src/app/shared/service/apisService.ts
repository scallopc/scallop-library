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
          HTTP.get("https://randomuser.me/api/?results=80")
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

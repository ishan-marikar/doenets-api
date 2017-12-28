const axios = require("axios");

const BASE_URL = "http://www.doenets.lk/result/service";
let instance = axios.create({
  baseURL: BASE_URL
});

module.exports = {
  getOLResults(indexNumber) {
    let http = instance.get(`/OlResult/${indexNumber}`);
    return http
      .then(response => {
        let data = response.data;
        if (data["errMsge"]) {
          return Promise.reject(data["errMsge"]);
        } else {
          return Promise.resolve({
            indexNumber: indexNumber,
            name: data.name,
            examination: {
              type: data.examination,
              year: data.year
            },
            results: {
              subjects: data.subjectResults
            }
          });
        }
      })
      .catch(error => {
        return Promise.reject(error);
      });
  },
  getALResults(indexNumber) {
    let http = instance.get(`/AlResult/${indexNumber}`);
    return http
      .then(response => {
        let data = response.data;
        if (data["errMsge"]) {
          return Promise.reject(data["errMsge"]);
        } else {
          return Promise.resolve({
            indexNumber: data.indexNo,
            name: data.name,
            stream: data.stream,
            examination: {
              type: data.examination,
              year: data.year
            },
            results: {
              districtRank: data.districtRank,
              islandRank: data.islandRank,
              zScore: data.zScore,
              subjects: data.subjectResults
            }
          });
        }
      })
      .catch(error => {
        return Promise.reject(error);
      });
  },
  getGrade5Results(indexNumber) {
    let http = instance.get(`GvResult/${indexNumber}`);
    return http
      .then(response => {
        let data = response.data;
        if (data["errMsge"]) {
          return Promise.reject(data["errMsge"]);
        } else {
          return Promise.resolve({
            indexNumber: data.indexNo,
            name: data.name,
            examination: {
              type: data.examination,
              year: data.year
            },
            results: {
              districtRank: data.districtRank,
              islandRank: data.islandRank,
              marks: data.marks
            }
          });
        }
      })
      .catch(error => {
        return Promise.reject(error);
      });
  },
  getCurrentExams() {
    let http = instance.get(`/examDetails`);
    return http
      .then(response => {
        let data = response.data;
        return Promise.resolve({
          OL: {
            name: data.desOlResult,
            year: data.yearOlResult
          },
          AL: {
            name: data.desAlResult,
            year: data.yearAlResult
          },
          GradeV: {
            name: data.desGvResult,
            year: data.yearGvResult
          }
        });
      })
      .catch(error => {
        return Promise.reject(error);
      });
  }
};

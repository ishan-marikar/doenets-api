const axios = require("axios");
const rax = require("retry-axios");

const BASE_URL = "http://www.doenets.lk/result/service";

let instance = axios.create({
  baseURL: BASE_URL
});

instance.defaults = {
  raxConfig: {
    instance: instance,
    retry: Number.MAX_SAFE_INTEGER,
    noResponseRetries: Number.MAX_SAFE_INTEGER
  }
};
rax.attach(instance);

module.exports = {
  async getOLResults(indexNumber) {
    try {
      let response = await instance.get(`/OlResult/${indexNumber}`);
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
    } catch (exception) {
      return Promise.resolve(exception);
    }
  },
  async getALResults(indexNumber) {
    try {
      let response = await instance.get(`/AlResult/${indexNumber}`);
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
    } catch (exception) {
      return Promise.resolve(exception);
    }
  },
  async getGrade5Results(indexNumber) {
    try {
      let response = await instance.get(`/GvResult/${indexNumber}`);
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
    } catch (exception) {
      return Promise.resolve(exception);
    }
  },
  async getCurrentExams() {
    try {
      let response = await instance.get(`/examDetails`);
      let data = response.data;
      if (data["errMsge"]) {
        return Promise.reject(data["errMsge"]);
      } else {
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
      }
    } catch (exception) {
      return Promise.resolve(exception);
    }
  }
};

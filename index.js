const { LocalStorage } = require('node-localstorage');
const uuid = require('uuid');
const cloneDeep = require('lodash.clonedeep');
const dotenv = require('dotenv');

dotenv.config();

class StellarStormStorage {
  constructor() {
    this.storage = new LocalStorage('./data');
  }

  async setItem(key, value) {
    return new Promise((resolve, reject) => {
      try {
        const serializedValue = JSON.stringify(value);
        this.storage.setItem(key, serializedValue);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  }

  async getItem(key) {
    return new Promise((resolve, reject) => {
      try {
        const value = this.storage.getItem(key);
        resolve(value ? JSON.parse(value) : null);
      } catch (error) {
        reject(error);
      }
    });
  }

  async removeItem(key) {
    return new Promise((resolve, reject) => {
      try {
        this.storage.removeItem(key);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  }

  async clear() {
    return new Promise((resolve, reject) => {
      try {
        this.storage.clear();
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  }
}

module.exports = StellarStormStorage;

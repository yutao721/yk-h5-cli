const axios = require('axios');

// 拦截全局请求响应
axios.interceptors.response.use((res) => {
  return res.data;
});

/**
 * 获取模板
 * @returns Promise
 */
async function getZhuRongRepo() {
  return axios.get('https://api.github.com/repo/yutao721/h5-vue3-template');
}

/**
 * 获取仓库下的版本
 * @param {string} repo 模板名称
 * @returns Promise
 */
async function getTagsByRepo(repo) {
  return axios.get(`https://api.github.com/repos/yutao721/${repo}/tags`);
}

module.exports = {
  getZhuRongRepo,
  getTagsByRepo
};

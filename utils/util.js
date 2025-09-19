const utils = {
  formatDate: function (utcTimeString) {
    const beijingDate = new Date(utcTimeString);
    const year = beijingDate.getFullYear();
    const month = String(beijingDate.getMonth() + 1).padStart(2, "0"); // 月份从 0 开始
    const day = String(beijingDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  },
};
export default utils;

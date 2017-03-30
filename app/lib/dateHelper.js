import moment from 'moment';

module.exports = {
    getCurrentMonth() {
      return moment().format('MMMM');
    },

    getCurrentMonthYear() {
      return moment().format('MMMMYYYY');
    },

    getNextMonth() {
      return moment().add(1, 'month').format('MMMM');
    },

    getNextMonthYear() {
      return moment().add(1, 'month').format('MMMMYYYY');
    },

    getPreviousMonth() {
      return moment().subtract(1, 'month').format('MMMM');
    },

    getPreviousMonthYear() {
      return moment().subtract(1, 'month').format('MMMMYYYY');
    }
}

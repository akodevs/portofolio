var config = require('../environment');

module.exports = function() {
	//require('./delete_all')(initializeAllData());
  if(config.resetData) {
    resetData();
  } else { 
    initializeAllData();
  }
};

function resetData() { 
  require('./delete_all')(initializeAllData());  
}

function initializeAllData() {
  console.log('Initializing data in mongoDB');
	require('./bears')(); 
} 

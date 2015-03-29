// ==========================================
// Check APP Cache
// ==========================================

var APP  = APP || {};
APP.Cache = {
  setUp: function() {
    this.handlerUpdate();
  },

  handlerUpdate: function() {
    var that, appCache;

    that = this;
    appCache = window.applicationCache;

    appCache.addEventListener('cached', that.handleCachedEvent, false);
    appCache.addEventListener('checking', that.handleCacheChecking, false);
    appCache.addEventListener('downloading', that.handleCacheDownloading, false);
    appCache.addEventListener('error', that.handleCacheError, false);
    appCache.addEventListener('noupdate', that.handleCacheNoupdate, false);
    appCache.addEventListener('obsolete', that.handleCacheObsolete, false);
    appCache.addEventListener('progress', that.handleCacheProgress, false);
    appCache.addEventListener('updateready', that.handleCacheUpdateready, false);
  },

  handleCachedEvent: function() {
    console.log(event);
  },

  handleCacheChecking: function() {
    console.log(event);
  },

  handleCacheDownloading: function() {
    console.log(event);
  },

  handleCacheError: function() {
    console.warn(error);
  },

  handleCacheNoupdate: function() {
    console.log(event);
  },

  handleCacheObsolete: function() {
    console.log(event);
  },

  handleCacheProgress: function() {
    console.log(event);
  },

  handleCacheUpdateready: function() {
    var appCache = window.applicationCache;

    appCache.swapCache();

    if (confirm('Existe uma nova versão para este site, deseja atualizar?')) {
      window.location.reload(); // refresh page to apply new updates
    } else {
      // nothing
    }
  }
};

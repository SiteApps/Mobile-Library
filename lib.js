var isPhone = {
    AndroidPhone: function() {
        return navigator.userAgent.match(/Android/i) && navigator.userAgent.match(/Mobile/i) ? true : false;
    },
    BlackBerryPhone: function() {
        return navigator.userAgent.match(/BlackBerry/i) ? true : false;
    },
    iOSPhone: function() {
        return navigator.userAgent.match(/iPhone/i) ? true : false;
    },
    WindowsPhone: function() {
        return navigator.userAgent.match(/IEMobile/i) && navigator.userAgent.match(/Tablet/) ? false : true;
    },
    anyPhone: function() {
        return (isPhone.AndroidPhone() || isPhone.BlackBerryPhone() || isPhone.iOSPhone() || isPhone.WindowsPhone());
   }
};

var isTablet = {
    AndroidTablet: function() {
        return navigator.userAgent.match(/Android/i) && navigator.userAgent.match(/Mobile/i) ? false : true;
    },
    BlackBerryTablet: function() {
        return navigator.userAgent.match(/PlayBook/i) ? true : false;
    },
    iOSTablet: function() {
        return navigator.userAgent.match(/iPad/i) ? true : false;
    },
    WindowsTablet: function() {
        return navigator.userAgent.match(/IEMobile/i) && navigator.userAgent.match(/Tablet/) ? true : false;
    },
    anyTablet: function() {
        return (isTablet.AndroidTablet() || isTablet.BlackBerryTablet() || isTablet.iOSTablet() || isTablet.WindowsTablet());
    }
};

var isMobile = {
    AndroidMobile: function() {
        return navigator.userAgent.match(/Android/i) ? true : false;
    },
    BlackBerryMobile: function() {
        return navigator.userAgent.match(/BlackBerry/i) ? true : false;
    },
    iOSMobile: function() {
        return navigator.userAgent.match(/iPad|iPod|iPhone/i) ? true : false;
    },
    WindowsMobile: function() {
        return navigator.userAgent.match(/IEMobile/i) ? true : false;
    },
    anyMobile: function() {
        return (isMobile.AndroidMobile() || isMobile.BlackBerryMobile() || isMobile.iOSMobile() || isMobile.WindowsMobile());
    }
};
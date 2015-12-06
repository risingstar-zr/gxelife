'use strict';
var Wiz = Wiz || {};
Wiz.Constant = {
    Default : {
        DOC_CATEGORY: '/My Notes/',
        DOC_TITLE: 'no title',
        COOKIE_EXPIRE_SEC: 14 * 24 * 60 * 60,
        TOKEN_EXPIRE_SEC: 3 * 60,
        REFRESH_TOKEN_TIME_MS: 4 * 60 * 1000,
        CATEGORY_EXPIRE_SEC: 10 * 60,

        XMLURL : 'http://service.wiz.cn/wizkm/xmlrpc',
        API_URL: 'http://api.wiz.cn/?p=wiz&c=openapi_url',
        NOTE_URL: 'http://note.wiz.cn',
        WEBCLIENT_URL: 'https://note.wiz.cn/web',
        UPDATEClient_URL: 'http://blog.wiz.cn/wiz-faq-npapi.html',
        REGISTER_URL: 'https://note.wiz.cn/login?p=reg',

        COOKIE_URL : 'http://service.wiz.cn/web',
        COOKIE_USER: 'wiz-clip-user',
        COOKIE_CERT: 'wiz-clip-cert',
        COOKIE_LAST_CATEGORY: 'wiz-last-category',
        COOKIE_CATEGORY: 'wiz-all-category',
        COOKIE_CATEGORY_TIME: 'wiz-category-stored-time',
        PREVIEW_OVER_TIME_MS: 5000,                           //30秒超时
        SAVE_TYPE: 'wiz-save-type'
    },

    Service: {
        QUERY_TIME_ARRAY: [5, 5, 10, 20, 20, 20, 20, 20, 20, 20]
    },

    LOGIN_PARAMS: {
        CLIENT_TYPE: 'webclip_chrome',
        API_VERSION: 3
    },

    API : {
        ACCOUNT_LOGIN: 'accounts.clientLogin',
        ACCOUNT_KEEPALIVE: 'accounts.keepAlive',
        ACCOUNT_GETOKEN: 'accounts.getToken',
        GET_AllCATEGORIES: 'category.getAll',
        GET_ALLTAGS: 'tag.getList',
        DOCUMENT_POSTSIMPLE: 'document.postSimpleData'
    },
    ListenType : {
        SERVICE: 'wiz_service',
        CONTENT: 'wiz_content',
        POPUP: 'wiz_popup'
    }
};


//var cookieUrl = 'http://service.wiz.cn/web',
//    cookieName = 'wiz-clip-auth',
//    cookieExpiredays = 14 * 24 * 60 * 60,
//    updateClientUrl = 'http://blog.wiz.cn/wiz-faq-npapi.html';
//
//apiUrl: 'http://api.wiz.cn/?p=wiz&c=openapi_url',
//    openapiUrl : '',
//    betaUrl: 'http://note.wiz.cn',
//    cookieUrl : 'http://service.wiz.cn/web',
//    cookieName : 'wiz-clip-auth',
//    cookie_category: 'wiz-all-category',
//    cookie_category_time: 'wiz-category-stored-time',
//    category_expireSec:  10 * 60,
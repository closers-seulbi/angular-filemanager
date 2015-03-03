/*!
 * Angular FileManager v0.8 (https://github.com/joni2back/angular-filemanager)
 * Jonas Sciangula Street <joni2back@gmail.com>
 * Licensed under MIT (https://github.com/joni2back/angular-filemanager/blob/master/LICENSE)
 */

FileManagerApp.constant("$config", {
    appName: "angular-filemanager",
    listUrl: "/hosting/filemanager/listdirectory",
    uploadUrl: "/hosting/filemanager/upload",

    renameUrl: "/hosting/filemanager/item/rename",
    copyUrl: "/hosting/filemanager/item/copy",
    removeUrl: "/hosting/filemanager/item/remove",
    editUrl: "/hosting/filemanager/item/edit",
    getContentUrl: "/hosting/filemanager/item/content/get",
    createFolderUrl: "/hosting/filemanager/item/folder/create",
    downloadFileUrl: "/hosting/filemanager/item/download",
    compressUrl: "/hosting/filemanager/item/compress",
    extractUrl: "/hosting/filemanager/item/extract",

    isEditableFilePattern: '\\.(txt|html|htm|aspx|asp|ini|pl|py|md|php|css|js|log|htaccess|htpasswd|json)$',
    isImageFilePattern: '\\.(jpg|jpeg|gif|bmp|png|svg|tiff)$',
    isExtractableFilePattern: '\\.(zip|gz|tar|rar|gzip)$'
});
# NOTES FOR HTACCESS FILE 
## need this for paths set up in router files to work on web server. Otherwise get 404s due to •	PathLocationStrategy used by default with Angular vs HashLocationStrategy

RewriteEngine on
RewriteCond %{REQUEST_FILENAME} -s [OR]
RewriteCond %{REQUEST_FILENAME} -l [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^.*$ - [NC,L]

RewriteRule ^(.*) /index.html [NC,L]
<?php
if (preg_match('/\.(?:png|json|js|css)$/', $_SERVER["REQUEST_URI"])) {
    return false;    // serve the requested resource as-is.
}
else{
    include('./index.php');
}

<?php
/**
 * Plugin Name: Custom Script Loader
 * Description: Enqueues a custom JavaScript file.
 */

// Hook into 'wp_enqueue_scripts' to add scripts to the front end.
add_action('wp_enqueue_scripts', function () {
    // URL of the script to be enqueued.
    $script_url = get_option('custom_script_url');

    // Enqueue the script.
    wp_enqueue_script('custom-remote-script', $script_url, array(), null, true);
});
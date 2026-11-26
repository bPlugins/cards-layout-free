<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Whether Pro features are available on this site.
 *
 * The license check sits inside an is__premium_only() block, which Freemius removes when it
 * generates the free version, so the free plugin contains no license-check code.
 */
function phclbIsPremium()
{
    

    return false;
}

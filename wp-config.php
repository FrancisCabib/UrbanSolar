<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'urbansolar' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'A$sUPGN-L|.&ng~2Ts/VcWfiu8h<8e(zcm}b?c]YtpJ/5~k#R;BVaVb]j;{Ayk*`' );
define( 'SECURE_AUTH_KEY',  '&P<pUG=>DM]@+3r@~+nor[>zCCc}tT+th1[K}tflw />v+p8{mI~C)KAGE 4g!(6' );
define( 'LOGGED_IN_KEY',    'S=?1)++R*JM8nsvA`J0aU&6HLp6H.GS~YY8p^y7+{Om`y%1pHL@TuC+?xkCaDAd+' );
define( 'NONCE_KEY',        '<b6Ogg&Y=twO.`nom0._|vy :8-GaxOVuhDr9!e:o_[W|m^UqGqp%gR42e1D@Cho' );
define( 'AUTH_SALT',        'Iz;.4;n3-WK;I@oCKaz;K[1l.-J-$+{:>L`Q0W1 t`@D/A$mgFYjwlfw9LY~M+bP' );
define( 'SECURE_AUTH_SALT', 'XuVtA39DnU5[$!,.@Z90!iAQe.d@0>nX+TVuDoXL.!XkASO_4kOyE5rLDHxiv}#K' );
define( 'LOGGED_IN_SALT',   'X3T;W@/1cFRM27U<,3R}|3ny0F9J(SOu~dqb*k<y/GS3XV BHbtl~~+L3(FvdfbW' );
define( 'NONCE_SALT',       'WqTnG8tgidAK1bGRR#S4;:24O4ClD8$X$vx_ObX]rY@FP[R2f}7>sZC6#GlZkqc-' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

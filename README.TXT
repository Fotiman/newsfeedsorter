
    News Feed Sorter (for Facebook)
    Author: Peter Foti


Revision History:
===================
1.0.2 (2017-07-09)
 * Added an additional attempt to sort 3 seconds after state change to try and
   catch when the old state is still loaded.
   
1.0.1 (2017-07-08)
 * Only search for the back to top link to determine whether to sort. Fixes
   bug where multiple (stale) sort links exist on the page.

1.0.0 (2017-07-07)
 * Initial release
 * This extension only operates on the "Home" page.
 

Comments:
===================
 * This extension is in no way associated with Facebook.
 * The source code for this extension is available here:
 https://github.com/Fotiman/newsfeedsorter
 * The source code for this extension is completely free with MIT License:
 https://github.com/Fotiman/newsfeedsorter/blob/master/LICENSE



*******************************************************************************
*
*    Files:
*
*******************************************************************************

background.js
-------------------
Contains the logic for communicating with the content script, and showing the
page action.


sortredirect.js
-------------------
Runs in the context of the web page.  Contains the logic for finding the
current sort and refreshing the page with the settings that cause it to sort
by MOST RECENT if it's not already.


manifest.json
-------------------
This file defines the resources and permissions used by this extension.


README.TXT
-------------------
This text file.


128x128.png
64x64.png
48x48.png
32x32.png
19x19.png
16x16.png
-------------------
The icons that appears in the address bar when this extension is in use. Icons
also used in Chrome store.
Commercial free icons from https://freeiconshop.com/icon/list-icon-flat/
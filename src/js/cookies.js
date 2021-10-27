window.addEventListener('load', function(){
    // obtain cookieconsent plugin
    var cookieconsent = initCookieConsent();

    // run plugin with config object
    cookieconsent.run({
        autorun : true,
        current_lang : 'en',
        autoclear_cookies : true,
        page_scripts: true,
        onAccept: function(cookie){ },
        onChange: function(cookie, changed_preferences){ },
        languages : {
            en : {
                consent_modal : {
                    title :  "This site uses cookies",
                    description :  'We use cookies to ensure this site\'s proper operation and, if you approve, tracking cookies to understand how you interact with it. If you wish to opt-out from the use of cookies please see our <a aria-label="Cookie policy" class="cc-link" href="/privacy-policy">Cookies Policy.</a>',
                    primary_btn: { text: 'Accept', role: 'accept_all' },
                    secondary_btn: { text : 'Settings...', role : 'settings' }
                },
                settings_modal : {
                    title : 'Cookie options',
                    save_settings_btn : "Save settings",
                    accept_all_btn : "Accept all",
                    reject_all_btn : "Reject all",
                    cookie_table_headers : [
                        {col1: "Name" },
                        {col2: "Domain" },
                        {col3: "Expiration" },
                        {col4: "Description" },
                        {col5: "Type" }
                    ],
                    blocks : [
                        {
                            title : "Cookie usage",
                            description: 'We use cookies to ensure the basic functionality of the website and to enhance your online experience. You can opt-in/out of receiving non-essential cookies.'
                        },{
                            title : "Strictly necessary cookies",
                            description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly.',
                            toggle : {
                                value : 'necessary',
                                enabled : true,
                                readonly: true
                            }
                        }
                    ]
                }
            }
        }
    });
});

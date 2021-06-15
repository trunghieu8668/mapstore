import React from 'react';

const MessengerChat = () => {
  const setFacebookMessage = () => {
    return {
      __html: `<!-- Load Facebook SDK for JavaScript -->
      <div id="fb-root"></div>
      <script>
        window.fbAsyncInit = function() {
          FB.init({
            xfbml: true,
            version: 'v10.0'
          });
        };

        (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));</script>

      <!-- Your Chat Plugin code -->
      <div class="fb-customerchat"
        attribution="setup_tool"
        page_id="113663837490091">
      </div>`,
    };
  };
  return (
    <>
      <div dangerouslySetInnerHTML={setFacebookMessage()} />
    </>
  );
};

export default MessengerChat;
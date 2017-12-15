import React, { Component } from 'react';
import YoutubeLive from 'youtube-live-react'

class YoutubeFrame extends Component {
  render(){
    return(
      <YoutubeLive
				iframeWidth={960}
				iframeHeight={451}
				maxResults={2}
        youtubeChannelId='UCzVghQNZU5NF7t0gNjjReqQ'
        googleApiKey='AIzaSyDEBrS5t5UAhDblgSF832VeldXnC0AC_Vk'
      />

    )
  }
}

export default YoutubeFrame;

import React, { Component } from 'react';
import YoutubeLive from 'youtube-live-react'

class YoutubeFrame extends Component {
  render(){
    return(
      <YoutubeLive
				iframeWidth={960}
				iframeHeight={451}
				maxResults={2}
				youtubeChannelId='UCVeETS7uZTAARqvv2zssZCw'
				googleApiKey='UCzVghQNZU5NF7t0gNjjReqQ'
      />

    )
  }
}

export default YoutubeFrame;

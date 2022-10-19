import React from 'react';
// import '../../App.css';
import Credentials from '../../Service/service';
import { models } from 'powerbi-client';
import { PowerBIEmbed } from 'powerbi-client-react';


function Home() {
  const { workspaceID, reportID, applicationID, applicationSecret, accessToken, displayName, embedUrl } = Credentials;
  console.log('HOmePage');
  return (
    <div style={{width:"100%"}}>
      {/* <h1>Home Page</h1> */}
      <PowerBIEmbed style={{width:"100%" , height:"1024px"}}
      cssClassName = { "report-style-class" }
        embedConfig={{
          type: 'report',
          id: reportID,
          pageName: displayName,
          embedUrl: embedUrl,
          accessToken: accessToken, // access token if user authentication is implemented
          tokenType: models.TokenType.Aad,
          settings: {
            filterPaneEnabled: false,
            navContentPaneEnabled: false,
          },
        }}
        getEmbeddedComponent={(embeddedReport) => {
          window.report = embeddedReport;
        }}
      />
    </div>
  );
}

export default Home;

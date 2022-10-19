// import React from 'react';
// // import '../../App.css';

// function Reports() {
//     console.log('Reportspage');

//   return (
//     <div >
//       <h1>Reports</h1>
//     </div>
//   );
// }

// export default Reports;


import React from 'react';
// import '../../App.css';
import Credentials2 from '../../Service/service';
import { models } from 'powerbi-client';
import { PowerBIEmbed } from 'powerbi-client-react';


function Reports() {
  const { workspaceID, reportID, applicationID, applicationSecret, accessToken, displayName, embedUrl } = Credentials2;
  console.log('HOmePage');
  return (
    <div style={{width:"100%"}}>
      {/* <h1>Reports Page</h1> */}
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

export default Reports;

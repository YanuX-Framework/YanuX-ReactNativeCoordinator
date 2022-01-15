import React, { useRef } from 'react';
import { WebView } from 'react-native-webview';

const exampleUserId = '5e879dc892bb3a6fd92d3c00';
const exampleSelectedResourceId = '5e84f4950f5de41614105259';
const exampleResources = [
  {
    id: '5e8264de675b5b44325d8dff', owner: 'developer0@yanux.org',
    user: { id: '5e879dc892bb3a6fd92d3c00', email: 'developer0@yanux.org' },
    default: true,
    sharedWith: [
      { id: '5e879dc892bb3a6fd92d3c10', email: 'user10@yanux.org' },
      { id: '5e879dc892bb3a6fd92d3c11', email: 'user11@yanux.org' },
      { id: '5e879dc892bb3a6fd92d3c12', email: 'user12@yanux.org' }
    ]
  },
  {
    id: '5e84f4950f5de41614105259', owner: 'test_user_0@yanux.org',
    user: { id: '5e879dc892bb3a6fd92d3c01', email: 'test_user_0@yanux.org' },
    name: 'Room #1', default: false,
    sharedWith: [
      { id: '5e879dc892bb3a6fd92d3c10', email: 'user10@yanux.org' },
      { id: '5e879dc892bb3a6fd92d3c11', email: 'user11@yanux.org' },
      { id: '5e879dc892bb3a6fd92d3c12', email: 'user12@yanux.org' }
    ]
  },
  { id: '5e879dc892bb3a6fd92d3c15', owner: 'user1@yanux.org', name: 'Room #2', default: false }
];

const ResourceManagementElementWebViewComponent = () => {
  const webViewRef = useRef(null);
  const run = `update('${exampleUserId}', '${exampleSelectedResourceId}', '${JSON.stringify(exampleResources)}');`;

  setInterval(() => {
     console.log('[ResourceManagementElementWebViewComponent] JavaScript Injection')
     webViewRef.current.injectJavaScript(run);
  }, 5000);

  return (
    <WebView
      ref={webViewRef}
      source={{ uri: 'https://albuquerques.net/yanux/coordinator/resource-management-element.html' }}
      injectedJavaScript={run}
      onMessage={(event) => {
        const eventData = JSON.parse(event.nativeEvent.data);
        alert('Event Type: ' + eventData.eventType);
      }} />
  );
}

export default ResourceManagementElementWebViewComponent;
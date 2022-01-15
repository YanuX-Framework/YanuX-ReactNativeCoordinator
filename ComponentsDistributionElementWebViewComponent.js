import React, { useRef } from 'react';
import { WebView } from 'react-native-webview';

const exampleInstance = '5e1f1f35167afc2aaa1515b1';
const exampleComponentsDistribution = {
    '5e1f1f35167afc2aaa1515b0': {
        name: 'Instance 1',
        device: { uuid: '9ab8e750-bc1e-11e8-a769-3f2e91eebf08', name: 'Laptop' },
        auto: true,
        components: { 'Video Call': true, 'Camera': false, 'Chat Messages': false, 'Chat Input': false }
    },

    '5e1f1f35167afc2aaa1515b1': {
        name: 'Instance 2',
        device: { uuid: '9ab8e750-bc1e-11e8-a769-3f2e91eebf08', name: 'Laptop' },
        auto: true,
        components: { 'Video Call': false, 'Camera': true, 'Chat Messages': false, 'Chat Input': false }
    },

    '5e1f1f35167afc2aaa1515b2': {
        name: 'Instance 1',
        device: { uuid: '9ab8e750-bc1e-11e8-a769-3f2e91eebf09', name: 'Tablet' },
        auto: true,
        components: { 'Video Call': false, 'Camera': false, 'Chat Messages': true, 'Chat Input': false }
    },

    '5e1f1f35167afc2aaa1515b3': {
        name: 'Instance 1',
        device: { uuid: '9ab8e750-bc1e-11e8-a769-3f2e91eebf10', name: 'Smartphone' },
        auto: true,
        components: { 'Video Call': false, 'Camera': false, 'Chat Messages': false, 'Chat Input': true }
    }
};

const ComponentsDistributionElementWebViewComponent = () => {
const webViewRef = useRef(null);
  const run = `update('${exampleInstance}', '${JSON.stringify(exampleComponentsDistribution)}');`;

  setInterval(() => {
     console.log('[ComponentsDistributionElementWebViewComponent] JavaScript Injection')
     webViewRef.current.injectJavaScript(run);
  }, 5000);

  return (
    <WebView
      ref={webViewRef}
      source={{ uri: 'https://albuquerques.net/yanux/coordinator/components-distribution-element.html' }}
      injectedJavaScript={run}
      onMessage={(event) => {
        const eventData = JSON.parse(event.nativeEvent.data);
        alert('Event Type: ' + eventData.eventType);
      }} />
  );
}

export default ComponentsDistributionElementWebViewComponent;
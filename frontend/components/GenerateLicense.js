import React from 'react';

const GenerateLicense = ({state}) => {
  let JSONCode = {
  "@context": {
    "dct": "http://purl.org/dc/terms",
    "contentType": "http://purl.org/dc/dcmitype/",
    "schema": "http://schema.org/",
    "candidate": "http://schema.org/name",
    "candidateUrl": {
      "@id": "http://schema.org/url",
      "@type": "@id"
    },
    "owner": "http://schema.org/name",
    "ownerUrl": {
      "@id": "http://schema.org/url",
      "@type": "@id"
    },
  },
  "dct:title" : state.contentName,
  "contentType": state.contentType,
  "candidate": state.candidateName,
  "candidateUrl": state.candidateUrl,
  "owner": state.ownerName,
  "ownerUrl": state.ownerUrl,
  "rateType": state.rateType,
  "rate": state.rate,
  "currency": state.currency,
  "licenseType": state.shareable === 'Yes' ? 'Distribute' : 'Use',
  "paymentPointer": state.paymentPointer
}
  if(state.owner === 'No') {
    // set authorUrl
    JSONCode["ownerName"] = state.ownerName;
    JSONCode["ownerUrl"] = state.ownerUrl;
    JSONCode["licenseType"] = 'Distribute'
  }
  JSONCode = JSON.stringify(JSONCode);
  const script = `<script type="application/ld+json">${JSONCode}</script>`
  return (
    <div className="generate-license text-center">
      <h1>All done! Your license is generated!</h1>
      <p> Copy this code to monetize your content ethically and legally. Paste this into your head. </p>
      <textarea value={script} contentEditable={false}></textarea>
    </div>
  )
}

export default GenerateLicense;

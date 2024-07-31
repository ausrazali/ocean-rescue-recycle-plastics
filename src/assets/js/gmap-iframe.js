const orgMaps = {
    australia1: {
        name: "Australia - Australian Marine Conservation Society (Australia)",
        iframe: "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.792870281897!2d153.0146393!3d-27.4757071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9150a7628c68e1%3A0x6639d6bda8cf56f5!2sAustralian%20Marine%20Conservation%20Society!5e0!3m2!1sen!2smy!4v1722032344498!5m2!1sen!2smy\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>"
    },
    brazil1: {
        name: "Brazil - Oceana",
        iframe: "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.2503355585213!2d-47.91100919999999!3d-15.794406200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3bfe315a9ac3%3A0x1a4302a3d936979a!2sOceana%20Brasil!5e1!3m2!1sen!2smy!4v1722032707642!5m2!1sen!2smy\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>"
    },
    chile1: {
        name: "Chile - Fundación Meri",
        iframe: "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.3820902760312!2d-70.57799829999999!3d-33.3885369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c8d4f0d5af67%3A0x6e9ce1a11b04108e!2sAv.%20Luis%20Pasteur%205842%2C%20Vitacura%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e1!3m2!1sen!2smy!4v1722032732040!5m2!1sen!2smy\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>"
    },
    indonesia1: {
        name: "Indonesia - Coral Triangle Initiative",
        iframe: "<iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1825.443384147118!2d124.8941354!3d1.5000716!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32870a9cddb693f3%3A0x818e51bc94f1b3a9!2sCTI%20CENTRE%20(Coral%20Triangle%20Initiative)!5e1!3m2!1sen!2smy!4v1722032762944!5m2!1sen!2smy\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>"
    },
    malaysia1: {
        name: "Malaysia - Reef Check",
        iframe: "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.5895257301063!2d101.71448!3d3.1587906999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37b7fad72ff9%3A0xf8a9f8cc8f3e0c2d!2sReef%20Check%20Malaysia!5e1!3m2!1sen!2smy!4v1722032789575!5m2!1sen!2smy\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>"
    },
    newzealand1: {
        name: "New Zealand - Sustainable Coastlines",
        iframe: "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2922.8029283297346!2d174.7546906!3d-36.841329699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47c263fbe54d%3A0x817c9649bdd89f2d!2sSustainable%20Coastlines!5e1!3m2!1sen!2smy!4v1722032813450!5m2!1sen!2smy\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>"
    },
    southafrica1: {
        name: "South Africa - South African Association for Marine Biological Research",
        iframe: "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.9933023179724!2d31.04089707529471!3d-29.869571323188765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7a850c839415d%3A0xf0d7fd4f47ce4b22!2sSouth%20African%20Association%20for%20Marine%20Biological%20Research(SAAMBR)!5e1!3m2!1sen!2smy!4v1722032922334!5m2!1sen!2smy\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>"
    },
    southafrica2: {
        name: "South Africa - Two Oceans Aquarium",
        iframe: "<iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6062.1884555752895!2d18.4156924!3d-33.9063423!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc675ac2aae67d%3A0x22e9e91b89b46897!2sTwo%20Oceans%20Aquarium!5e1!3m2!1sen!2smy!4v1722032949756!5m2!1sen!2smy\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>"
    },
    span1: {
        name: "Spain - Oceana (European HQ)",
        iframe: "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.3311364251745!2d-3.7084433999999997!3d40.4220743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228652d848793%3A0x702cb67f0def915!2sOceana%20in%20Europe!5e1!3m2!1sen!2smy!4v1722032977292!5m2!1sen!2smy\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>"
    },
    uk1: {
        name: "UK - Marine Conservation Society",
        iframe: "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2252.061869688549!2d-2.5685656!3d51.928672899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41700256a0e3ac1b%3A0xe099638eebfe805d!2sMarine%20Conservation%20Society!5e1!3m2!1sen!2smy!4v1722033003673!5m2!1sen!2smy\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>"
    },
    usa1: {
        name: "USA - Oceana (Global & US HQ)",
        iframe: "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2842.1186188489482!2d-77.03934799999999!3d38.903324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7c7be3947f7%3A0xef08c22d589b667c!2sOCEANA!5e1!3m2!1sen!2smy!4v1722033063602!5m2!1sen!2smy\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>"
    },
    usa2: {
        name: "USA - The Ocean Foundation",
        iframe: "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2841.9275839309053!2d-77.04367649999999!3d38.908096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7c7ec091767%3A0x724bf67a60b8e9de!2sThe%20Ocean%20Foundation!5e1!3m2!1sen!2smy!4v1722033101291!5m2!1sen!2smy\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>"
    },
}

const ul = document.querySelector('#major-orgs-locations');
        
for (const key in orgMaps) {
    // check if property belong to the object itself
    if (orgMaps.hasOwnProperty(key)) {
        const items = orgMaps[key];
        const orgName = items.name;
        
        const li = document.createElement('li');
        li.className = "dark-translucent-bg toggle-translucent-bg c-pointer";
    
        const div = document.createElement('div');
        div.setAttribute('onclick', `getMapLocation(\"${key}\")`);
        // div.className =`getMapLocation("${key}")`);
        div.textContent = orgName;
    
        li.appendChild(div);
        ul.appendChild(li);
    }
}

function getMapLocation (orgName) {
    displayResourcesList (contactCountryList);
    const iframeContainer = document.querySelector('#google-map-frame');
    iframeContainer.innerHTML = '';

    for (const key in orgMaps) {
        // check if property belong to the object itself
        if (orgMaps.hasOwnProperty(key)) {
            if (key === orgName) {
                const items = orgMaps[key];
                const iframe = items.iframe;

                iframeContainer.innerHTML = iframe;
                break;
            }
        }
    }
}
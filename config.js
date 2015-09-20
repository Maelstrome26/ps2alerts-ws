var config = {
    serviceID: 'yourcensusserviceID',
    extendedAPIKey: 'yougetthisfromjhett12321',
    serverPort: 1337,
    database : {
        primary : {
            host: '123.456.789.0',
            user: 'dbUser',
            pass: 'dbPass',
            name: 'dbname'
        },
        cache : {
            host: '123.456.789.0',
            user: 'dbUser',
            pass: 'dbPass',
            name: 'dbname'
        }
    },
    toggles : {
        metagame: true, // Allows tracking of alerts
        jaeger: true, // Allows messages from the event server Jaeer.
        combat: true, // Enables tracking combat
        facilitycontrol: true, // Enables map tracking
        vehicledestroy: true, // Enables vehicle destruction tracking
        populationchange: true, // Enables population numbers tracking provided by Jhett
        xpmessage: true, // Enables XP tracking (requires more work)
        classStats: true, // Enables Class Statistitcs tracking
        achievements: false // Enables Achievement tracking
    },
    debug : {
        achievements: false,
        actives: true,
        API: true,
        auth: false,
        batch: false,
        census: false,
        charFlags: false,
        charID: false,
        classes: false,
        clients: false,
        combat: false,
        datadump: false,
        duplicates: false,
        facility: true,
        instances: true,
        jaeger: true,
        metagame: false,
        perf: false,
        population: false,
        responses: false,
        resultID: true,
        status: true,
        time: false,
        upcoming: true,
        vehicles: false,
        weapons: true,
        xpmessage: false,
    }
};

var supplementalConfig = {
    worlds : {
        1: 'Connery',
        10: 'Miller',
        13: 'Cobalt',
        17: 'Emerald',
        19: 'Jaeger',
        25: 'Briggs',
        1000: 'Genudine (PS4US)',
        1001: 'Palos (PS4US)',
        1002: 'Crux (PS4US)',
        1003: 'Searhus (PS4US)',
        1004: 'Xelas (PS4US)',
        2000: 'Ceres (PS4EU)',
        2001: 'Lithcorp (PS4EU)',
        2002: 'Rashnu (PS4EU)'
    }
};

exports.getConfig = function () {
    return config;
};

exports.getSupplementalConfig = function () {
    return supplementalConfig;
};
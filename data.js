var APP_DATA = {
  "scenes": [
    {
      "id": "0-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.22664450090979216,
        "pitch": 0.0024302878934996386,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": -2.8345052262915207,
          "pitch": 0.13258279520395533,
          "rotation": 6.283185307179586,
          "target": "1-entry"
        },
        {
          "yaw": 2.8403206839141077,
          "pitch": 0.057057404314750926,
          "rotation": 0,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entry",
      "name": "Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2993777910698583,
          "pitch": 0.1176814098189567,
          "rotation": 0,
          "target": "2-dining"
        },
        {
          "yaw": -0.7660584595780904,
          "pitch": 0.08602036981780614,
          "rotation": 1.5707963267948966,
          "target": "4-pooja"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining",
      "name": "Dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.26880740841765594,
          "pitch": 0.2264346953983356,
          "rotation": 0,
          "target": "1-entry"
        },
        {
          "yaw": 0.6275797020202063,
          "pitch": 0.1172940563381264,
          "rotation": 1.5707963267948966,
          "target": "0-living"
        },
        {
          "yaw": -0.9740736373424248,
          "pitch": 0.1893005512344299,
          "rotation": 0,
          "target": "3-wash"
        },
        {
          "yaw": -2.80258506768053,
          "pitch": 0.2882958921510319,
          "rotation": 7.853981633974483,
          "target": "4-pooja"
        },
        {
          "yaw": -2.0111795232938263,
          "pitch": 0.10724638823500854,
          "rotation": 0,
          "target": "5-kitchen"
        },
        {
          "yaw": -1.3013786343700282,
          "pitch": 0.02257747220373929,
          "rotation": 5.497787143782138,
          "target": "10-upper-living"
        },
        {
          "yaw": -3.1261351509739015,
          "pitch": 0.0872634053053325,
          "rotation": 0,
          "target": "9-gf-master-bedroom"
        },
        {
          "yaw": 2.8400859938405594,
          "pitch": 0.1193992801751591,
          "rotation": 4.71238898038469,
          "target": "7-gf-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-wash",
      "name": "Wash",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3208235509185808,
          "pitch": 0.1354859882740609,
          "rotation": 0,
          "target": "2-dining"
        },
        {
          "yaw": -0.7806101687164002,
          "pitch": 0.056756120847826,
          "rotation": 1.5707963267948966,
          "target": "4-pooja"
        },
        {
          "yaw": -0.4532545738240845,
          "pitch": 0.1219419689539123,
          "rotation": 0,
          "target": "5-kitchen"
        },
        {
          "yaw": 0.4605957281517039,
          "pitch": 0.0992314797903262,
          "rotation": 5.497787143782138,
          "target": "10-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-pooja",
      "name": "Pooja",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4296818866180825,
          "pitch": 0.23035506884829715,
          "rotation": 0,
          "target": "2-dining"
        },
        {
          "yaw": 0.1257670964876958,
          "pitch": 0.11673776495862853,
          "rotation": 0,
          "target": "1-entry"
        },
        {
          "yaw": 2.9995630631558683,
          "pitch": 0.14660981625250535,
          "rotation": 0,
          "target": "9-gf-master-bedroom"
        },
        {
          "yaw": 1.691843707731099,
          "pitch": 0.18914740564160404,
          "rotation": 0,
          "target": "7-gf-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.36655806152024084,
          "pitch": 0.18940629404136544,
          "rotation": 0,
          "target": "6-work-area"
        },
        {
          "yaw": 2.6609129262930606,
          "pitch": -0.03166404626284347,
          "rotation": 0,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-work-area",
      "name": "Work Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.19981157628537005,
          "pitch": 0.33493958522887013,
          "rotation": 0,
          "target": "5-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-gf-bedroom",
      "name": "GF Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.4533949048307893,
        "pitch": 0.03917716752635769,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": -3.0941341676768754,
          "pitch": 0.12152187919717683,
          "rotation": 0,
          "target": "2-dining"
        },
        {
          "yaw": 0.6039989912382033,
          "pitch": 0.20606402700089,
          "rotation": 0,
          "target": "7-gf-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-gf-bedroom",
      "name": "GF Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.8677479769367711,
        "pitch": -0.031617714067992964,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": -0.8579969822348161,
          "pitch": 0.3564747796904548,
          "rotation": 0,
          "target": "7-gf-bedroom"
        },
        {
          "yaw": -1.039688195226299,
          "pitch": -0.20981486192088283,
          "rotation": 0,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-gf-master-bedroom",
      "name": "GF Master Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.8575998454921505,
        "pitch": 0.001911412948587099,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": 1.6253506058648295,
          "pitch": 0.10200012137688219,
          "rotation": 0,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-upper-living",
      "name": "Upper Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.23185847311686558,
        "pitch": 0.026282050800856993,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": 1.9845388869990703,
          "pitch": 0.28436072837958726,
          "rotation": 4.71238898038469,
          "target": "2-dining"
        },
        {
          "yaw": -0.4027677065771922,
          "pitch": 0.3756042235442827,
          "rotation": 0,
          "target": "11-upper-living"
        },
        {
          "yaw": -0.30559000350810095,
          "pitch": -0.01432381982828268,
          "rotation": 0,
          "target": "12-ff-guest-bedroom"
        },
        {
          "yaw": -0.9512623630692101,
          "pitch": 0.08359580515179488,
          "rotation": 0,
          "target": "13-ff-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-upper-living",
      "name": "Upper Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.46804468453492554,
        "pitch": 0.0003100643969311534,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": -0.2344350854095154,
          "pitch": 0.16227273111125484,
          "rotation": 0,
          "target": "10-upper-living"
        },
        {
          "yaw": -2.9815253663888495,
          "pitch": 0.018618550556364966,
          "rotation": 0,
          "target": "12-ff-guest-bedroom"
        },
        {
          "yaw": 0.4669744726391798,
          "pitch": 0.11867285271839023,
          "rotation": 1.5707963267948966,
          "target": "13-ff-master-bedroom"
        },
        {
          "yaw": -1.0994414734086,
          "pitch": 0.1269245744480898,
          "rotation": 0,
          "target": "15-ff-kids-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-ff-guest-bedroom",
      "name": "FF Guest Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.908393972478983,
        "pitch": 0.06788183580315987,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": 2.684817230984697,
          "pitch": 0.11093396424342039,
          "rotation": 0,
          "target": "11-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-ff-master-bedroom",
      "name": "FF Master Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4699710581004428,
          "pitch": -0.0523084211446605,
          "rotation": 1.5707963267948966,
          "target": "10-upper-living"
        },
        {
          "yaw": -2.6183883912210195,
          "pitch": 0.18596803902995873,
          "rotation": 0,
          "target": "14-ff-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-ff-master-bedroom",
      "name": "FF Master Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.16678241609453082,
          "pitch": 0.27711069820002265,
          "rotation": 0,
          "target": "13-ff-master-bedroom"
        },
        {
          "yaw": 0.11913931107932818,
          "pitch": -0.0475828076357967,
          "rotation": 1.5707963267948966,
          "target": "10-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-ff-kids-bedroom",
      "name": "FF Kids Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.975200172365632,
          "pitch": 0.1245173154996344,
          "rotation": 0,
          "target": "11-upper-living"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Renjith Residence",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};

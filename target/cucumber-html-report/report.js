$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("developer.feature");
formatter.feature({
  "line": 1,
  "name": "Life of IT Developer",
  "description": "\r\nIn order to get good salary\r\nAs a IT guy\r\nI want to keep my boss happy",
  "id": "life-of-it-developer",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 8,
  "name": "I am a Java developer",
  "description": "",
  "id": "life-of-it-developer;i-am-a-java-developer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@javaDev"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I work in microsoft",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I meet Bill Gates",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I hesitate",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "he is a good person",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "microsoft",
      "offset": 10
    }
  ],
  "location": "HolyDeveloper.I_am(String)"
});
formatter.result({
  "duration": 102102003,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bill Gates",
      "offset": 7
    }
  ],
  "location": "HolyDeveloper.I_meet(String)"
});
formatter.result({
  "duration": 118820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hesitate",
      "offset": 2
    }
  ],
  "location": "HolyDeveloper.I_(String)"
});
formatter.result({
  "duration": 113688,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "good",
      "offset": 8
    }
  ],
  "location": "HolyDeveloper.He_is_a(String)"
});
formatter.result({
  "duration": 105398,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "I am a Linux developer",
  "description": "",
  "id": "life-of-it-developer;i-am-a-linux-developer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@linuxDev"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I work in Apple",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I meet Steve Jobs",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I scream",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "he is a wise person",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Apple",
      "offset": 10
    }
  ],
  "location": "HolyDeveloper.I_am(String)"
});
formatter.result({
  "duration": 164611,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Steve Jobs",
      "offset": 7
    }
  ],
  "location": "HolyDeveloper.I_meet(String)"
});
formatter.result({
  "duration": 92766,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "scream",
      "offset": 2
    }
  ],
  "location": "HolyDeveloper.I_(String)"
});
formatter.result({
  "duration": 93950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wise",
      "offset": 8
    }
  ],
  "location": "HolyDeveloper.He_is_a(String)"
});
formatter.result({
  "duration": 87239,
  "status": "passed"
});
formatter.uri("tester.feature");
formatter.feature({
  "line": 1,
  "name": "Life of IT Tester",
  "description": "\r\nIn order to get good salary\r\nAs a IT guy\r\nI want to keep my boss happy",
  "id": "life-of-it-tester",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "I am a tester",
  "description": "",
  "id": "life-of-it-tester;i-am-a-tester",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@tester"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am a \"\u003cTesterType\u003e\" tester",
  "rows": [
    {
      "cells": [
        "industry",
        "country"
      ],
      "line": 10
    },
    {
      "cells": [
        "IT",
        "India"
      ],
      "line": 11
    },
    {
      "cells": [
        "Automobile",
        "Germany"
      ],
      "line": 12
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I got to work",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I \"\u003cWork_Output\u003e\" it",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "My boss \"\u003cBoss_Action\u003e\" me",
  "rows": [
    {
      "cells": [
        "Country"
      ],
      "line": 17
    },
    {
      "cells": [
        "India"
      ],
      "line": 18
    },
    {
      "cells": [
        "Germany"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "The developer \"\u003cDeveloper_Reaction\u003e\" me",
  "keyword": "But "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "life-of-it-tester;i-am-a-tester;",
  "rows": [
    {
      "cells": [
        "TesterType",
        "Work_Output",
        "Boss_Action",
        "Developer_Reaction"
      ],
      "line": 23,
      "id": "life-of-it-tester;i-am-a-tester;;1"
    },
    {
      "cells": [
        "Good",
        "Complete",
        "Salutes",
        "hates"
      ],
      "line": 24,
      "id": "life-of-it-tester;i-am-a-tester;;2"
    },
    {
      "cells": [
        "Bad",
        "Mess",
        "Fires",
        "likes"
      ],
      "line": 25,
      "id": "life-of-it-tester;i-am-a-tester;;3"
    },
    {
      "cells": [
        "avg",
        "sufficient",
        "congrats",
        "respects"
      ],
      "line": 26,
      "id": "life-of-it-tester;i-am-a-tester;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "I am a tester",
  "description": "",
  "id": "life-of-it-tester;i-am-a-tester;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@tester"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am a \"Good\" tester",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "industry",
        "country"
      ],
      "line": 10
    },
    {
      "cells": [
        "IT",
        "India"
      ],
      "line": 11
    },
    {
      "cells": [
        "Automobile",
        "Germany"
      ],
      "line": 12
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I got to work",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I \"Complete\" it",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "My boss \"Salutes\" me",
  "matchedColumns": [
    2
  ],
  "rows": [
    {
      "cells": [
        "Country"
      ],
      "line": 17
    },
    {
      "cells": [
        "India"
      ],
      "line": 18
    },
    {
      "cells": [
        "Germany"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "The developer \"hates\" me",
  "matchedColumns": [
    3
  ],
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Good",
      "offset": 8
    }
  ],
  "location": "HolyTester.I_am_a_bad_tester(String,DataTable)"
});
formatter.result({
  "duration": 1290437,
  "status": "passed"
});
formatter.match({
  "location": "HolyTester.I_got_to_work()"
});
formatter.result({
  "duration": 63555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Complete",
      "offset": 3
    }
  ],
  "location": "HolyTester.I_mess_with_it(String)"
});
formatter.result({
  "duration": 113688,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Salutes",
      "offset": 9
    }
  ],
  "location": "HolyTester.My_boss_fires_me(String,DataTable)"
});
formatter.result({
  "duration": 187901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hates",
      "offset": 15
    }
  ],
  "location": "HolyTester.The_developer_likes_me(String)"
});
formatter.result({
  "duration": 136978,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "I am a tester",
  "description": "",
  "id": "life-of-it-tester;i-am-a-tester;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@tester"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am a \"Bad\" tester",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "industry",
        "country"
      ],
      "line": 10
    },
    {
      "cells": [
        "IT",
        "India"
      ],
      "line": 11
    },
    {
      "cells": [
        "Automobile",
        "Germany"
      ],
      "line": 12
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I got to work",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I \"Mess\" it",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "My boss \"Fires\" me",
  "matchedColumns": [
    2
  ],
  "rows": [
    {
      "cells": [
        "Country"
      ],
      "line": 17
    },
    {
      "cells": [
        "India"
      ],
      "line": 18
    },
    {
      "cells": [
        "Germany"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "The developer \"likes\" me",
  "matchedColumns": [
    3
  ],
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Bad",
      "offset": 8
    }
  ],
  "location": "HolyTester.I_am_a_bad_tester(String,DataTable)"
});
formatter.result({
  "duration": 245535,
  "status": "passed"
});
formatter.match({
  "location": "HolyTester.I_got_to_work()"
});
formatter.result({
  "duration": 58029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mess",
      "offset": 3
    }
  ],
  "location": "HolyTester.I_mess_with_it(String)"
});
formatter.result({
  "duration": 97898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fires",
      "offset": 9
    }
  ],
  "location": "HolyTester.My_boss_fires_me(String,DataTable)"
});
formatter.result({
  "duration": 163032,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "likes",
      "offset": 15
    }
  ],
  "location": "HolyTester.The_developer_likes_me(String)"
});
formatter.result({
  "duration": 80924,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "I am a tester",
  "description": "",
  "id": "life-of-it-tester;i-am-a-tester;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@tester"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am a \"avg\" tester",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "industry",
        "country"
      ],
      "line": 10
    },
    {
      "cells": [
        "IT",
        "India"
      ],
      "line": 11
    },
    {
      "cells": [
        "Automobile",
        "Germany"
      ],
      "line": 12
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I got to work",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I \"sufficient\" it",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "My boss \"congrats\" me",
  "matchedColumns": [
    2
  ],
  "rows": [
    {
      "cells": [
        "Country"
      ],
      "line": 17
    },
    {
      "cells": [
        "India"
      ],
      "line": 18
    },
    {
      "cells": [
        "Germany"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "The developer \"respects\" me",
  "matchedColumns": [
    3
  ],
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "avg",
      "offset": 8
    }
  ],
  "location": "HolyTester.I_am_a_bad_tester(String,DataTable)"
});
formatter.result({
  "duration": 248297,
  "status": "passed"
});
formatter.match({
  "location": "HolyTester.I_got_to_work()"
});
formatter.result({
  "duration": 52896,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sufficient",
      "offset": 3
    }
  ],
  "location": "HolyTester.I_mess_with_it(String)"
});
formatter.result({
  "duration": 94345,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "congrats",
      "offset": 9
    }
  ],
  "location": "HolyTester.My_boss_fires_me(String,DataTable)"
});
formatter.result({
  "duration": 155532,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "respects",
      "offset": 15
    }
  ],
  "location": "HolyTester.The_developer_likes_me(String)"
});
formatter.result({
  "duration": 103820,
  "status": "passed"
});
});
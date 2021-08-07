Search.appendIndex(
    [
                {
            "fqsen": "\\LaunchDarkly\\EvaluationDetail",
            "name": "EvaluationDetail",
            "summary": "An\u0020object\u0020that\u0020combines\u0020the\u0020result\u0020of\u0020a\u0020flag\u0020evaluation\u0020with\u0020an\u0020explanation\u0020of\u0020how\u0020it\u0020was\u0020calculated.",
            "url": "classes/LaunchDarkly-EvaluationDetail.html"
        },                {
            "fqsen": "\\LaunchDarkly\\EvaluationDetail\u003A\u003A__construct\u0028\u0029",
            "name": "__construct",
            "summary": "EvaluationDetail\u0020constructor.",
            "url": "classes/LaunchDarkly-EvaluationDetail.html#method___construct"
        },                {
            "fqsen": "\\LaunchDarkly\\EvaluationDetail\u003A\u003AgetValue\u0028\u0029",
            "name": "getValue",
            "summary": "Returns\u0020the\u0020value\u0020of\u0020the\u0020flag\u0020variation\u0020for\u0020the\u0020user.",
            "url": "classes/LaunchDarkly-EvaluationDetail.html#method_getValue"
        },                {
            "fqsen": "\\LaunchDarkly\\EvaluationDetail\u003A\u003AgetVariationIndex\u0028\u0029",
            "name": "getVariationIndex",
            "summary": "Returns\u0020the\u0020index\u0020of\u0020the\u0020flag\u0020variation\u0020for\u0020the\u0020user,\u0020e.g.\u00200\u0020for\u0020the\u0020first\u0020variation\u0020\u002D\nor\u0020null\u0020if\u0020it\u0020was\u0020the\u0020default\u0020value.",
            "url": "classes/LaunchDarkly-EvaluationDetail.html#method_getVariationIndex"
        },                {
            "fqsen": "\\LaunchDarkly\\EvaluationDetail\u003A\u003AgetReason\u0028\u0029",
            "name": "getReason",
            "summary": "Returns\u0020information\u0020about\u0020how\u0020the\u0020flag\u0020value\u0020was\u0020calculated.",
            "url": "classes/LaunchDarkly-EvaluationDetail.html#method_getReason"
        },                {
            "fqsen": "\\LaunchDarkly\\EvaluationDetail\u003A\u003AisDefaultValue\u0028\u0029",
            "name": "isDefaultValue",
            "summary": "Returns\u0020true\u0020if\u0020the\u0020flag\u0020evaluated\u0020to\u0020the\u0020default\u0020value,\u0020rather\u0020than\u0020one\u0020of\u0020its\u0020variations.",
            "url": "classes/LaunchDarkly-EvaluationDetail.html#method_isDefaultValue"
        },                {
            "fqsen": "\\LaunchDarkly\\EvaluationReason",
            "name": "EvaluationReason",
            "summary": "Describes\u0020the\u0020reason\u0020that\u0020a\u0020flag\u0020evaluation\u0020produced\u0020a\u0020particular\u0020value.",
            "url": "classes/LaunchDarkly-EvaluationReason.html"
        },                {
            "fqsen": "\\LaunchDarkly\\EvaluationReason\u003A\u003Aoff\u0028\u0029",
            "name": "off",
            "summary": "Creates\u0020a\u0020new\u0020instance\u0020of\u0020the\u0020OFF\u0020reason.",
            "url": "classes/LaunchDarkly-EvaluationReason.html#method_off"
        },                {
            "fqsen": "\\LaunchDarkly\\EvaluationReason\u003A\u003Afallthrough\u0028\u0029",
            "name": "fallthrough",
            "summary": "Creates\u0020a\u0020new\u0020instance\u0020of\u0020the\u0020FALLTHROUGH\u0020reason.",
            "url": "classes/LaunchDarkly-EvaluationReason.html#method_fallthrough"
        },                {
            "fqsen": "\\LaunchDarkly\\EvaluationReason\u003A\u003AtargetMatch\u0028\u0029",
            "name": "targetMatch",
            "summary": "Creates\u0020a\u0020new\u0020instance\u0020of\u0020the\u0020TARGET_MATCH\u0020reason.",
            "url": "classes/LaunchDarkly-EvaluationReason.html#method_targetMatch"
        },                {
            "fqsen": "\\LaunchDarkly\\EvaluationReason\u003A\u003AruleMatch\u0028\u0029",
            "name": "ruleMatch",
            "summary": "Creates\u0020a\u0020new\u0020instance\u0020of\u0020the\u0020RULE_MATCH\u0020reason.",
            "url": "classes/LaunchDarkly-EvaluationReason.html#method_ruleMatch"
        },                {
            "fqsen": "\\LaunchDarkly\\EvaluationReason\u003A\u003AprerequisiteFailed\u0028\u0029",
            "name": "prerequisiteFailed",
            "summary": "Creates\u0020a\u0020new\u0020instance\u0020of\u0020the\u0020PREREQUISITE_FAILED\u0020reason.",
            "url": "classes/LaunchDarkly-EvaluationReason.html#method_prerequisiteFailed"
        },                {
            "fqsen": "\\LaunchDarkly\\EvaluationReason\u003A\u003Aerror\u0028\u0029",
            "name": "error",
            "summary": "Creates\u0020a\u0020new\u0020instance\u0020of\u0020the\u0020ERROR\u0020reason.",
            "url": "classes/LaunchDarkly-EvaluationReason.html#method_error"
        },                {
            "fqsen": "\\LaunchDarkly\\EvaluationReason\u003A\u003AgetKind\u0028\u0029",
            "name": "getKind",
            "summary": "Returns\u0020a\u0020constant\u0020indicating\u0020the\u0020general\u0020category\u0020of\u0020the\u0020reason,\u0020such\u0020as\u0020OFF.",
            "url": "classes/LaunchDarkly-EvaluationReason.html#method_getKind"
        },                {
            "fqsen": "\\LaunchDarkly\\EvaluationReason\u003A\u003AgetErrorKind\u0028\u0029",
            "name": "getErrorKind",
            "summary": "Returns\u0020a\u0020constant\u0020indicating\u0020the\u0020nature\u0020of\u0020the\u0020error,\u0020if\u0020getKind\u0028\u0029\u0020is\u0020OFF.\u0020Otherwise\nreturns\u0020null.",
            "url": "classes/LaunchDarkly-EvaluationReason.html#method_getErrorKind"
        },                {
            "fqsen": "\\LaunchDarkly\\EvaluationReason\u003A\u003AgetRuleIndex\u0028\u0029",
            "name": "getRuleIndex",
            "summary": "Returns\u0020the\u0020positional\u0020index\u0020of\u0020the\u0020rule\u0020that\u0020was\u0020matched\u0020\u00280\u0020for\u0020the\u0020first\u0029,\u0020if\u0020getKind\u0028\u0029\nis\u0020RULE_MATCH.\u0020Otherwise\u0020returns\u0020null.",
            "url": "classes/LaunchDarkly-EvaluationReason.html#method_getRuleIndex"
        },                {
            "fqsen": "\\LaunchDarkly\\EvaluationReason\u003A\u003AgetRuleId\u0028\u0029",
            "name": "getRuleId",
            "summary": "Returns\u0020the\u0020unique\u0020identifier\u0020of\u0020the\u0020rule\u0020that\u0020was\u0020matched,\u0020if\u0020getKind\u0028\u0029\u0020is\u0020RULE_MATCH.",
            "url": "classes/LaunchDarkly-EvaluationReason.html#method_getRuleId"
        },                {
            "fqsen": "\\LaunchDarkly\\EvaluationReason\u003A\u003AgetPrerequisiteKey\u0028\u0029",
            "name": "getPrerequisiteKey",
            "summary": "Returns\u0020the\u0020key\u0020of\u0020the\u0020prerequisite\u0020feature\u0020flag\u0020that\u0020failed,\u0020if\u0020getKind\u0028\u0029\u0020is\nPREREQUISITE_FAILED.\u0020Otherwise\u0020returns\u0020null.",
            "url": "classes/LaunchDarkly-EvaluationReason.html#method_getPrerequisiteKey"
        },                {
            "fqsen": "\\LaunchDarkly\\EvaluationReason\u003A\u003AisInExperiment\u0028\u0029",
            "name": "isInExperiment",
            "summary": "Returns\u0020true\u0020if\u0020the\u0020evaluation\u0020resulted\u0020in\u0020an\u0020experiment\u0020rollout\u0020\u002Aand\u002A\u0020served\none\u0020of\u0020the\u0020variations\u0020in\u0020the\u0020experiment.\u0020\u0020Otherwise\u0020it\u0020returns\u0020false.",
            "url": "classes/LaunchDarkly-EvaluationReason.html#method_isInExperiment"
        },                {
            "fqsen": "\\LaunchDarkly\\EvaluationReason\u003A\u003A__toString\u0028\u0029",
            "name": "__toString",
            "summary": "Returns\u0020a\u0020simple\u0020string\u0020representation\u0020of\u0020this\u0020object.",
            "url": "classes/LaunchDarkly-EvaluationReason.html#method___toString"
        },                {
            "fqsen": "\\LaunchDarkly\\EvaluationReason\u003A\u003AjsonSerialize\u0028\u0029",
            "name": "jsonSerialize",
            "summary": "Returns\u0020a\u0020JSON\u0020representation\u0020of\u0020this\u0020object.\u0020This\u0020method\u0020is\u0020used\u0020automatically\nif\u0020you\u0020call\u0020json_encode\u0028\u0029.",
            "url": "classes/LaunchDarkly-EvaluationReason.html#method_jsonSerialize"
        },                {
            "fqsen": "\\LaunchDarkly\\EvaluationReason\u003A\u003AOFF",
            "name": "OFF",
            "summary": "A\u0020possible\u0020value\u0020for\u0020getKind\u0028\u0029\u003A\u0020indicates\u0020that\u0020the\u0020flag\u0020was\u0020off\u0020and\u0020therefore\u0020returned\nits\u0020configured\u0020off\u0020value.",
            "url": "classes/LaunchDarkly-EvaluationReason.html#constant_OFF"
        },                {
            "fqsen": "\\LaunchDarkly\\EvaluationReason\u003A\u003AFALLTHROUGH",
            "name": "FALLTHROUGH",
            "summary": "A\u0020possible\u0020value\u0020for\u0020getKind\u0028\u0029\u003A\u0020indicates\u0020that\u0020the\u0020flag\u0020was\u0020on\u0020but\u0020the\u0020user\u0020did\u0020not\nmatch\u0020any\u0020targets\u0020or\u0020rules.",
            "url": "classes/LaunchDarkly-EvaluationReason.html#constant_FALLTHROUGH"
        },                {
            "fqsen": "\\LaunchDarkly\\EvaluationReason\u003A\u003ATARGET_MATCH",
            "name": "TARGET_MATCH",
            "summary": "A\u0020possible\u0020value\u0020for\u0020getKind\u0028\u0029\u003A\u0020indicates\u0020that\u0020the\u0020user\u0020key\u0020was\u0020specifically\u0020targeted\nfor\u0020this\u0020flag.",
            "url": "classes/LaunchDarkly-EvaluationReason.html#constant_TARGET_MATCH"
        },                {
            "fqsen": "\\LaunchDarkly\\EvaluationReason\u003A\u003ARULE_MATCH",
            "name": "RULE_MATCH",
            "summary": "A\u0020possible\u0020value\u0020for\u0020getKind\u0028\u0029\u003A\u0020indicates\u0020that\u0020the\u0020user\u0020matched\u0020one\u0020of\u0020the\u0020flag\u0027s\u0020rules.",
            "url": "classes/LaunchDarkly-EvaluationReason.html#constant_RULE_MATCH"
        },                {
            "fqsen": "\\LaunchDarkly\\EvaluationReason\u003A\u003APREREQUISITE_FAILED",
            "name": "PREREQUISITE_FAILED",
            "summary": "A\u0020possible\u0020value\u0020for\u0020getKind\u0028\u0029\u003A\u0020indicates\u0020that\u0020the\u0020flag\u0020was\u0020considered\u0020off\u0020because\u0020it\nhad\u0020at\u0020least\u0020one\u0020prerequisite\u0020flag\u0020that\u0020either\u0020was\u0020off\u0020or\u0020did\u0020not\u0020return\u0020the\u0020desired\u0020variation.",
            "url": "classes/LaunchDarkly-EvaluationReason.html#constant_PREREQUISITE_FAILED"
        },                {
            "fqsen": "\\LaunchDarkly\\EvaluationReason\u003A\u003AERROR",
            "name": "ERROR",
            "summary": "A\u0020possible\u0020value\u0020for\u0020getKind\u0028\u0029\u003A\u0020indicates\u0020that\u0020the\u0020flag\u0020could\u0020not\u0020be\u0020evaluated,\u0020e.g.",
            "url": "classes/LaunchDarkly-EvaluationReason.html#constant_ERROR"
        },                {
            "fqsen": "\\LaunchDarkly\\EvaluationReason\u003A\u003ACLIENT_NOT_READY_ERROR",
            "name": "CLIENT_NOT_READY_ERROR",
            "summary": "A\u0020possible\u0020value\u0020for\u0020getErrorKind\u0028\u0029\u003A\u0020indicates\u0020that\u0020the\u0020caller\u0020tried\u0020to\u0020evaluate\u0020a\u0020flag\nbefore\u0020the\u0020client\u0020had\u0020successfully\u0020initialized.",
            "url": "classes/LaunchDarkly-EvaluationReason.html#constant_CLIENT_NOT_READY_ERROR"
        },                {
            "fqsen": "\\LaunchDarkly\\EvaluationReason\u003A\u003AFLAG_NOT_FOUND_ERROR",
            "name": "FLAG_NOT_FOUND_ERROR",
            "summary": "A\u0020possible\u0020value\u0020for\u0020getErrorKind\u0028\u0029\u003A\u0020indicates\u0020that\u0020the\u0020caller\u0020provided\u0020a\u0020flag\u0020key\u0020that\ndid\u0020not\u0020match\u0020any\u0020known\u0020flag.",
            "url": "classes/LaunchDarkly-EvaluationReason.html#constant_FLAG_NOT_FOUND_ERROR"
        },                {
            "fqsen": "\\LaunchDarkly\\EvaluationReason\u003A\u003AMALFORMED_FLAG_ERROR",
            "name": "MALFORMED_FLAG_ERROR",
            "summary": "A\u0020possible\u0020value\u0020for\u0020getErrorKind\u0028\u0029\u003A\u0020indicates\u0020that\u0020there\u0020was\u0020an\u0020internal\u0020inconsistency\nin\u0020the\u0020flag\u0020data,\u0020e.g.\u0020a\u0020rule\u0020specified\u0020a\u0020nonexistent\u0020variation.\u0020An\u0020error\u0020message\u0020will\nalways\u0020be\u0020logged\u0020in\u0020this\u0020case.",
            "url": "classes/LaunchDarkly-EvaluationReason.html#constant_MALFORMED_FLAG_ERROR"
        },                {
            "fqsen": "\\LaunchDarkly\\EvaluationReason\u003A\u003AUSER_NOT_SPECIFIED_ERROR",
            "name": "USER_NOT_SPECIFIED_ERROR",
            "summary": "A\u0020possible\u0020value\u0020for\u0020getErrorKind\u0028\u0029\u003A\u0020indicates\u0020that\u0020the\u0020caller\u0020passed\u0020null\u0020for\u0020the\u0020user\nparameter,\u0020or\u0020the\u0020user\u0020lacked\u0020a\u0020key.",
            "url": "classes/LaunchDarkly-EvaluationReason.html#constant_USER_NOT_SPECIFIED_ERROR"
        },                {
            "fqsen": "\\LaunchDarkly\\EvaluationReason\u003A\u003AEXCEPTION_ERROR",
            "name": "EXCEPTION_ERROR",
            "summary": "A\u0020possible\u0020value\u0020for\u0020getErrorKind\u0028\u0029\u003A\u0020indicates\u0020that\u0020an\u0020unexpected\u0020exception\u0020stopped\u0020flag\nevaluation.",
            "url": "classes/LaunchDarkly-EvaluationReason.html#constant_EXCEPTION_ERROR"
        },                {
            "fqsen": "\\LaunchDarkly\\EventPublisher",
            "name": "EventPublisher",
            "summary": "Interface\u0020for\u0020the\u0020component\u0020that\u0020sends\u0020events\u0020to\u0020the\u0020LaunchDarkly\u0020service.",
            "url": "classes/LaunchDarkly-EventPublisher.html"
        },                {
            "fqsen": "\\LaunchDarkly\\EventPublisher\u003A\u003A__construct\u0028\u0029",
            "name": "__construct",
            "summary": "",
            "url": "classes/LaunchDarkly-EventPublisher.html#method___construct"
        },                {
            "fqsen": "\\LaunchDarkly\\EventPublisher\u003A\u003Apublish\u0028\u0029",
            "name": "publish",
            "summary": "Publishes\u0020events\u0020to\u0020LaunchDarkly.",
            "url": "classes/LaunchDarkly-EventPublisher.html#method_publish"
        },                {
            "fqsen": "\\LaunchDarkly\\FeatureFlagsState",
            "name": "FeatureFlagsState",
            "summary": "A\u0020snapshot\u0020of\u0020the\u0020state\u0020of\u0020all\u0020feature\u0020flags\u0020with\u0020regard\u0020to\u0020a\u0020specific\u0020user.",
            "url": "classes/LaunchDarkly-FeatureFlagsState.html"
        },                {
            "fqsen": "\\LaunchDarkly\\FeatureFlagsState\u003A\u003AisValid\u0028\u0029",
            "name": "isValid",
            "summary": "Returns\u0020true\u0020if\u0020this\u0020object\u0020contains\u0020a\u0020valid\u0020snapshot\u0020of\u0020feature\u0020flag\u0020state,\u0020or\u0020false\u0020if\u0020the\nstate\u0020could\u0020not\u0020be\u0020computed\u0020\u0028for\u0020instance,\u0020because\u0020the\u0020client\u0020was\u0020offline\u0020or\u0020there\u0020was\u0020no\u0020user\u0029.",
            "url": "classes/LaunchDarkly-FeatureFlagsState.html#method_isValid"
        },                {
            "fqsen": "\\LaunchDarkly\\FeatureFlagsState\u003A\u003AgetFlagValue\u0028\u0029",
            "name": "getFlagValue",
            "summary": "Returns\u0020the\u0020value\u0020of\u0020an\u0020individual\u0020feature\u0020flag\u0020at\u0020the\u0020time\u0020the\u0020state\u0020was\u0020recorded.",
            "url": "classes/LaunchDarkly-FeatureFlagsState.html#method_getFlagValue"
        },                {
            "fqsen": "\\LaunchDarkly\\FeatureFlagsState\u003A\u003AgetFlagReason\u0028\u0029",
            "name": "getFlagReason",
            "summary": "Returns\u0020the\u0020evaluation\u0020reason\u0020for\u0020an\u0020individual\u0020feature\u0020flag\u0020\u0028as\u0020returned\u0020by\u0020variationDetail\u0028\u0029\u0029\nat\u0020the\u0020time\u0020the\u0020state\u0020was\u0020recorded.",
            "url": "classes/LaunchDarkly-FeatureFlagsState.html#method_getFlagReason"
        },                {
            "fqsen": "\\LaunchDarkly\\FeatureFlagsState\u003A\u003AtoValuesMap\u0028\u0029",
            "name": "toValuesMap",
            "summary": "Returns\u0020an\u0020associative\u0020array\u0020of\u0020flag\u0020keys\u0020to\u0020flag\u0020values.",
            "url": "classes/LaunchDarkly-FeatureFlagsState.html#method_toValuesMap"
        },                {
            "fqsen": "\\LaunchDarkly\\FeatureFlagsState\u003A\u003AjsonSerialize\u0028\u0029",
            "name": "jsonSerialize",
            "summary": "Returns\u0020a\u0020JSON\u0020representation\u0020of\u0020the\u0020entire\u0020state\u0020map\u0020\u0028as\u0020an\u0020associative\u0020array\u0029,\u0020in\u0020the\u0020format\u0020used\nby\u0020the\u0020LaunchDarkly\u0020JavaScript\u0020SDK.",
            "url": "classes/LaunchDarkly-FeatureFlagsState.html#method_jsonSerialize"
        },                {
            "fqsen": "\\LaunchDarkly\\FeatureRequester",
            "name": "FeatureRequester",
            "summary": "Interface\u0020for\u0020the\u0020component\u0020that\u0020retrieves\u0020feature\u0020flag\u0020data.",
            "url": "classes/LaunchDarkly-FeatureRequester.html"
        },                {
            "fqsen": "\\LaunchDarkly\\FeatureRequester\u003A\u003AgetFeature\u0028\u0029",
            "name": "getFeature",
            "summary": "Gets\u0020the\u0020configuration\u0020for\u0020a\u0020specific\u0020feature\u0020flag.",
            "url": "classes/LaunchDarkly-FeatureRequester.html#method_getFeature"
        },                {
            "fqsen": "\\LaunchDarkly\\FeatureRequester\u003A\u003AgetSegment\u0028\u0029",
            "name": "getSegment",
            "summary": "Gets\u0020the\u0020configuration\u0020for\u0020a\u0020specific\u0020user\u0020segment.",
            "url": "classes/LaunchDarkly-FeatureRequester.html#method_getSegment"
        },                {
            "fqsen": "\\LaunchDarkly\\FeatureRequester\u003A\u003AgetAllFeatures\u0028\u0029",
            "name": "getAllFeatures",
            "summary": "Gets\u0020all\u0020feature\u0020flags.",
            "url": "classes/LaunchDarkly-FeatureRequester.html#method_getAllFeatures"
        },                {
            "fqsen": "\\LaunchDarkly\\Integrations\\Curl",
            "name": "Curl",
            "summary": "Integration\u0020with\u0020the\u0020curl\u0020HTTP\u0020client.",
            "url": "classes/LaunchDarkly-Integrations-Curl.html"
        },                {
            "fqsen": "\\LaunchDarkly\\Integrations\\Curl\u003A\u003AeventPublisher\u0028\u0029",
            "name": "eventPublisher",
            "summary": "Configures\u0020an\u0020adapter\u0020for\u0020sending\u0020analytics\u0020events\u0020to\u0020LaunchDarkly\u0020using\u0020curl.",
            "url": "classes/LaunchDarkly-Integrations-Curl.html#method_eventPublisher"
        },                {
            "fqsen": "\\LaunchDarkly\\Integrations\\Files",
            "name": "Files",
            "summary": "Integration\u0020with\u0020filesystem\u0020data.",
            "url": "classes/LaunchDarkly-Integrations-Files.html"
        },                {
            "fqsen": "\\LaunchDarkly\\Integrations\\Files\u003A\u003AfeatureRequester\u0028\u0029",
            "name": "featureRequester",
            "summary": "This\u0020component\u0020allows\u0020you\u0020to\u0020use\u0020local\u0020files\u0020as\u0020a\u0020source\u0020of\u0020feature\u0020flag\u0020state.",
            "url": "classes/LaunchDarkly-Integrations-Files.html#method_featureRequester"
        },                {
            "fqsen": "\\LaunchDarkly\\Integrations\\Guzzle",
            "name": "Guzzle",
            "summary": "Integration\u0020with\u0020the\u0020Guzzle\u0020HTTP\u0020client.",
            "url": "classes/LaunchDarkly-Integrations-Guzzle.html"
        },                {
            "fqsen": "\\LaunchDarkly\\Integrations\\Guzzle\u003A\u003AfeatureRequester\u0028\u0029",
            "name": "featureRequester",
            "summary": "Configures\u0020an\u0020adapter\u0020for\u0020requesting\u0020feature\u0020flag\u0020data\u0020from\u0020LaunchDarkly\u0020using\u0020GuzzleHttp.",
            "url": "classes/LaunchDarkly-Integrations-Guzzle.html#method_featureRequester"
        },                {
            "fqsen": "\\LaunchDarkly\\Integrations\\Guzzle\u003A\u003AeventPublisher\u0028\u0029",
            "name": "eventPublisher",
            "summary": "Configures\u0020an\u0020adapter\u0020for\u0020sending\u0020analytics\u0020events\u0020to\u0020LaunchDarkly\u0020using\u0020GuzzleHttp.",
            "url": "classes/LaunchDarkly-Integrations-Guzzle.html#method_eventPublisher"
        },                {
            "fqsen": "\\LaunchDarkly\\LDClient",
            "name": "LDClient",
            "summary": "A\u0020client\u0020for\u0020the\u0020LaunchDarkly\u0020API.",
            "url": "classes/LaunchDarkly-LDClient.html"
        },                {
            "fqsen": "\\LaunchDarkly\\LDClient\u003A\u003A__construct\u0028\u0029",
            "name": "__construct",
            "summary": "Creates\u0020a\u0020new\u0020client\u0020instance\u0020that\u0020connects\u0020to\u0020LaunchDarkly.",
            "url": "classes/LaunchDarkly-LDClient.html#method___construct"
        },                {
            "fqsen": "\\LaunchDarkly\\LDClient\u003A\u003Avariation\u0028\u0029",
            "name": "variation",
            "summary": "Calculates\u0020the\u0020value\u0020of\u0020a\u0020feature\u0020flag\u0020for\u0020a\u0020given\u0020user.",
            "url": "classes/LaunchDarkly-LDClient.html#method_variation"
        },                {
            "fqsen": "\\LaunchDarkly\\LDClient\u003A\u003AvariationDetail\u0028\u0029",
            "name": "variationDetail",
            "summary": "Calculates\u0020the\u0020value\u0020of\u0020a\u0020feature\u0020flag,\u0020and\u0020returns\u0020an\u0020object\u0020that\u0020describes\u0020the\u0020way\u0020the\nvalue\u0020was\u0020determined.",
            "url": "classes/LaunchDarkly-LDClient.html#method_variationDetail"
        },                {
            "fqsen": "\\LaunchDarkly\\LDClient\u003A\u003AisOffline\u0028\u0029",
            "name": "isOffline",
            "summary": "Returns\u0020whether\u0020the\u0020LaunchDarkly\u0020client\u0020is\u0020in\u0020offline\u0020mode.",
            "url": "classes/LaunchDarkly-LDClient.html#method_isOffline"
        },                {
            "fqsen": "\\LaunchDarkly\\LDClient\u003A\u003Atrack\u0028\u0029",
            "name": "track",
            "summary": "Tracks\u0020that\u0020a\u0020user\u0020performed\u0020an\u0020event.",
            "url": "classes/LaunchDarkly-LDClient.html#method_track"
        },                {
            "fqsen": "\\LaunchDarkly\\LDClient\u003A\u003Aidentify\u0028\u0029",
            "name": "identify",
            "summary": "Reports\u0020details\u0020about\u0020a\u0020user.",
            "url": "classes/LaunchDarkly-LDClient.html#method_identify"
        },                {
            "fqsen": "\\LaunchDarkly\\LDClient\u003A\u003AallFlagsState\u0028\u0029",
            "name": "allFlagsState",
            "summary": "Returns\u0020an\u0020object\u0020that\u0020encapsulates\u0020the\u0020state\u0020of\u0020all\u0020feature\u0020flags\u0020for\u0020a\u0020given\u0020user.",
            "url": "classes/LaunchDarkly-LDClient.html#method_allFlagsState"
        },                {
            "fqsen": "\\LaunchDarkly\\LDClient\u003A\u003Aalias\u0028\u0029",
            "name": "alias",
            "summary": "Associates\u0020two\u0020users\u0020for\u0020analytics\u0020purposes.",
            "url": "classes/LaunchDarkly-LDClient.html#method_alias"
        },                {
            "fqsen": "\\LaunchDarkly\\LDClient\u003A\u003AsecureModeHash\u0028\u0029",
            "name": "secureModeHash",
            "summary": "Generates\u0020an\u0020HMAC\u0020sha256\u0020hash\u0020for\u0020use\u0020in\u0020Secure\u0020mode.",
            "url": "classes/LaunchDarkly-LDClient.html#method_secureModeHash"
        },                {
            "fqsen": "\\LaunchDarkly\\LDClient\u003A\u003Aflush\u0028\u0029",
            "name": "flush",
            "summary": "Publishes\u0020any\u0020pending\u0020analytics\u0020events\u0020to\u0020LaunchDarkly.",
            "url": "classes/LaunchDarkly-LDClient.html#method_flush"
        },                {
            "fqsen": "\\LaunchDarkly\\LDClient\u003A\u003ADEFAULT_BASE_URI",
            "name": "DEFAULT_BASE_URI",
            "summary": "",
            "url": "classes/LaunchDarkly-LDClient.html#constant_DEFAULT_BASE_URI"
        },                {
            "fqsen": "\\LaunchDarkly\\LDClient\u003A\u003ADEFAULT_EVENTS_URI",
            "name": "DEFAULT_EVENTS_URI",
            "summary": "",
            "url": "classes/LaunchDarkly-LDClient.html#constant_DEFAULT_EVENTS_URI"
        },                {
            "fqsen": "\\LaunchDarkly\\LDClient\u003A\u003AVERSION",
            "name": "VERSION",
            "summary": "The\u0020current\u0020SDK\u0020version.",
            "url": "classes/LaunchDarkly-LDClient.html#constant_VERSION"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUser",
            "name": "LDUser",
            "summary": "Contains\u0020specific\u0020attributes\u0020of\u0020a\u0020user\u0020browsing\u0020your\u0020site.",
            "url": "classes/LaunchDarkly-LDUser.html"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUser\u003A\u003A__construct\u0028\u0029",
            "name": "__construct",
            "summary": "Constructor\u0020for\u0020directly\u0020creating\u0020an\u0020instance.",
            "url": "classes/LaunchDarkly-LDUser.html#method___construct"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUser\u003A\u003AgetCountry\u0028\u0029",
            "name": "getCountry",
            "summary": "",
            "url": "classes/LaunchDarkly-LDUser.html#method_getCountry"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUser\u003A\u003AgetCustom\u0028\u0029",
            "name": "getCustom",
            "summary": "",
            "url": "classes/LaunchDarkly-LDUser.html#method_getCustom"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUser\u003A\u003AgetIP\u0028\u0029",
            "name": "getIP",
            "summary": "",
            "url": "classes/LaunchDarkly-LDUser.html#method_getIP"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUser\u003A\u003AgetKey\u0028\u0029",
            "name": "getKey",
            "summary": "",
            "url": "classes/LaunchDarkly-LDUser.html#method_getKey"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUser\u003A\u003AgetSecondary\u0028\u0029",
            "name": "getSecondary",
            "summary": "",
            "url": "classes/LaunchDarkly-LDUser.html#method_getSecondary"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUser\u003A\u003AgetEmail\u0028\u0029",
            "name": "getEmail",
            "summary": "",
            "url": "classes/LaunchDarkly-LDUser.html#method_getEmail"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUser\u003A\u003AgetName\u0028\u0029",
            "name": "getName",
            "summary": "",
            "url": "classes/LaunchDarkly-LDUser.html#method_getName"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUser\u003A\u003AgetAvatar\u0028\u0029",
            "name": "getAvatar",
            "summary": "",
            "url": "classes/LaunchDarkly-LDUser.html#method_getAvatar"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUser\u003A\u003AgetFirstName\u0028\u0029",
            "name": "getFirstName",
            "summary": "",
            "url": "classes/LaunchDarkly-LDUser.html#method_getFirstName"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUser\u003A\u003AgetLastName\u0028\u0029",
            "name": "getLastName",
            "summary": "",
            "url": "classes/LaunchDarkly-LDUser.html#method_getLastName"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUser\u003A\u003AgetAnonymous\u0028\u0029",
            "name": "getAnonymous",
            "summary": "",
            "url": "classes/LaunchDarkly-LDUser.html#method_getAnonymous"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUser\u003A\u003AgetPrivateAttributeNames\u0028\u0029",
            "name": "getPrivateAttributeNames",
            "summary": "",
            "url": "classes/LaunchDarkly-LDUser.html#method_getPrivateAttributeNames"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUser\u003A\u003AisKeyBlank\u0028\u0029",
            "name": "isKeyBlank",
            "summary": "",
            "url": "classes/LaunchDarkly-LDUser.html#method_isKeyBlank"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUserBuilder",
            "name": "LDUserBuilder",
            "summary": "A\u0020builder\u0020for\u0020constructing\u0020LDUser\u0020objects.",
            "url": "classes/LaunchDarkly-LDUserBuilder.html"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUserBuilder\u003A\u003A__construct\u0028\u0029",
            "name": "__construct",
            "summary": "Creates\u0020a\u0020builder\u0020with\u0020the\u0020specified\u0020key.",
            "url": "classes/LaunchDarkly-LDUserBuilder.html#method___construct"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUserBuilder\u003A\u003Asecondary\u0028\u0029",
            "name": "secondary",
            "summary": "Sets\u0020the\u0020user\u0027s\u0020secondary\u0020key\u0020attribute.",
            "url": "classes/LaunchDarkly-LDUserBuilder.html#method_secondary"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUserBuilder\u003A\u003AprivateSecondary\u0028\u0029",
            "name": "privateSecondary",
            "summary": "Sets\u0020the\u0020user\u0027s\u0020secondary\u0020key\u0020attribute,\u0020and\u0020marks\u0020it\u0020as\u0020private.",
            "url": "classes/LaunchDarkly-LDUserBuilder.html#method_privateSecondary"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUserBuilder\u003A\u003Aip\u0028\u0029",
            "name": "ip",
            "summary": "Sets\u0020the\u0020user\u0027s\u0020IP\u0020address\u0020attribute.",
            "url": "classes/LaunchDarkly-LDUserBuilder.html#method_ip"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUserBuilder\u003A\u003AprivateIp\u0028\u0029",
            "name": "privateIp",
            "summary": "Sets\u0020the\u0020user\u0027s\u0020IP\u0020address\u0020attribute,\u0020and\u0020marks\u0020it\u0020as\u0020private.",
            "url": "classes/LaunchDarkly-LDUserBuilder.html#method_privateIp"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUserBuilder\u003A\u003Acountry\u0028\u0029",
            "name": "country",
            "summary": "Sets\u0020the\u0020user\u0027s\u0020country\u0020attribute.",
            "url": "classes/LaunchDarkly-LDUserBuilder.html#method_country"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUserBuilder\u003A\u003AprivateCountry\u0028\u0029",
            "name": "privateCountry",
            "summary": "Sets\u0020the\u0020user\u0027s\u0020country\u0020attribute,\u0020and\u0020marks\u0020it\u0020as\u0020private.",
            "url": "classes/LaunchDarkly-LDUserBuilder.html#method_privateCountry"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUserBuilder\u003A\u003Aemail\u0028\u0029",
            "name": "email",
            "summary": "Sets\u0020the\u0020user\u0027s\u0020email\u0020address\u0020attribute.",
            "url": "classes/LaunchDarkly-LDUserBuilder.html#method_email"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUserBuilder\u003A\u003AprivateEmail\u0028\u0029",
            "name": "privateEmail",
            "summary": "Sets\u0020the\u0020user\u0027s\u0020email\u0020address\u0020attribute,\u0020and\u0020marks\u0020it\u0020as\u0020private.",
            "url": "classes/LaunchDarkly-LDUserBuilder.html#method_privateEmail"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUserBuilder\u003A\u003Aname\u0028\u0029",
            "name": "name",
            "summary": "Sets\u0020the\u0020user\u0027s\u0020full\u0020name\u0020attribute.",
            "url": "classes/LaunchDarkly-LDUserBuilder.html#method_name"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUserBuilder\u003A\u003AprivateName\u0028\u0029",
            "name": "privateName",
            "summary": "Sets\u0020the\u0020user\u0027s\u0020full\u0020name\u0020attribute,\u0020and\u0020marks\u0020it\u0020as\u0020private.",
            "url": "classes/LaunchDarkly-LDUserBuilder.html#method_privateName"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUserBuilder\u003A\u003Aavatar\u0028\u0029",
            "name": "avatar",
            "summary": "Sets\u0020the\u0020user\u0027s\u0020avatar\u0020URL\u0020attribute.",
            "url": "classes/LaunchDarkly-LDUserBuilder.html#method_avatar"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUserBuilder\u003A\u003AprivateAvatar\u0028\u0029",
            "name": "privateAvatar",
            "summary": "Sets\u0020the\u0020user\u0027s\u0020avatar\u0020URL\u0020attribute,\u0020and\u0020marks\u0020it\u0020as\u0020private.",
            "url": "classes/LaunchDarkly-LDUserBuilder.html#method_privateAvatar"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUserBuilder\u003A\u003AfirstName\u0028\u0029",
            "name": "firstName",
            "summary": "Sets\u0020the\u0020user\u0027s\u0020first\u0020name\u0020attribute.",
            "url": "classes/LaunchDarkly-LDUserBuilder.html#method_firstName"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUserBuilder\u003A\u003AprivateFirstName\u0028\u0029",
            "name": "privateFirstName",
            "summary": "Sets\u0020the\u0020user\u0027s\u0020first\u0020name\u0020attribute,\u0020and\u0020marks\u0020it\u0020as\u0020private.",
            "url": "classes/LaunchDarkly-LDUserBuilder.html#method_privateFirstName"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUserBuilder\u003A\u003AlastName\u0028\u0029",
            "name": "lastName",
            "summary": "Sets\u0020the\u0020user\u0027s\u0020last\u0020name\u0020attribute.",
            "url": "classes/LaunchDarkly-LDUserBuilder.html#method_lastName"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUserBuilder\u003A\u003AprivateLastName\u0028\u0029",
            "name": "privateLastName",
            "summary": "Sets\u0020the\u0020user\u0027s\u0020last\u0020name\u0020attribute,\u0020and\u0020marks\u0020it\u0020as\u0020private.",
            "url": "classes/LaunchDarkly-LDUserBuilder.html#method_privateLastName"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUserBuilder\u003A\u003Aanonymous\u0028\u0029",
            "name": "anonymous",
            "summary": "Sets\u0020whether\u0020this\u0020user\u0020is\u0020anonymous.",
            "url": "classes/LaunchDarkly-LDUserBuilder.html#method_anonymous"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUserBuilder\u003A\u003Acustom\u0028\u0029",
            "name": "custom",
            "summary": "Sets\u0020any\u0020number\u0020of\u0020custom\u0020attributes\u0020for\u0020the\u0020user.",
            "url": "classes/LaunchDarkly-LDUserBuilder.html#method_custom"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUserBuilder\u003A\u003AcustomAttribute\u0028\u0029",
            "name": "customAttribute",
            "summary": "Sets\u0020a\u0020single\u0020custom\u0020attribute\u0020for\u0020the\u0020user.",
            "url": "classes/LaunchDarkly-LDUserBuilder.html#method_customAttribute"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUserBuilder\u003A\u003AprivateCustomAttribute\u0028\u0029",
            "name": "privateCustomAttribute",
            "summary": "Sets\u0020a\u0020single\u0020custom\u0020attribute\u0020for\u0020the\u0020user,\u0020and\u0020marks\u0020it\u0020as\u0020private.",
            "url": "classes/LaunchDarkly-LDUserBuilder.html#method_privateCustomAttribute"
        },                {
            "fqsen": "\\LaunchDarkly\\LDUserBuilder\u003A\u003Abuild\u0028\u0029",
            "name": "build",
            "summary": "Creates\u0020the\u0020LDUser\u0020instance\u0020based\u0020on\u0020the\u0020builder\u0027s\u0020current\u0020properties.",
            "url": "classes/LaunchDarkly-LDUserBuilder.html#method_build"
        },                {
            "fqsen": "\\",
            "name": "\\",
            "summary": "",
            "url": "namespaces/default.html"
        },                {
            "fqsen": "\\LaunchDarkly",
            "name": "LaunchDarkly",
            "summary": "",
            "url": "namespaces/launchdarkly.html"
        },                {
            "fqsen": "\\LaunchDarkly\\Integrations",
            "name": "Integrations",
            "summary": "",
            "url": "namespaces/launchdarkly-integrations.html"
        }            ]
);

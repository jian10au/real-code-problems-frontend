{
    "data": {
      "submissions": [
        {
          "id": "d8084591-e54b-4eac-a468-94f2ec749951",
          "result": null,
          "status": "uploaded",
          "updatedAt": "2020-01-13 09:19:15 UTC",
          "text": "<html>\n    <h1>Broken</h1>\n</html>",
          "runs": []
        },
        {
          "id": "698d277c-5d00-4b9f-bcfd-e1c163521b64",
          "result": {
            "output": null,
            "exitCode": 0,
            "elapsedTime": "0m0.049s",
            "scenario": {
              "total": 3,
              "failed": 0,
              "skipped": 0,
              "pending": 0,
              "passed": 3,
              "output": "3 passed"
            },
            "step": {
              "total": 8,
              "failed": 0,
              "skipped": 0,
              "pending": 0,
              "passed": 8,
              "output": "8 passed"
            }
          },
          "status": "processed",
          "updatedAt": "2020-01-15 03:24:59 UTC",
          "text": "<html>\n  <h1 data-testid=\"heading\">Welcome to Real Code Problems</h1>\n  <p data-testid=\"sub-heading\">\n    Real code problems help you learn how to code while solving real\n    problems.\n  </p>\n  <quote data-testid=\"quote-1\">\n    Real code problems are problems solved with web apps.\n  </quote>\n  <quote data-testid=\"quote-2\">\n    Real code problems will help you build out BDD phrasing of problems.\n  </quote>\n</html>",
          "runs": [
            {
              "id": "ca40b15c-36e9-40d5-b6ff-0091d01fad6e",
              "result": {
                "output": "Attaching to introduction_features_1\nFeature: Get started with web app testing some basic HTML\n\n  Scenario: Get some text on a page\u001b[90m             # features/feature_01_get_some_static_text_on_a_web_page.feature:3\u001b[0m\n    \u001b[32mGiven a static file\u001b[90m                         # features/step_definitions/setup_steps.rb:1\u001b[0m\u001b[0m\n    \u001b[32mThen it has some pieces of text on the page\u001b[90m # features/step_definitions/finder_steps.rb:41\u001b[0m\u001b[0m\n      | \u001b[36mtext                                                                      \u001b[0m\u001b[0m |\u001b[0m\n      | \u001b[36mWelcome to Real Code Problems                                             \u001b[0m\u001b[0m |\u001b[0m\n      | \u001b[36mReal code problems help you learn how to code while solving real problems.\u001b[0m\u001b[0m |\u001b[0m\n\n  Scenario: Put the text in appropriate tags `h1` and a `p` tag\u001b[90m      # features/feature_01_get_some_static_text_on_a_web_page.feature:11\u001b[0m\n    \u001b[32mGiven a static file\u001b[90m                                              # features/step_definitions/setup_steps.rb:1\u001b[0m\u001b[0m\n    \u001b[32mThen it has a \u001b[32m\u001b[1m\"h1\"\u001b[0m\u001b[0m\u001b[32m with the text \u001b[32m\u001b[1m\"Welcome to Real Code Problems\"\u001b[0m\u001b[0m\u001b[32m\u001b[90m # features/step_definitions/finder_steps.rb:1\u001b[0m\u001b[0m\n    \u001b[32mAnd the following elements with text\u001b[90m                             # features/step_definitions/finder_steps.rb:20\u001b[0m\u001b[0m\n      | \u001b[36mtag\u001b[0m\u001b[0m |\u001b[0m \u001b[36mtext                                                                      \u001b[0m\u001b[0m |\u001b[0m\n      | \u001b[36mh1 \u001b[0m\u001b[0m |\u001b[0m \u001b[36mWelcome to Real Code Problems                                             \u001b[0m\u001b[0m |\u001b[0m\n      | \u001b[36mp  \u001b[0m\u001b[0m |\u001b[0m \u001b[36mReal code problems help you learn how to code while solving real problems.\u001b[0m\u001b[0m |\u001b[0m\n\n  Scenario: Scope text behind page fragmets identified by data-testid's\u001b[90m # features/feature_01_get_some_static_text_on_a_web_page.feature:20\u001b[0m\n    \u001b[32mGiven a static file\u001b[90m                                                 # features/step_definitions/setup_steps.rb:1\u001b[0m\u001b[0m\n    \u001b[32mThen it has a \u001b[32m\u001b[1m\"h1\"\u001b[0m\u001b[0m\u001b[32m with the text \u001b[32m\u001b[1m\"Welcome to Real Code Problems\"\u001b[0m\u001b[0m\u001b[32m\u001b[90m    # features/step_definitions/finder_steps.rb:1\u001b[0m\u001b[0m\n    \u001b[32mAnd the following elements with text\u001b[90m                                # features/step_definitions/finder_steps.rb:20\u001b[0m\u001b[0m\n      | \u001b[36mfragment   \u001b[0m\u001b[0m |\u001b[0m \u001b[36mtext                                                                      \u001b[0m\u001b[0m |\u001b[0m\n      | \u001b[36mheading    \u001b[0m\u001b[0m |\u001b[0m \u001b[36mWelcome to Real Code Problems                                             \u001b[0m\u001b[0m |\u001b[0m\n      | \u001b[36msub-heading\u001b[0m\u001b[0m |\u001b[0m \u001b[36mReal code problems help you learn how to code while solving real problems.\u001b[0m\u001b[0m |\u001b[0m\n      | \u001b[36mquote-1    \u001b[0m\u001b[0m |\u001b[0m \u001b[36mReal code problems are problems solved with web apps.                     \u001b[0m\u001b[0m |\u001b[0m\n      | \u001b[36mquote-2    \u001b[0m\u001b[0m |\u001b[0m \u001b[36mReal code problems will help you build out BDD phrasing of problems.      \u001b[0m\u001b[0m |\u001b[0m\n\n3 scenarios (\u001b[32m3 passed\u001b[0m)\n8 steps (\u001b[32m8 passed\u001b[0m)\n0m0.045s\n\u001b[36mintroduction_features_1 exited with code 0\n\u001b[0m\n"
              }
            }
          ]
        },
        {
          "id": "58fb86fd-1dd3-445d-99b8-5d1c540a8ed4",
          "result": {
            "output": null,
            "exitCode": 1,
            "elapsedTime": "0m0.255s",
            "scenario": {
              "total": 3,
              "failed": 2,
              "skipped": 0,
              "pending": 0,
              "passed": 1,
              "output": "2 failed, 1 passed"
            },
            "step": {
              "total": 8,
              "failed": 2,
              "skipped": 0,
              "pending": 0,
              "passed": 6,
              "output": "2 failed, 6 passed"
            }
          },
          "status": "processed",
          "updatedAt": "2020-01-15 03:28:43 UTC",
          "text": "<html>\n    <h1>Welcome to Real Code Problems</h1>\n    Real code problems help you learn how to code while solving real problems.\n</html>",
          "runs": [
            {
              "id": "bf19426c-e101-4fd5-9def-0138c47b0356",
              "result": {
                "output": "Attaching to introduction_features_1\nFeature: Get started with web app testing some basic HTML\n\n  Scenario: Get some text on a page\u001b[90m             # features/feature_01_get_some_static_text_on_a_web_page.feature:3\u001b[0m\n    \u001b[32mGiven a static file\u001b[90m                         # features/step_definitions/setup_steps.rb:1\u001b[0m\u001b[0m\n    \u001b[32mThen it has some pieces of text on the page\u001b[90m # features/step_definitions/finder_steps.rb:41\u001b[0m\u001b[0m\n      | \u001b[36mtext                                                                      \u001b[0m\u001b[0m |\u001b[0m\n      | \u001b[36mWelcome to Real Code Problems                                             \u001b[0m\u001b[0m |\u001b[0m\n      | \u001b[36mReal code problems help you learn how to code while solving real problems.\u001b[0m\u001b[0m |\u001b[0m\n\n  Scenario: Put the text in appropriate tags `h1` and a `p` tag\u001b[90m      # features/feature_01_get_some_static_text_on_a_web_page.feature:11\u001b[0m\n    \u001b[32mGiven a static file\u001b[90m                                              # features/step_definitions/setup_steps.rb:1\u001b[0m\u001b[0m\n    \u001b[32mThen it has a \u001b[32m\u001b[1m\"h1\"\u001b[0m\u001b[0m\u001b[32m with the text \u001b[32m\u001b[1m\"Welcome to Real Code Problems\"\u001b[0m\u001b[0m\u001b[32m\u001b[90m # features/step_definitions/finder_steps.rb:1\u001b[0m\u001b[0m\n    \u001b[31mAnd the following elements with text\u001b[90m                             # features/step_definitions/finder_steps.rb:20\u001b[0m\u001b[0m\n      | \u001b[36mtag\u001b[0m\u001b[0m |\u001b[0m \u001b[36mtext                                                                      \u001b[0m\u001b[0m |\u001b[0m\n      | \u001b[36mh1 \u001b[0m\u001b[0m |\u001b[0m \u001b[36mWelcome to Real Code Problems                                             \u001b[0m\u001b[0m |\u001b[0m\n      | \u001b[36mp  \u001b[0m\u001b[0m |\u001b[0m \u001b[36mReal code problems help you learn how to code while solving real problems.\u001b[0m\u001b[0m |\u001b[0m\n\u001b[31m      \u001b[0m\n\u001b[31m      expected: 1\u001b[0m\n\u001b[31m           got: 0\u001b[0m\n\u001b[31m      \u001b[0m\n\u001b[31m      (compared using ==)\u001b[0m\n\u001b[31m       (RSpec::Expectations::ExpectationNotMetError)\u001b[0m\n\u001b[31m      ./features/step_definitions/finder_steps.rb:32:in `block (2 levels) in <top (required)>'\u001b[0m\n\u001b[31m      ./features/step_definitions/finder_steps.rb:26:in `map'\u001b[0m\n\u001b[31m      ./features/step_definitions/finder_steps.rb:26:in `\"the following elements with text\"'\u001b[0m\n\u001b[31m      features/feature_01_get_some_static_text_on_a_web_page.feature:15:in `And the following elements with text'\u001b[0m\n\n  Scenario: Scope text behind page fragmets identified by data-testid's\u001b[90m # features/feature_01_get_some_static_text_on_a_web_page.feature:20\u001b[0m\n    \u001b[32mGiven a static file\u001b[90m                                                 # features/step_definitions/setup_steps.rb:1\u001b[0m\u001b[0m\n    \u001b[32mThen it has a \u001b[32m\u001b[1m\"h1\"\u001b[0m\u001b[0m\u001b[32m with the text \u001b[32m\u001b[1m\"Welcome to Real Code Problems\"\u001b[0m\u001b[0m\u001b[32m\u001b[90m    # features/step_definitions/finder_steps.rb:1\u001b[0m\u001b[0m\n    \u001b[31mAnd the following elements with text\u001b[90m                                # features/step_definitions/finder_steps.rb:20\u001b[0m\u001b[0m\n      | \u001b[36mfragment   \u001b[0m\u001b[0m |\u001b[0m \u001b[36mtext                                                                      \u001b[0m\u001b[0m |\u001b[0m\n      | \u001b[36mheading    \u001b[0m\u001b[0m |\u001b[0m \u001b[36mWelcome to Real Code Problems                                             \u001b[0m\u001b[0m |\u001b[0m\n      | \u001b[36msub-heading\u001b[0m\u001b[0m |\u001b[0m \u001b[36mReal code problems help you learn how to code while solving real problems.\u001b[0m\u001b[0m |\u001b[0m\n      | \u001b[36mquote-1    \u001b[0m\u001b[0m |\u001b[0m \u001b[36mReal code problems are problems solved with web apps.                     \u001b[0m\u001b[0m |\u001b[0m\n      | \u001b[36mquote-2    \u001b[0m\u001b[0m |\u001b[0m \u001b[36mReal code problems will help you build out BDD phrasing of problems.      \u001b[0m\u001b[0m |\u001b[0m\n\u001b[31m      \u001b[0m\n\u001b[31m      expected: 1\u001b[0m\n\u001b[31m           got: 0\u001b[0m\n\u001b[31m      \u001b[0m\n\u001b[31m      (compared using ==)\u001b[0m\n\u001b[31m       (RSpec::Expectations::ExpectationNotMetError)\u001b[0m\n\u001b[31m      ./features/step_definitions/finder_steps.rb:32:in `block (2 levels) in <top (required)>'\u001b[0m\n\u001b[31m      ./features/step_definitions/finder_steps.rb:26:in `map'\u001b[0m\n\u001b[31m      ./features/step_definitions/finder_steps.rb:26:in `\"the following elements with text\"'\u001b[0m\n\u001b[31m      features/feature_01_get_some_static_text_on_a_web_page.feature:24:in `And the following elements with text'\u001b[0m\n\n\u001b[31mFailing Scenarios:\u001b[0m\n\u001b[31mcucumber features/feature_01_get_some_static_text_on_a_web_page.feature:11\u001b[0m\u001b[90m # Scenario: Put the text in appropriate tags `h1` and a `p` tag\u001b[0m\n\u001b[31mcucumber features/feature_01_get_some_static_text_on_a_web_page.feature:20\u001b[0m\u001b[90m # Scenario: Scope text behind page fragmets identified by data-testid's\u001b[0m\n\n3 scenarios (\u001b[31m2 failed\u001b[0m, \u001b[32m1 passed\u001b[0m)\n8 steps (\u001b[31m2 failed\u001b[0m, \u001b[32m6 passed\u001b[0m)\n0m0.263s\n\u001b[36mintroduction_features_1 exited with code 1\n\u001b[0m\n"
              }
            }
          ]
        }
      ]
    }
  }